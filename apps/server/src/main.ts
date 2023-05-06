// eslint-disable-next-line node/no-unpublished-import
import fastifySwagger from '@fastify/swagger'
// eslint-disable-next-line node/no-unpublished-import
import fastifySwaggerUi from '@fastify/swagger-ui'
import { TypeBoxTypeProvider } from '@fastify/type-provider-typebox'
import { Type as t } from '@sinclair/typebox'
import fastify from 'fastify'

const app = fastify({
  logger: true,
}).withTypeProvider<TypeBoxTypeProvider>()

await app.register(fastifySwagger, {
  openapi: {
    info: {
      title: 'API 仕様書タイトル',
      version: '0.0.1',
    },
  },
})
await app.register(fastifySwaggerUi, {
  routePrefix: '/spec',
})

app.get(
  '/hello',
  {
    schema: {
      querystring: t.Object({
        name: t.String({ description: '名前' }),
        type: t.Union([t.Literal('json'), t.Literal('text')], {
          default: 'json',
          description: 'レスポンスの種類',
        }),
      }),
      response: {
        200: {
          content: {
            'application/json': {
              schema: t.Object({
                message: t.String({ description: 'メッセージ' }),
              }),
            },
            'text/plain': {
              schema: t.String({ description: 'メッセージ' }),
            },
          },
        },
      },
    },
  },
  async (req) => {
    const message = `hello ${req.query.name}`
    return Promise.resolve(req.query.type === 'json' ? { message } : message)
  }
)

await app.ready()
app.swagger()

try {
  await app.listen({ port: 3000 })
} catch (err) {
  app.log.error(err)
  throw err
}

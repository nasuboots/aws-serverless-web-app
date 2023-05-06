import { TypeBoxTypeProvider } from '@fastify/type-provider-typebox'
import { Type as t } from '@sinclair/typebox'
import fastify from 'fastify'

const app = fastify({
  logger: true,
}).withTypeProvider<TypeBoxTypeProvider>()

app.get(
  '/hello',
  {
    schema: {
      querystring: t.Object({
        name: t.String(),
      }),
    },
  },
  async (req) => {
    return Promise.resolve(`hello ${req.query.name}`)
  }
)

try {
  await app.listen({ port: 3000 })
} catch (err) {
  app.log.error(err)
  throw err
}

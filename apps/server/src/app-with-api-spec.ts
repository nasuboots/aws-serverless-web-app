// eslint-disable-next-line node/no-unpublished-import
import fastifySwagger from '@fastify/swagger'
// eslint-disable-next-line node/no-unpublished-import
import fastifySwaggerUi from '@fastify/swagger-ui'
import { TypeBoxTypeProvider } from '@fastify/type-provider-typebox'
import fastify from 'fastify'

import { buildApp } from './app'

export const buildAppWithApiSpec = async (
  app = fastify({ logger: true }).withTypeProvider<TypeBoxTypeProvider>()
) => {
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

  await buildApp(app)

  await app.ready()

  return app
}

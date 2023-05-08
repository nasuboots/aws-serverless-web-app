// eslint-disable-next-line node/no-unpublished-import
import fastifySwagger from '@fastify/swagger'
// eslint-disable-next-line node/no-unpublished-import
import fastifySwaggerUi from '@fastify/swagger-ui'
import { FastifyPluginAsync } from 'fastify'
import fastifyPlugin from 'fastify-plugin'

export const openApiPlugin: FastifyPluginAsync = fastifyPlugin(async (app) => {
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
})

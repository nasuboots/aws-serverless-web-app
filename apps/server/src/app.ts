import { TypeBoxTypeProvider } from '@fastify/type-provider-typebox'
import fastify, { FastifyServerOptions } from 'fastify'

import { helloRoutesPlugin } from './hello'

export const defaultFastifyOptions = (): FastifyServerOptions => ({
  logger: true,
  ignoreTrailingSlash: true,
})

export const buildApp = async (
  app = fastify(defaultFastifyOptions()).withTypeProvider<TypeBoxTypeProvider>()
) => {
  await app.register(helloRoutesPlugin, { prefix: '/hello' })

  return Promise.resolve(app)
}

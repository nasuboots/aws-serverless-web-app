import { TypeBoxTypeProvider } from '@fastify/type-provider-typebox'
import fastify from 'fastify'

import { helloRoutesPlugin } from './hello'

export const buildApp = async (
  app = fastify({ logger: true }).withTypeProvider<TypeBoxTypeProvider>()
) => {
  await app.register(helloRoutesPlugin, { prefix: '/hello' })

  return Promise.resolve(app)
}

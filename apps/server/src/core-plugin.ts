import { FastifyPluginAsyncTypebox } from '@fastify/type-provider-typebox'

import { helloRoutesPlugin } from './hello'

export const corePlugin: FastifyPluginAsyncTypebox = async (app) => {
  await app.register(helloRoutesPlugin, { prefix: '/hello' })
}

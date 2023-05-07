import { FastifyPluginAsyncTypebox } from '@fastify/type-provider-typebox'

import { registerGetHelloHandler } from './get-hello-handler'

export const helloRoutesPlugin: FastifyPluginAsyncTypebox = async (app) => {
  registerGetHelloHandler(app)

  return Promise.resolve()
}

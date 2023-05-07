import { FastifyTypebox } from '../types'

import { getHelloRoute } from './routes'

export const registerGetHelloHandler = (app: FastifyTypebox) => {
  const { method, url, schema } = getHelloRoute

  app.route({
    method,
    url,
    schema,
    handler: async (req) => {
      const message = `hello ${req.query.name}`
      return Promise.resolve(req.query.type === 'json' ? { message } : message)
    },
  })
}

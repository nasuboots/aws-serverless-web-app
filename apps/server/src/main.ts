import fastify from 'fastify'

import { corePlugin } from './core-plugin'
import { openApiPlugin } from './open-api-plugin'

const app = fastify({ logger: true, ignoreTrailingSlash: true })

await app.register(openApiPlugin)
await app.register(corePlugin)

await app.ready()

try {
  await app.listen({ port: 3000 })
} catch (err) {
  app.log.error(err)
  throw err
}

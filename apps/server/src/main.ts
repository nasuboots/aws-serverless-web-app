// eslint-disable-next-line node/no-unpublished-import
import dotenv from 'dotenv'
import fastify from 'fastify'

import { corePlugin } from './core-plugin'
import { getEnv } from './env'
import { openApiPlugin } from './open-api-plugin'

dotenv.config()
const env = getEnv()

const app = fastify({ logger: true, ignoreTrailingSlash: true })

await app.register(openApiPlugin)
await app.register(corePlugin)

await app.ready()

try {
  await app.listen({ port: env.PORT })
} catch (err) {
  app.log.error(err)
  throw err
}

import { buildAppWithApiSpec } from './app-with-api-spec'

const app = await buildAppWithApiSpec()

try {
  await app.listen({ port: 3000 })
} catch (err) {
  app.log.error(err)
  throw err
}

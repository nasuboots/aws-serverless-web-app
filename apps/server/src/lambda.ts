import awsLambdaFastify from '@fastify/aws-lambda'
import type { APIGatewayProxyHandlerV2 } from 'aws-lambda'
import fastify from 'fastify'

import { corePlugin } from './core-plugin'

const app = fastify({ logger: true, ignoreTrailingSlash: true })

await app.register(corePlugin)

export const handler: APIGatewayProxyHandlerV2 = awsLambdaFastify(app)

// awsLambdaFastify(app) のデコレーション後に実施しないとダメ
await app.ready()

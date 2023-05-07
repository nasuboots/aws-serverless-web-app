import awsLambdaFastify from '@fastify/aws-lambda'
import type { APIGatewayProxyHandlerV2 } from 'aws-lambda'

import { buildApp } from './app'

const app = await buildApp()
await app.ready()

export const handler: APIGatewayProxyHandlerV2 = awsLambdaFastify(app)

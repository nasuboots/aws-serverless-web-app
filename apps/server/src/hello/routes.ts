import { Type as t } from '@fastify/type-provider-typebox'

import { AppRoute } from '../types'

export const getHelloRoute = {
  method: 'GET',
  url: '/',
  schema: {
    querystring: t.Object({
      name: t.String({ description: '名前' }),
      type: t.Union([t.Literal('json'), t.Literal('text')], {
        default: 'json',
        description: 'レスポンスの種類',
      }),
    }),
    response: {
      200: {
        content: {
          'application/json': {
            schema: t.Object({
              message: t.String({ description: 'メッセージ' }),
            }),
          },
          'text/plain': {
            schema: t.String({ description: 'メッセージ' }),
          },
        },
      },
    },
  },
} satisfies AppRoute

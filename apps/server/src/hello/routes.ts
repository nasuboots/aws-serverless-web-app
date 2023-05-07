import { Type as t } from '@fastify/type-provider-typebox'

import { AppRoute } from '../types'

export const getHelloRoute = {
  method: 'GET',
  url: '/',
  schema: {
    summary: '挨拶を取得する',
    description: '指定された形式 (JSON | text) で挨拶のメッセージ受け取る。',
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
              message: t.String({
                description: 'メッセージ',
                examples: ['hello ${name}'],
              }),
            }),
          },
          'text/plain': {
            schema: t.String({
              description: 'メッセージ',
              examples: ['hello ${name}'],
            }),
          },
        },
      },
    },
  },
} satisfies AppRoute

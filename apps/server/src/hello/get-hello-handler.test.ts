import { TypeBoxTypeProvider } from '@fastify/type-provider-typebox'
import fastify from 'fastify'

import { registerGetHelloHandler } from './get-hello-handler'

const app = fastify().withTypeProvider<TypeBoxTypeProvider>()
registerGetHelloHandler(app)

test('種類が未指定の時は JSON でメッセージを返すこと', async () => {
  const res = await app.inject({
    method: 'GET',
    path: '/',
    query: {
      name: 'foo',
    },
  })

  expect(res.json()).toEqual({ message: 'hello foo' })
})

test('種類が text の時はテキストでメッセージを返すこと', async () => {
  const res = await app.inject({
    method: 'GET',
    path: '/',
    query: {
      name: 'foo',
      type: 'text',
    },
  })

  expect(res.body).toBe('hello foo')
})

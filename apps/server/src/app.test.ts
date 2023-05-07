import fastify from 'fastify'

import { buildApp } from './app'

const app = await buildApp(fastify({ logger: false }))

test('ルートが登録されていること', () => {
  // prettier-ignore
  expect(app.printRoutes()).toBe(
`└── /
    └── hello (GET, HEAD)
        └── / (GET, HEAD)
`
  )
})

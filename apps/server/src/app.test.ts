import fastify from 'fastify'

import { buildApp, defaultFastifyOptions } from './app'

const app = await buildApp(
  fastify({ ...defaultFastifyOptions(), logger: false })
)

test('ルートが登録されていること', () => {
  // prettier-ignore
  expect(app.printRoutes()).toBe(
`└── /
    └── hello (GET, HEAD)
`
  )
})

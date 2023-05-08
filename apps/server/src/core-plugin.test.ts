import fastify from 'fastify'

import { corePlugin } from './core-plugin'

const app = fastify({ ignoreTrailingSlash: true })

await app.register(corePlugin)

test('ルートが登録されていること', () => {
  // prettier-ignore
  expect(app.printRoutes()).toBe(
`└── /
    └── hello (GET, HEAD)
`
  )
})

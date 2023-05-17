import { z } from 'zod'

import { getEnvWith } from './env'

const Schema = z.object({
  FOO: z.string(),
})

const getEnv = getEnvWith(Schema)

test('スキーマ違反の場合は例外を投げること', () => {
  expect(() => getEnv({ FOO: 42 })).toThrow()
})

test('スキーマ通りの場合は定義されている値だけ返すこと', () => {
  expect(getEnv({ FOO: '42', BAR: 'baz' })).toEqual({ FOO: '42' })
})

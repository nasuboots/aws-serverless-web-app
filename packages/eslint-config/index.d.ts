import type { ParserOptions } from '@typescript-eslint/parser'
import type { Linter } from 'eslint'

export type Config = Linter.Config & { parserOptions: ParserOptions }

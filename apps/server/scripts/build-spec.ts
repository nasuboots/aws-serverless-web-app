/* eslint-disable node/no-extraneous-import */

import childProcess from 'child_process'
import fs from 'fs/promises'
import path from 'path'
import { fileURLToPath } from 'url'
import { promisify } from 'util'

// app.swagger の型情報を読み込むのに必要
// eslint-disable-next-line node/no-unpublished-import
import type {} from '@fastify/swagger'

import { buildAppWithApiSpec } from '../src/app-with-api-spec'

const execFile = promisify(childProcess.execFile)

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const ROOT_PATH = path.resolve(__dirname, '..')
const OUT_DIR = path.resolve(__dirname, '../dist/spec')
const JSON_PATH = path.resolve(OUT_DIR, 'api.json')
const HTML_PATH = path.resolve(OUT_DIR, 'api.html')

const app = await buildAppWithApiSpec()

const json = app.swagger()

// @fastify/swagger-ui が 3.1 に未対応のためここで上書き
Object.assign(json, { openapi: '3.1.0' })

await fs.mkdir(OUT_DIR, { recursive: true })
await fs.writeFile(JSON_PATH, JSON.stringify(json, null, 2), 'utf-8')

const { stdout, stderr } = await execFile(
  'yarn',
  ['redocly', 'build-docs', JSON_PATH, '-o', HTML_PATH],
  {
    cwd: ROOT_PATH,
    shell: process.platform === 'win32',
  }
)

stderr && console.error(stderr)
stdout && console.log(stdout)

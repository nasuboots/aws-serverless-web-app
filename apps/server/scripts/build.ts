/* eslint-disable node/no-extraneous-import */

import path from 'path'
import { fileURLToPath } from 'url'

import esbuild from 'esbuild'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

await esbuild.build({
  entryPoints: [path.resolve(__dirname, '../src/index.ts')],
  outdir: path.resolve(__dirname, '../dist'),
  bundle: true,
  minify: true,
  platform: 'node',
  target: 'node18',
  format: 'esm',
  tsconfig: path.resolve(__dirname, '../tsconfig.app.json'),
  mainFields: ['module', 'main'],
})

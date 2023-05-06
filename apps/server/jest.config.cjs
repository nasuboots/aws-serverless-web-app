'use strict'

/** @typedef {import('@jest/types').Config.InitialOptions} Config */

const fs = require('fs')
const path = require('path')

const json5 = require('json5')
const { pathsToModuleNameMapper } = require('ts-jest')

/** @type {{ compilerOptions: import('typescript').CompilerOptions}} */
const { compilerOptions } = json5.parse(
  fs.readFileSync(path.resolve(__dirname, './tsconfig.app.json'), 'utf-8')
)

/** @type {Config} */
const config = {
  testEnvironment: 'node',
  extensionsToTreatAsEsm: ['.ts', '.tsx'],
  transform: {
    '^.+\\.(t|j)sx?$': '@swc/jest',
  },
  moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths || {}) || {},
}

module.exports = config

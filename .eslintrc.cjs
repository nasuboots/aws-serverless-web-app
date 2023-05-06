'use strict'

/** @type {import('@my-app/eslint-config').Config} */
module.exports = {
  root: true,
  extends: ['@my-app/eslint-config'],
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: ['./tsconfig.dev.json'],
  },
  ignorePatterns: [
    'node_modules',
    'dist',
    'tsc-out',
    'coverage',
    '/apps/',
    '/packages/',
  ],
}

'use strict'

/** @type {import('@my-app/eslint-config').Config} */
module.exports = {
  root: true,
  extends: ['@my-app/eslint-config'],
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: ['./tsconfig.app.json', './tsconfig.node.json'],

    // テストファイルでアプリケーションコードを参照するときに必要
    EXPERIMENTAL_useSourceOfProjectReferenceRedirect: true,
  },
  ignorePatterns: ['node_modules', 'dist', 'tsc-out', 'coverage'],
}

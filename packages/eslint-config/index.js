'use strict'

/** @type {import('./index').MyESLintConfig} */
module.exports = {
  parser: '@typescript-eslint/parser',
  // parserOptions: {
  //   tsconfigRootDir: __dirname,
  //   project: ['./tsconfig.json'],
  // },
  plugins: ['@typescript-eslint', 'import', 'jest', 'node'],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'plugin:jest/recommended',
    'plugin:jest/style',
    'plugin:node/recommended',
    'prettier',
  ],
  rules: {
    eqeqeq: ['error', 'always', { null: 'ignore' }],
    'sort-imports': ['warn', { ignoreDeclarationSort: true }],
    'import/order': [
      'warn',
      {
        alphabetize: { order: 'asc' },
        pathGroups: [
          {
            pattern: '@/**',
            group: 'parent',
            position: 'before',
          },
        ],
        'newlines-between': 'always',
      },
    ],
    'node/no-missing-import': 'off',
    'node/no-missing-require': 'off',
    'node/no-unsupported-features/es-syntax': 'off',
  },
  overrides: [
    {
      files: ['*.cjs'],
      rules: {
        '@typescript-eslint/no-var-requires': 'off',
        '@typescript-eslint/no-unsafe-assignment': 'off',
        '@typescript-eslint/no-unsafe-member-access': 'off',
        'node/no-unpublished-require': 'off',
        'node/no-extraneous-require': 'off',
      },
    },
    {
      files: ['*.test.*', '*.spec.*'],
      rules: {
        'node/no-unpublished-import': 'off',
      },
    },
  ],
}

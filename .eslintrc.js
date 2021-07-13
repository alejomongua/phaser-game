module.exports = {
  env: {
    browser: true,
    es2021: true,
    'cypress/globals': true,
  },
  extends: [
    'standard',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [
    '@typescript-eslint',
    'html',
    'cypress',
  ],
  rules: {
    'comma-dangle': [ 1, 'always-multiline' ],
    'array-bracket-spacing': [ 1, 'always' ],
  },
}

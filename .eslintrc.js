module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'plugin:react/recommended',
    'standard-with-typescript',
    'plugin:react/jsx-runtime'
  ],
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['/home/dokter/Desktop/tut/tsconfig.json']
  },
  plugins: [
    'react'
  ],
  rules: {
    'react/jsx-indent': [2, 4],
    quotes: 0,
    "@typescript-eslint/quotes": "off",
    '@typescript-eslint/strict-boolean-expressions': [0, { allowString: true }]
  }
}

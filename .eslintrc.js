module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'plugin:react/recommended',
    'standard-with-typescript',
    'plugin:react/jsx-runtime',
    "plugin:i18next/recommended"
  ],
  overrides: [
    {
      files: ["*.stories.{ts,tsx}", "*.test.{ts,tsx}"],
      rules: {
        "i18next/no-literal-string": 0
      }
    }
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['tsconfig.json'],
    tsconfigRootDir: __dirname,
  },
  plugins: [
    'react',
    "i18next"
  ],
  rules: {
    'react/jsx-indent': [2, 4],
    quotes: 0,
    "@typescript-eslint/quotes": "off",
    '@typescript-eslint/strict-boolean-expressions': [0, { allowString: true }],
    "i18next/no-literal-string": ["error", { markupOnly: true }],
    "comma-dangle": "off",
    "@typescript-eslint/comma-dangle": ["error", "only-multiline"],
    semi: [1, "always"],
    "@typescript-eslint/semi": "off"
  },
  settings: {
    react: {
      version: "detect"
    }
  }
};

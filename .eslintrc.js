module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['airbnb-base', 'plugin:jest/recommended', 'plugin:prettier/recommended'],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['prettier'],
  rules: {
    'no-console': 'off',
    'no-plusplus': 'off',
    'no-unused-vars': 'warn',
    'no-use-before-define': ['error', { functions: false, classes: false }],
    'prettier/prettier': [
      'error',
      {
        singleQuote: true,
        printWidth: 150,
      },
    ],
  },
};

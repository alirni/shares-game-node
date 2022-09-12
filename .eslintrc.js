module.exports = {
  env: {
    commonjs: true,
    es6: true,
    node: true,
  },
  parserOptions: {
    ecmaVersion: 2020,
  },
  // We don't want to lint generated files nor node_modules, but we want to lint .prettierrc.js (ignored by default by eslint)
  ignorePatterns: ['node_modules/*', '.out/*', '!.prettierrc.js'],
  // eslint-plugin-import
  extends: ['eslint:recommended', 'plugin:prettier/recommended'],
  rules: {
    // General
    indent: 'off',
    quotes: ['error', 'single'],
    'comma-dangle': 'off',
    'no-control-regex': 0,
    'no-unused-vars': 'off',
    'no-trailing-spaces': 'off',
    'implicit-arrow-linebreak': 'off',
    'no-unsafe-optional-chaining': 'off',
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'auto',
      },
      {
        usePrettierrc: true,
      },
    ],
  },
  overrides: [
    {
      // Enable the rule specifically for TS/TSX files
      files: ['**/*.ts'],
      plugins: ['@typescript-eslint'],
      parser: '@typescript-eslint/parser',
      extends: [
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/eslint-recommended',
      ],
      rules: {
        // We will use TypeScript's types for component props instead
        '@typescript-eslint/ban-ts-comment': ['warn'],
        // Why would you want unused vars?
        '@typescript-eslint/no-var-requires': 'error',
        '@typescript-eslint/no-unused-vars': ['warn'],
        '@typescript-eslint/no-empty-function': ['warn'],
        '@typescript-eslint/explicit-module-boundary-types': ['off'],
        // I suggest this setting for requiring return types on functions only where useful
        '@typescript-eslint/explicit-function-return-type': ['off'],
      },
    },
  ],
};

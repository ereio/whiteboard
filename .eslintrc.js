module.exports = {
  root: true,
  env: {
    browser: true,
    es6: true,
    es2020: true,
  },
  extends: [
    'plugin:react/recommended',
    'eslint:recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'airbnb'
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaFeatures: { jsx: true },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [
    'react',
    'jsx-a11y',
    'import'
  ],
  settings: {
    'import/resolver': {
      node: {
        paths: ['src']
      }
    }
  },
  rules: {
    // eslints
    indent: ['error', 2, { SwitchCase: 1 }],
    'arrow-parens': ['error', 'always'],
    semi: ['error', 'always'],
    quotes: ['error', 'single'],
    'max-len': ['error', {
      code: 120, tabWidth: 2, ignoreUrls: true, ignoreStrings: true, ignoreTrailingComments: true
    }],
    'react/no-unused-state': ['off'],
    'no-unused-vars': ['off'],
    'comma-dangle': ['error', 'only-multiline'],
    'object-curly-spacing': ['error', 'always'],
    'array-bracket-spacing': ['error', 'never'],
    'object-curly-newline': ['error', { multiline: true, consistent: true, minProperties: 4 }],
    'function-paren-newline': ['error', 'consistent'],
    'computed-property-spacing': ['error', 'never'],
    'no-underscore-dangle': ['error', { allow: ['__typename'] }],
    'no-console': ['error', { allow: ['warn', 'error'] }],
    'no-trailing-spaces': ['error', { skipBlankLines: true }],

    'import/no-mutable-exports': ['off'],
    'arrow-body-style': ['off'],
    'implicit-arrow-linebreak': ['off'],
    'array-callback-return': ['off'],
    'consistent-return': ['off'],

    // react specific
    'react/jsx-props-no-spreading': ['off'],
    'react/jsx-indent-props': ['error', 2],
    'react/jsx-first-prop-new-line': ['error', 'multiline-multiprop'],
    'react/jsx-max-props-per-line': ['error'],
    'react/jsx-closing-bracket-location': [1, 'after-props'],
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'jsx-a11y/label-has-associated-control': [2, {
      assert: 'either',
    }],
    'react/prop-types': ['off'],
    'class-methods-use-this': ['off'],
    'no-use-before-define': ['off'],

    // custom lints
    'import/no-dynamic-require': 0,
    'import/prefer-default-export': 0,
    'import/no-unresolved ': 0,
    'import/order': [
      'error',
      {
        groups: ['builtin', 'external', 'internal'],
        pathGroups: [
          {
            pattern: 'react*',
            group: 'external',
            position: 'before'
          },
          {
            pattern: 'src/global/**',
            group: 'external',
            position: 'after'
          },
        ],
        pathGroupsExcludedImportTypes: ['react'],
        'newlines-between': 'always',
        alphabetize: {
          order: 'asc',
          caseInsensitive: true
        }
      }
    ],
  },
};

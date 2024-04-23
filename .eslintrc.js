module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  extends: [
    'airbnb',
    'prettier',
    'eslint:recommended',
    'plugin:unicorn/all',
    'plugin:react/recommended',
    'plugin:prettier/recommended',
    'plugin:react-hooks/recommended',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: ['react', 'unicorn', 'prettier', 'react-hooks'],
  rules: {
    indent: 0,
    curly: 'error',
    'no-debugger': 2,
    'no-else-return': 1,
    semi: [1, 'always'],
    'no-console': 'warn',
    'space-unary-ops': 2,
    'no-plusplus': 'off',
    'react/prop-types': 0,
    'no-unused-vars': 'off',
    'unicorn/no-null': 'off',
    'react/jsx-no-bind': 'off',
    'no-param-reassign': 'off',
    'react/display-name': 'off',
    'consistent-return': 'warn',
    'react/no-multi-comp': 'off',
    'react/jsx-uses-react': 'off',
    'import/no-unresolved': 'off',
    'no-extra-boolean-cast': 'off',
    'no-restricted-exports': 'off',
    'unicorn/prefer-spread': 'off',
    'unicorn/filename-case': 'off',
    'prettier/prettier': ['error'],
    'unicorn/no-array-reduce': 'off',
    'no-underscore-dangle': ['error'],
    'unicorn/prefer-node-protocol': 0,
    'react/react-in-jsx-scope': 'off',
    'react/no-array-index-key': 'off',
    'unicorn/no-array-for-each': 'off',
    'unicorn/no-keyword-prefix': 'off',
    'react/no-unescaped-entities': 'off',
    'import/prefer-default-export': 'off',
    'react-hooks/exhaustive-deps': 'warn',
    'react-hooks/rules-of-hooks': 'error',
    'unicorn/no-abusive-eslint-disable': 'off',
    'jsx-a11y/click-events-have-key-events': 'off',
    'jsx-a11y/no-static-element-interactions': 'off',
    'react/jsx-filename-extension': [1, { extensions: ['.jsx', '.js'] }],
    'prefer-arrow-callback': [
      'error',
      {
        allowNamedFunctions: true
      }
    ],
    'no-empty': [
      'error',
      {
        allowEmptyCatch: true
      }
    ],
    'no-restricted-syntax': [
      'error',
      'ForInStatement',
      'LabeledStatement',
      'WithStatement'
    ]
  }
};

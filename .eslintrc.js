module.exports = {
  parserOptions: {
    project: './tsconfig.json',
  },
  extends: ['plugin:@stencil/recommended'],
  rules: {
    '@stencil/strict-boolean-conditions': 'off',
    '@stencil/decorators-style': [
      'error',
      { prop: 'inline', method: 'multiline' },
    ],
    'react/jsx-no-bind': 'off',
  },
};

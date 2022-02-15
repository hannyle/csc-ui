module.exports = {
  parserOptions: {
    project: './tsconfig.json',
  },
  extends: ['plugin:@stencil/recommended'],
  rules: {
    '@stencil/decorators-style': [
      'error',
      { prop: 'inline', method: 'multiline' },
    ],
    'react/jsx-no-bind': 'off',
  },
};

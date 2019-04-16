const { join } = require('path');

module.exports = {
  extends: 'airbnb-base',
  plugins: [
    'import'
  ],
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.marko'],
      },
    },
  },
  rules: {
    'import/no-extraneous-dependencies': [
      'error',
      { packageDir: [ __dirname, join(__dirname, '../..') ] }
    ],
  },
};

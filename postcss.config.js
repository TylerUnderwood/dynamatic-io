const { theme } = require('./config/theme');
const simplifyVars = require('./config/simplify-vars')

module.exports = {
  syntax: 'postcss-scss',
  plugins: {
    'postcss-mixins': {},
    'postcss-simple-vars': {
      variables: simplifyVars( theme ),
    },
    'tailwindcss/nesting': 'postcss-nesting',
    tailwindcss: {},
    autoprefixer: {},
  },
}

const { theme } = require('./config/theme');

const getTheme = () => {
  variables = {}
  for ( const color in theme.colors ) {
    let value = theme.colors[color];
    variables[`color-${color}`] = value;
  };
  return variables;
}

module.exports = {
  syntax: 'postcss-scss',
  plugins: {
    'postcss-mixins': {},
    'postcss-simple-vars': {
      variables: getTheme(),
    },
    'tailwindcss/nesting': 'postcss-nesting',
    tailwindcss: {},
    autoprefixer: {},
  },
}

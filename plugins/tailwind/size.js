const plugin = require('tailwindcss/plugin')

module.exports = plugin(function ({ matchUtilities, theme }) {
  // Support for sizes
  matchUtilities(
    {
      'size': (value) => ({
        fontSize: value,
      }),
    },
    {
      values: theme('size'),
    }
  )
})

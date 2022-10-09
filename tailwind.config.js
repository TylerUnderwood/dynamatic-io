// const theme = require('./config/palet.json');

module.exports = {
  content: [
    "./index.html",
    "./src/App.vue",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '1080px',
      xl: '1440px',
    },
    extend: {
      colors: {
        blue: '#2222ff',
        navy: '#0808ab',
        purple: '#8822ff',
        light: {
          100: '#ffffff',
          200: '#f8f8f8',
          400: '#eeeeee'
        },
        grey: '#666666',
        dark: {
          100: '#080808',
          200: '#242424',
          400: '#404040'
        }
      }
    }
  },
  plugins: [],
}

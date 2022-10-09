// const theme = require('./config/theme.json');

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
      lg: '1024px',
      xl: '2560px',
    },
    extend: {
      colors: {
        primary: 'var(--theme-primary)',
        secondary: 'var(--theme-secondary)',
        accent: 'var(--theme-accent)',
        base: 'var(--theme-base)',
        offset: 'var(--theme-offset)',
        contrast: 'var(--theme-contrast)',
        heading: 'var(--theme-heading)',
        text: 'var(--theme-text)',
        copy: 'var(--theme-copy)',
        input: 'var(--theme-input)',
        hover: 'var(--theme-hover)',
        active: 'var(--theme-active)',
      }
    }
  },
  plugins: [],
}

const { theme } = require('./config/theme');

module.exports = {
  content: [
    "./index.html",
    "./src/App.vue",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: theme,
  plugins: [],
}

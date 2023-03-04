const theme = require('./src/config/theme.json');

module.exports = {
  content: [
    "./index.html",
    "./src/App.vue",
    "./src/**/*.{vue,js,ts,jsx,tsx}"
  ],
  theme: {
    // spacing: theme.sizes,
    screens: theme.screens,
    zIndex: {
      0: "0",
      1: "1",
      2: "2",
      3: "3",
      4: "4",
      5: "5",
      6: "6",
      7: "7",
      8: "8",
      9: "9",
    },
    extend: {
      colors: {
        primary: "var(--theme-primary)",
        secondary: "var(--theme-secondary)",
        accent: "var(--theme-accent)",
        base: "var(--theme-base)",
        offset: "var(--theme-offset)",
        contrast: "var(--theme-contrast)",
        head: "var(--theme-head)",
        face: "var(--theme-face)",
        body: "var(--theme-body)",
        input: "var(--theme-input)",
        marker: "var(--theme-marker)",
        muted: "var(--theme-muted)",
      },
    },
  },
  plugins: [
    require('./plugins/stripes.js'),
  ],
};

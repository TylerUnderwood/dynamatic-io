const theme = require('./src/config/theme.json');

module.exports = {
  content: [
    "./index.html",
    "./src/App.vue",
    "./src/**/*.{vue,js,ts,jsx,tsx}"
  ],
  theme: {
    // spacing: theme.sizes,
    screens: theme.screen,
    extend: {
      colors: {
        "primary-up": "var(--theme-primary-up)",
        "primary": "var(--theme-primary)",
        "primary-down": "var(--theme-primary-down)",
        "secondary": "var(--theme-secondary)",
        "tertiary": "var(--theme-tertiary)",
        "accent": "var(--theme-accent)",
        "base": "var(--theme-base)",
        "offset": "var(--theme-offset)",
        "contrast": "var(--theme-contrast)",
        "head": "var(--theme-head)",
        "face": "var(--theme-face)",
        "body": "var(--theme-body)",
        "input": "var(--input-color)",
        "markup": "var(--markup-color)",
        "muted": "var(--markup-muted)",
      },
      maxWidth: {
        "site": "var(--max-w-site)",
        "page": "var(--max-w-page)",
        "copy": "var(--max-w-copy)",
      },
      spacing: {
        "page": "var(--space-page)",
        "section": "var(--space-section)",
      },
      borderWidth: {
        1: "1px",
      },
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
    },
  },
  plugins: [
    require('./plugins/stripes.js'),
  ],
};

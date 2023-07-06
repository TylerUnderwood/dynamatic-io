<script>
import theme from '@config/theme.json';
import themeNeon from '@config/theme-neon.json';
import tokenBuilder from '@config/token-builder';

export default {
  data() {
    return {
      theme: theme,
      themeNeon: themeNeon,
    }
  },

  methods: {
    setTheme(theme) {
      document.getElementById('theme').innerHTML = tokenBuilder(theme);
    }
  },

  created() {
    this.setTheme(this.themeNeon);
  },
}
</script>

<template>
    <noscript>Theme and Core</noscript>
</template>

<style lang="scss">
@import "@styles/theme/index.scss";
</style>
<style lang="scss">
@import "@styles/core/index.scss";
</style>
<style>
@import "@styles/components/index.css";
</style>

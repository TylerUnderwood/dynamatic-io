<template>
  <div id="someElementId">
    <p>color {{ theme.colors.red }}</p>
    <input type="checkbox">
  </div>
</template>

<script>
import theme from './../../../config/theme.json';
import simplifyVars from './../../../config/simplify-json-vars';

export default {
  methods: {
    createThemeVars( theme ) {
      let cssVars = '';
      const obj = simplifyVars( theme );

      for ( const key in obj ) {
        cssVars += `--${key}: ${obj[key]};`;
        if (key !== Object.keys(obj)[Object.keys(obj).length - 1]) cssVars += '\n\t';
      }

      return cssVars;
    }
  },

  created() {
    document.getElementById('themeStyles').innerHTML = `:root {
      ${this.createThemeVars(theme)}
    }`;
  },

  data() { return {
    theme,
  }},
}
</script>

<style>
@import "../../css/theme/index.css";
</style>
<style>
@import "../../css/base/index.css";
</style>
<style>
@import "../../css/components/index.css";
</style>

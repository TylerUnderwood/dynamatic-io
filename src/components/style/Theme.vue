<template>
  <div id="themeSettings" style="order: 99">
    <details>
      <summary>Theme Vars</summary>
      <code>
        <pre>
{{ createCssVars( theme ) }}
        </pre>
      </code>
    </details>
    <p>
      azure
      <mark :style="{backgroundColor: theme.colors.azure}">
        {{ theme.colors.azure }}
      </mark>
    </p>
  </div>
</template>

<script>
import themeVars from '@config/theme-vars';

export default {
  methods: {
    createCssVars( theme ) {
      let cssVars = '';
      const obj = themeVars( theme );

      for ( const key in obj ) {
        cssVars += `--${key}: ${obj[key]};`;
        if (key !== Object.keys(obj)[Object.keys(obj).length - 1]) cssVars += '\n';
      }

      return cssVars;
    }
  },

  async created() {
    document.getElementById('theme-styles').innerHTML = `
      :root {
        ${this.createCssVars(theme)}
      }
    `;
  },

  data() { return {
    theme,
  }},
}
</script>

<style>
@import "@styles/theme/index.css";
</style>
<style>
@import "@styles/base/index.css";
</style>
<style>
@import "@styles/components/index.css";

mark::before,
mark::after {
  content: "\00a0";
}
</style>

<script>
import tokensNative from '@config/tokens-native';

export default {
  methods: {
    tokenList( category ) {
      let tokensStyles = '';
      category.forEach((token, index) => {
        tokensStyles += token + (index < category.length - 1 ? '\n  ' : '');
      });
      return tokensStyles;
    },

    buildCssVars( themeTokens ) {
      let themeStyles = '';

      const addCategoryStyles = ( category, categoryName, rule ) => {
        themeStyles += `
/* ${categoryName} */
${rule} {
  ${this.tokenList( themeTokens[category] )}
}\n`
      };

      for ( const category in themeTokens ) {
        if ( category === "DEFAULT" ) {
          addCategoryStyles(category, "Theme", ":root");
        } else {
          addCategoryStyles(category, category, ":root");
        }
      };

      return themeStyles;
    }
  },

  created() {
    document.getElementById('theme').innerHTML = this.buildCssVars( tokensNative );
  },

  data() { return {
    theme,
    tokensNative,
  }},
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
<style lang="scss">
@import "@styles/components/index.scss";
</style>

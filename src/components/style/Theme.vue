<template>
  <div id="themeSettings">
    <details open>
      <summary><h2 class="m-2">Theme Vars</h2></summary>
      <details v-for="category, cline in tokens" :open="/^color/.test(cline) ? true : null">
        <summary><h3 class="m-2">{{ cline }}</h3></summary>
        <code v-for="token, name in category" class="block mt-2">
          <span>{{ name }}: </span>
          <mark v-if="/^#/.test(token)" :style="{backgroundColor: token}">
            <span
              v-if="['color-dark','color-light'].some(s => name.includes(s))"
              style="color: white; mix-blend-mode: difference;"
            >
              {{ token }}
            </span>
            <span v-else>{{ token }}</span>
          </mark>
          <mark v-else-if="/^--/.test(token)" :style="{backgroundColor: `var(${token})`}">
            <span>{{ token }}</span>
          </mark>
          <mark v-else>
            <span>{{ token }}</span>
          </mark>
        </code>
      </details>
    </details>
  </div>
</template>

<script>
import tokens from '@config/tokens';
import tokensNative from '@config/tokens-native';

export default {
  methods: {
    tokenList( category ) {
      let tokensStyles = '';
      category.forEach((token, index) => {
        tokensStyles += token + (index < category.length - 1 ? '\n    ' : '');
      });
      return tokensStyles;
    },

    buildCssVars( themeTokens ) {
      let themeStyles = '';
      for ( const category in themeTokens ) { themeStyles +=
`@layer theme {
  :root {
    ${this.tokenList( themeTokens[category] )}
  }
}\n\n`
      };
      return themeStyles;
    }
  },

  created() {
    document.getElementById('theme-styles').innerHTML = this.buildCssVars( tokensNative );
  },

  data() { return {
    theme,
    tokens,
    tokensNative,
  }},
}
</script>

<style>
@import "@styles/theme/index.css";
</style>
<style lang="scss">
@import "@styles/core/index.scss";
</style>
<style>
@import "@styles/components/index.css";

mark {
  background-color: var(--color-azure);
}

mark::before,
mark::after {
  content: "\00a0";
}

summary {
  display: flex;
  cursor: pointer;
  background-color: rgb(0 0 0 / 0.1);
  border-bottom: solid 2px currentColor;
}
details > details {
  padding: 0 1rem;
}
details > details > summary {
  border-right: solid 2px currentColor;
  border-left: solid 2px currentColor;
}
details + details[open] > summary {
  margin-bottom: 1.6rem;
}
details[open] + details > summary {
  margin-top: 1.6rem;
  border-top: solid 2px currentColor;
}
</style>

<template>
  <div id="themeSettings">
    <details open>
      <summary><h2 class="m-2">Theme Vars</h2></summary>
      <details v-for="category, cline in tokens" open>
        <summary><h3 class="m-2">{{ cline }}</h3></summary>
        <code v-for="token, name in category" class="block mt-2">
          <span>{{ name }}: </span>
          <mark :style="{backgroundColor: token}">
            <span
              v-if="['dark','light'].some(s => name.includes(s))"
              style="color: white; mix-blend-mode: difference;">
              {{ token }}
            </span>
            <span v-else>{{ token }}</span>
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
      console.log(category, 'list');
      let tokenss = '';
      category.forEach(token => { tokenss += token + '\n' });
      return tokenss;
    },

    buildCssVars( tokens ) {
      console.log(tokens, 'build');
      for ( const category in tokens ) { return `
        @layer theme.${category} {
          :root {
            ${this.tokenList( tokens[category] )}
          }
        }
      `};
    }
  },

  created() {
    console.log(tokensNative, 'create');
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
<style>
@import "@styles/base/index.css";
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
  background-color: rgb(0 0 0 / 0.2);
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

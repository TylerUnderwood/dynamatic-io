<script setup>
import SectionDocs from "@/components/SectionDocs.vue";
</script>

<script>
import theme from '@config/theme.json';
import tokens from '@config/tokens';

export default {
  data() {
    return {
      theme,
      tokens,
      themeNames: [],
    }
  },

  created() {
    this.themeNames = [
      ...Object.keys(tokens.light).map(color => color.replace(/light/g, 'theme')),
      ...Object.keys(tokens.colors).filter(color => /^blue/.test(color)),
      ...Object.keys(tokens.colors).filter(color => /^dark/.test(color)),
      ...Object.keys(tokens.colors).filter(color => /^light/.test(color)),
    ]
  }
}
</script>

<template>
  <SectionDocs heading="Tokens">
    <div class="pt-6"></div>
    <details
      v-for="category, cline in tokens"
      :open="/^colors/.test(cline) ? true : null"
    >
      <summary>
        <h3 class="Heading h3">{{ cline }}</h3>
      </summary>
      <code v-for="token, name in category" class="block mt-2">
        <span>{{ name }}: </span>
        <mark v-if="/^#/.test(token)" :style="{backgroundColor: token}">
          {{ token }}
        </mark>
        <mark v-else-if="/^--/.test(token)" :style="{backgroundColor: `var(${token})`}">
          {{ token }}
        </mark>
        <mark v-else>
          {{ token }}
        </mark>
      </code>
    </details>
  </SectionDocs>

  <SectionDocs heading="Colors">
    <div class="pt-6"></div>
    <div class="flex flex-wrap gap-y-6">
      <div
        v-for="name in themeNames"
        class="flex flex-col w-1/6"
        :style="{ color: `var(--${name})` }"
      >
        <code class="Meta text-face mt-auto mb-2" :style="{fontSize: '0.6rem'}">
          {{ name, `var(--${name})` }}
        </code>
        <div class="w-full bg-current" :style="{paddingTop: '100%'}"></div>
      </div>
    </div>
  </SectionDocs>
</template>

<style>
mark {
  background-color: var(--theme-accent);
  color: black;
  mix-blend-mode: multiply;
}
mark::before,
mark::after {
  content: "\00a0";
}
</style>

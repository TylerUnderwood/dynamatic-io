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
      tokens
    }
  }
}
</script>

<template>
  <SectionDocs
    heading="Theme Tokens"
  >
    <div class="break" style="font-size: 2.4rem;"></div>
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

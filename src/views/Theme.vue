<script setup>
import Banner from "@/components/Banner.vue";
import Section from "../components/Section.vue";
</script>

<template>
  <Banner title="Theme" />
  <Section id="theme-tokens">
    <details class="Markup" open>
      <summary><h2>Theme Tokens</h2></summary>
      <details v-for="category, cline in tokens" :open="/^colors/.test(cline) ? true : null">
        <summary><h3>{{ cline }}</h3></summary>
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
    </details>
  </Section>
</template>

<script>
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

details {
  margin: 0;
}
summary {
  display: flex;
  cursor: pointer;
  border-bottom: solid 2px currentColor;
  padding: 0.8rem 0;
}
details > details {
  margin: 0 1rem;
}
details[open] > summary {
  margin-bottom: 1.6rem;
}
details[open] + details {
  margin-top: 1.6rem;
  border-top: solid 2px currentColor;
}
details[open] > summary + details {
  margin-top: -1.6rem;
}
</style>

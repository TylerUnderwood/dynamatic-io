<script setup>
import Banner from "@/components/Banner.vue";
import Section from "../components/Section.vue";
</script>

<template>
  <Banner title="Color" />
  <Section id="theme-colors">
    <div class="flex flex-wrap">
      <div
        v-for="name in themeNames"
        class="flex flex-col w-1/6 mt-6"
        :style="{ color: `var(--${name})` }"
      >
        <code class="meta text-face mt-auto mb-2" :style="{fontSize: '0.6rem'}">
          {{ name, `var(--${name})` }}
        </code>
        <div class="w-full bg-current" :style="{paddingTop: '100%'}"></div>
      </div>
    </div>
  </Section>
</template>

<script>
import tokens from '@config/tokens';

export default {
  data() {
    return {
        themeNames: [],
    }
  },
  created() {
    this.themeNames = [
      ...Object.keys(tokens.light).map(color => color.replace(/light/g, 'theme')),
      ...Object.keys(tokens.colors).filter(color => /^blue/.test(color)),
      ...Object.keys(tokens.colors).filter(color => /^dark/.test(color)),
      ...Object.keys(tokens.colors).filter(color => /^light/.test(color))
    ]
  }
}
</script>

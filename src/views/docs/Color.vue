<script setup>
import SectionDocs from "@/components/SectionDocs.vue";
</script>

<script>
import tokens from '@config/tokens';

export default {
  data() {
    return {
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
  <SectionDocs heading="Theme Colors">
    <div class="flex flex-wrap gap-y-6 mt-8">
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

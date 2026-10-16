<script setup lang="ts">
import { shallowRef, watch } from 'vue';
import type { Component } from 'vue';
import { useRoute } from 'vue-router';
import { useThemeStore } from '@/stores/Theme';
import ThemeStyles from '@/components/styles/ThemeStyles.vue';
import SkipTo from '@/components/SkipTo.vue';
import Header from '@/components/Header.vue';
import Page from '@/templates/Page.vue';
import Docs from '@/templates/Docs.vue';
import Footer from '@/components/Footer.vue';
import Guidelines from '@/components/Guidelines.vue';
import SettingsWidget from '@/components/SettingsWidget.vue';
import UtilitiesStyles from '@/components/styles/UtilitiesStyles.vue';

const route = useRoute();
const themeStore = useThemeStore();

themeStore.init();

const getLayoutComponent = (name: string) => {
  switch (name) {
    case 'Docs':
      return Docs;
    default:
      return Page;
  }
};

const Layout = shallowRef<Component>(getLayoutComponent(route.meta.template as string));

watch(() => route.meta.template, (newTemplate) => {
  Layout.value = getLayoutComponent(newTemplate as string);
});
</script>

<template>
  <!-- Load theme styles first to ensure CSS vars are available top level -->
  <ThemeStyles />

  <SkipTo class="z-7" />

  <Header class="z-3" />

  <component :is="Layout" class="z-1" />

  <Footer class="z-2" />

  <SettingsWidget class="z-6" />

  <Guidelines class="z-0" />

  <!-- Load utility styles after to maintain higher specificity -->
  <UtilitiesStyles />
</template>

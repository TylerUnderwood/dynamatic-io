<script setup>
import { shallowRef, watch } from 'vue'
import { useRoute } from 'vue-router'
import Theme from "@/components/Theme.vue";
import SkipTo from "@/components/SkipTo.vue";
import Header from "@/components/Header.vue";
import Page from "@/templates/Page.vue";
import Docs from "@/templates/Docs.vue";
import Footer from "@/components/Footer.vue";
import Guidelines from "@/components/Guidelines.vue";
import Settings from "@/components/Settings.vue";
import Utilities from "@/components/Utilities.vue";

const route = useRoute();

const getLayoutComponent = (name) => {
  switch (name) {
    case 'Docs':
      return Docs;
    default:
      return Page;
  }
};

const Layout = shallowRef(getLayoutComponent(route.meta.template));

watch(() => route.meta.template, (newTemplate) => {
  Layout.value = getLayoutComponent(newTemplate);
});
</script>

<template>
  <Theme />

  <SkipTo class="z-7" />

  <Header class="z-3" />

  <component :is="Layout" class="z-1" />

  <Footer class="z-2" />

  <Settings class="z-6" />

  <Guidelines class="z-0" />

  <Utilities />
</template>

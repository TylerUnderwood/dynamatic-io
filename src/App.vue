<script setup>
import Theme from "@/components/Theme.vue";
import SkipTo from "@/components/SkipTo.vue";
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import Page from "@/templates/Page.vue";
import Utilities from "@/components/Utilities.vue";
import Guidelines from "@/components/Guidelines.vue";
import Settings from "@/components/Settings.vue";
</script>

<template>
  <Theme />

  <SkipTo class="z-7" />

  <Header class="z-3" />

  <Page class="z-1" />

  <Footer class="z-2" />

  <Settings class="z-6" />

  <Guidelines class="z-0" />

  <div id="notifications-stack" class="relative z-8"></div>

  <div id="modals-stack" class="relative z-9"></div>

  <Utilities />
</template>

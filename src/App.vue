<script setup>
import Theme from "@/components/Theme.vue";
import SkipToMain from "@/components/SkipToMain.vue";
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import Page from "@/templates/Page.vue";
import Utilities from "@/components/Utilities.vue";
</script>

<template>
  <Theme />

  <SkipToMain class="z-7" />

  <Header class="z-3" />

  <Page class="z-1" />

  <Footer class="z-2" />

  <div id="notifications-stack" class="relative z-8"></div>

  <div id="modals-stack" class="relative z-9"></div>

  <Utilities/>
</template>

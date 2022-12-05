<script setup>
import Banner from "@/components/Banner.vue";
import Section from "@/components/Section.vue";
</script>

<script>
export default {
  computed: {
    nav() {
      return this.$router.getRoutes().filter(route => route.name === "Docs")[0].children;
    }
  },
};
</script>

<template>
  <Banner title="Docs" />

  <div class="flex flex-col lg:flex-row">
    <div class="margins lg:w-1/4 gutter lg:pr-0" style="max-width: 360px;">
      <span class="Heading mb-6">Side Left</span>
      <nav class="Nav">
        <ul class="Nav__list lg:flex-col">
          <li class="Nav__item" v-for="(item, index) in nav" :key="index">
            <router-link :to="`/docs/${item.path}`" class="Link Nav__link">
              <span class="Meta">{{ item.name }}</span>
            </router-link>
          </li>
        </ul>
      </nav>
    </div>
    <div class="flex-1">
      <Section heading="Main"></Section>
      <router-view></router-view>
    </div>
    <div class="margins lg:w-1/4 gutter lg:pl-0" style="max-width: 360px;">
      <span class="Heading mb-6">Side Right</span>
    </div>
  </div>
</template>

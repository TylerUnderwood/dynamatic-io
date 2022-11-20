<script setup>
import Banner from "@/components/Banner.vue";
import Section from "@/components/Section.vue";
</script>

<script>
export default {
  data() {
    return {
      nav: [
        { url: "/docs/taxonomy", name: "Taxonomy" },
        { url: "/docs/theme", name: "Theme" },
        { url: "/docs/color", name: "Color" },
        { url: "/docs/buttons", name: "Buttons" },
        { url: "/docs/fields", name: "Fields" },
        { url: "/docs/layout", name: "Layout" },
      ],
    };
  },
};
</script>

<template>
  <Banner title="Docs" />

  <Section heading="Docs List">
    <nav class="Nav mt-8">
      <ul class="Nav__list">
        <li class="Nav__item" v-for="(item, index) in nav" :key="index">
          <router-link :to="item.url" class="Link Nav__link">
            <span class="Meta">{{ item.name }}</span>
          </router-link>
        </li>
      </ul>
    </nav>
  </Section>

  <router-view></router-view>
</template>

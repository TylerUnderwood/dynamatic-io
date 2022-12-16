<script setup>
import Banner from "@/components/Banner.vue";
import Section from "@/components/Section.vue";
import Sidebar from "@/components/Sidebar.vue";
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

  <section class="DocsTemplate margins gutter">
    <div class="DocsTemplate__wrap wrapper max-site">

      <!-- Navigation -->
      <div class="DocsTemplate__leftBar">
        <Sidebar>
          <span class="Heading text-sm uppercase">
            Navigation
          </span>
          <hr class="Line mt-3 mb-6">
          <nav class="Nav">
            <ul class="Nav__list flex-wrap lg:flex-col">
              <li class="Nav__item" v-for="(item, index) in nav" :key="index">
                <router-link :to="`/docs/${item.path}`" class="Link Nav__link">
                  <span class="Meta">{{ item.name }}</span>
                </router-link>
              </li>
            </ul>
          </nav>
        </Sidebar>
      </div>

      <!-- Table of Contents -->
      <div class="DocsTemplate__rightBar">
        <Sidebar>
          <span class="Heading text-sm uppercase">
            Table of Contents
          </span>
          <hr class="Line mt-3 mb-6">
        </Sidebar>
      </div>

      <!-- Main -->
      <div class="DocsTemplate__main wrapper">
        <router-view></router-view>
      </div>

    </div>
  </section>
</template>

<style>
  .DocsTemplate {
    display: flex;
  }

  .DocsTemplate__wrap {
    display: grid;
    gap: 1.6rem;
    grid-template:
      " left "
      " right "
      " main "
      / 100%
    ;
  }

  .DocsTemplate__leftBar {
    grid-area: left;
  }

  .DocsTemplate__rightBar {
    grid-area: right;
  }

  .DocsTemplate__main {
    grid-area: main;
  }

  .DocsTemplate__leftBar,
  .DocsTemplate__rightBar {
    display: flex;
    width: 100%;
  }

  @media screen and (min-width: 1024px) {
    .DocsTemplate__wrap {
      grid-template:
        " left main right "
        / 12rem 1fr 12rem
      ;
    }
  }
</style>

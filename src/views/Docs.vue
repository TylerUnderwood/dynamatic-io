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
    <div class="DocsTemplate__wrap wrapper max-site" layout="column lg:row">

      <!-- Navigation -->
      <div class="DocsTemplate__aside lg:pr-4">
        <Sidebar>
          <span class="Heading text-sm uppercase mb-6">
            Navigation
          </span>
          <nav class="Nav">
            <ul class="Nav__list lg:flex-col flex-wrap">
              <li class="Nav__item" v-for="(item, index) in nav" :key="index">
                <router-link :to="`/docs/${item.path}`" class="Link Nav__link">
                  <span class="Meta">{{ item.name }}</span>
                </router-link>
              </li>
            </ul>
          </nav>
        </Sidebar>
      </div>

      <!-- Main -->
      <div class="DocsTemplate__main wrapper">
        <router-view></router-view>
      </div>

      <!-- Table of Contents -->
      <div class="DocsTemplate__aside lg:pl-4">
        <Sidebar>
          <span class="Heading text-sm uppercase mb-6">
            Table of Contents
          </span>
        </Sidebar>
      </div>

    </div>
  </section>
</template>

<style>
  .DocsTemplate {

  }

  .DocsTemplate__aside {
    display: flex;
    width: 100%;
  }

  .DocsTemplate__main {
    /* flex: 1 0 auto; */
  }

  .DocsTemplate__main .gutter {
    padding-left: 0;
    padding-right: 0;
  }

  @media screen and (min-width: 1024px) {
    .DocsTemplate__aside {
      max-width: 12rem;
    }
  }
</style>

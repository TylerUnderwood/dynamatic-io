<script setup>
import Banner from "@/components/Banner.vue";
import Section from "@/components/Section.vue";
import Sidebar from "@/components/Sidebar.vue";
import SidebarNav from "@/components/SidebarNav.vue";
import { useTableOfContentsStore } from '@/stores/TableOfContents';
</script>

<script>
export default {
  data() {
    return {
      tableOfContents: useTableOfContentsStore(),
    }
  },

  computed: {
    nav() {
      const routerItems = this.$router.getRoutes().filter(route => route.name === "Docs")[0].children;
      let navItems = [];

      routerItems.forEach(item => {
        navItems.push({
          name: item.name,
          link: `/docs/${item.path}`,
        })
      });

      return navItems;
    },

    toc() {
      const tocItems = this.tableOfContents.items;
      let navItems = [];

      tocItems.forEach(item => {
        navItems.push({
          name: item.name,
          link: `#${item.id}`,
        })
      });

      return navItems;
    },
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
          <SidebarNav
            heading="Navigation"
            :items="nav"
          />
        </Sidebar>
      </div>

      <!-- Table of Contents -->
      <div class="DocsTemplate__rightBar">
        <Sidebar>
          <SidebarNav
            heading="Table of Contents"
            :items="toc"
          />
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

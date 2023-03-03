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

      return routerItems.map(item => {
        return item = {
          name: item.name,
          link: `/docs/${item.path}`,
          isInternal: true,
        };
      });
    },

    toc() {
      const tocItems = this.tableOfContents.items;

      return tocItems.map(item => {
        return item = {
          name: item.name,
          link: `#${item.id}`,
        };
      });
    },
  },

  beforeMount() {
    this.tableOfContents.clear();
  },
};
</script>

<template>
  <Banner title="Docs" />

  <section class="DocsTemplate margins gutter">
    <div class="DocsTemplate__wrap">

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
    --sidebar-width: 11rem;
    --sidebar-gap: 1.6rem;
  }

  .DocsTemplate__wrap {
    display: grid;
    gap: var(--sidebar-gap);
    grid-template:
      " left "
      " right "
      " main "
      / 100%
    ;
    width: 100%;
    max-width: calc(var(--wrapper-page) + (var(--sidebar-width) * 2) + (var(--sidebar-gap) * 2));
    margin: auto;
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
        / var(--sidebar-width) 1fr var(--sidebar-width)
      ;
    }
  }
</style>

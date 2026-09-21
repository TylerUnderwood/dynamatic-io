<script setup>
import { computed, onBeforeMount } from 'vue';
import { useRouter } from 'vue-router';
import { useTableOfContentsStore } from '@/stores/TableOfContents';
import Hero from "@/components/hero/Hero.vue";
import Sidebar from "@/components/Sidebar.vue";
import SidebarNav from "@/components/SidebarNav.vue";

const router = useRouter();
const tableOfContentsStore = useTableOfContentsStore();

const nav = computed(() => {
  const routerItems = router.getRoutes()
    .filter(route => route.name === "Docs")[0]
    .children.filter(route => route.path !== "");

  return routerItems.map(item => {
    return {
      name: item.name,
      path: `/docs/${item.path}`,
    };
  });
});

const toc = computed(() => {
  const tocItems = tableOfContentsStore.items;

  return tocItems.map(item => {
    return {
      name: item.name,
      path: `#${item.id}`,
    };
  });
});

onBeforeMount(() => {
  tableOfContentsStore.clear();
});

console.log("Docs.vue: nav", nav.value);
console.log("Docs.vue: toc", toc.value);
</script>

<script>

</script>

<template>
  <Hero title="Docs" />

  <div class="DocsLayout my-section px-page">
    <div class="DocsLayout__wrap">

      <!-- Navigation -->
      <div class="DocsLayout__leftBar">
        <Sidebar>
          <SidebarNav
            heading="Navigation"
            :nav="nav"
          />
        </Sidebar>
      </div>

      <!-- Table of Contents -->
      <div class="DocsLayout__rightBar">
        <Sidebar>
          <SidebarNav
            heading="Table of Contents"
            :nav="toc"
          />
        </Sidebar>
      </div>

      <!-- Main -->
      <article class="DocsLayout__main wrapper">
        <router-view></router-view>
      </article>

    </div>
  </div>
</template>

<style>
  .DocsLayout {
    display: flex;
    --sidebar-width: 11rem;
    --sidebar-gap: 1.6rem;
  }

  .DocsLayout__wrap {
    display: grid;
    gap: var(--sidebar-gap);
    grid-template:
      " left "
      " right "
      " main "
      / 100%
    ;
    width: 100%;
    max-width: calc(var(--max-w-page) + (var(--sidebar-width) * 2) + (var(--sidebar-gap) * 2));
    margin: auto;
  }

  .DocsLayout__leftBar {
    grid-area: left;
  }

  .DocsLayout__rightBar {
    grid-area: right;
  }

  .DocsLayout__main {
    grid-area: main;
  }

  .DocsLayout__leftBar,
  .DocsLayout__rightBar {
    display: flex;
    width: 100%;
  }

  @media screen and (min-width: 1024px) {
    .DocsLayout__wrap {
      grid-template:
        " left main right "
        / var(--sidebar-width) 1fr var(--sidebar-width)
      ;
    }
  }
</style>

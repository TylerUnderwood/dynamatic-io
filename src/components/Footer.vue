<script setup>
import { useRouter } from 'vue-router';
import { computed } from 'vue';

const router = useRouter();

const navItemNames = [
  'Home',
  'About',
  'Demos',
  'Tinkering',
  'Settings',
]

const navItems = computed(() => {
  return navItemNames.map(name => {
    return router.getRoutes().find(route => route.name === name);
  });
});
</script>

<template>
  <footer id="footer" class="Footer flex items-center">
    <div class="wrapper wrapper max-w-site">
      <nav class="Nav">
        <ul class="Nav__list">
          <li class="Nav__item" v-for="item in navItems">
            <router-link :to="item.path" class="Link Nav__link">
              <span class="Meta lhc">{{ item.name }}</span>
            </router-link>
          </li>
        </ul>
      </nav>
      <div id="resource-attribution" class="sr-only">
        Uicons by <a href="https://www.flaticon.com/uicons">Flaticon</a>
      </div>
    </div>
  </footer>
</template>

<style>
.Footer {
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px inset, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px inset;
  border-color: var(--theme-contrast);
  border-top-width: 1px;
  padding: var(--space-page);
  background-color: var(--theme-offset);
}
</style>

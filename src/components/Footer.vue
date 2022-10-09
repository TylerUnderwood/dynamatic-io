<script>
export default {
  data() {
    return {
      nav: [
        { url: '/', name: 'Home'},
        { url: '/about', name: 'About'},
        { url: '/theme', name: 'Theme'}
      ]
    }
  }
}
</script>

<template>
    <footer id="footer" class="Footer flex items-center">
      <div class="wrapper max-site">
        <nav class="SiteNav">
          <ul class="SiteNav__list">
            <li class="SiteNav__item" v-for="item in nav">
              <router-link :to="item.url" class="Link SiteNav__link Meta">
                {{ item.name }}
              </router-link>
            </li>
          </ul>
        </nav>
      </div>

    </footer>
</template>

<style>
    .Footer {
        padding: var(--section-space-y) var(--section-space-x);
        background-color: var(--theme-offset)
    }
</style>

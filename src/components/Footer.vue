<script>
export default {
  data() {
    return {
      nav: [
        { url: '/', name: 'Home'},
        { url: '/sandbox', name: 'Sandbox'},
        { url: '/tokens', name: 'Tokens'},
      ]
    }
  }
}
</script>

<template>
  <footer id="footer" class="Footer flex items-center">
    <div class="page-wrapper max-w-site">
      <nav class="Nav">
        <ul class="Nav__list">
          <li class="Nav__item" v-for="item in nav">
            <router-link :to="item.url" class="Link Nav__link ">
              <span class="Meta lhc">{{ item.name }}</span>
            </router-link>
          </li>
        </ul>
      </nav>
    </div>

  </footer>
</template>

<style>
.Footer {
  padding: var(--space-page) var(--space-page);
  background-color: var(--theme-offset)
}
</style>

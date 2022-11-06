<script>
export default {
  data() {
    return {
      nav: [
        { url: '/', name: 'Home'},
        { url: '/about', name: 'About'}
      ]
    }
  }
}
</script>

<template>
    <footer id="footer" class="Footer flex items-center">
      <div class="wrapper max-site">
        <nav class="Nav">
          <ul class="Nav__list">
            <li class="Nav__item" v-for="item in nav">
              <router-link :to="item.url" class="Link Nav__link ">
                <span class= "Meta">{{ item.name }}</span>
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

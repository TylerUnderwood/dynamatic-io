<script>
export default {
  data() {
    return {
      nav: [
        { url: '/about', name: 'About'},
        { url: '/contact', name: 'Contact'},
        { url: '/sandbox', name: 'Sandbox'}
      ]
    }
  }
}
</script>

<template>
  <header id="header" class="flex justify-between items-center p-4">
    <div class="flex -m-4">
      <router-link to="/" class="Logo p-4">
        LOGO
      </router-link>
    </div>

    <div class="spacer ml-auto"></div>

    <nav class="Nav">
      <ul class="Nav__list">
        <li class="Nav__item" v-for="item in nav">
          <router-link :to="item.url" class="Link Nav__link">
            <span class="meta">{{ item.name }}</span>
          </router-link>
        </li>
      </ul>
    </nav>

    <div class="spacer"></div>

    <router-link to="/docs">
      <div class="Button" data-shape="simple">
        <span class="Button__text meta">Docs</span>
      </div>
    </router-link>
  </header>
</template>

<style>
.Logo {
  font-weight: 700;
  letter-spacing: 2px;
  font-size: 1.2rem;
}

.Logo:hover,
.Logo:focus {
  background-color: rgb(64 64 160 / 0.1);
}
</style>

<script>
export default {
  data() {
    return {
      nav: [
        { url: '/', name: 'Home'},
        { url: '/about', name: 'About'},
        { url: '/color', name: 'Color'},
        { url: '/theme', name: 'Theme'}
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

    <nav class="SiteNav">
      <ul class="SiteNav__list">
        <li class="SiteNav__item" v-for="item in nav">
          <router-link :to="item.url" class="Link SiteNav__link meta">
            {{ item.name }}
          </router-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<style>
@import "@styles/components/_header.css";

.Logo {
  font-weight: 700;
  letter-spacing: 2px;
  font-size: 1.2rem;
}

.Logo:hover,
.Logo:focus {
  background-color: rgb(64 64 160 / 0.1);
}

.SiteNav {
  display: flex;
  --site-nav-link-pad: 0.5em;
}

.SiteNav__list {
  display: flex;
  list-style: none;
  padding: 0;
  margin: calc(var(--site-nav-link-pad) * -1);
}

.SiteNav__item {
  padding: 0;
}

.SiteNav__link {
  padding: var(--site-nav-link-pad);
  border-radius: 2px;
}

.SiteNav__link:hover,
.SiteNav__link:focus {
  background-color: rgb(64 64 160 / 0.1);
}
</style>

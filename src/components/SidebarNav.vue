<script>
export default {
  props: [
    'heading',
    'items',
    'isInternal'
  ],
}
</script>

<template>
  <div class="Sidebar__nav">
    <span class="Heading text-sm uppercase">
      {{ heading }}
    </span>
    <hr class="Line mt-3 mb-6">
    <nav class="Nav">
      <ul class="Nav__list flex-wrap lg:flex-col">
        <li
          class="Nav__item"
          v-for="(item, index) in items" :key="index"
        >
          <router-link
            class="Link Nav__link"
            :to="item.link"
            v-if="item.isInternal"
          >
            <span class="Meta">
              {{ item.name }}
            </span>
          </router-link>
          <a
            class="Link Nav__link"
            :href="item.link"
            v-if="!item.isInternal"
          >
            <span class="Meta">
              {{ item.name }}
            </span>
          </a>

        </li>
      </ul>
    </nav>
  </div>
</template>

<style>
  .Sidebar__nav {
    display: block;
  }
</style>

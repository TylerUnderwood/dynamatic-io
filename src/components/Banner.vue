<script>
export default {
  props: [
    'title',
    'intro'
  ]
}
</script>

<template>
    <section
        id="banner"
        class="Banner"
        role="banner"
        data-theme="dark"
    >
        <div class="wrapper">
            <h1 class="Heading Title">
                {{ title }}
            </h1>
            <p class="Copy mt-4" v-if="intro">
                {{ intro }}
            </p>
        </div>
    </section>
</template>

<style>
    .Banner {
        padding: var(--section-space-x) var(--section-space-x);
        background-color: var(--theme-secondary)
    }
</style>

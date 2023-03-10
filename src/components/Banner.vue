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
        aria-labelledby="title"
        data-theme="dark"
    >
        <div class="page-wrapper">
            <h1 id="title" class="Heading h1 Title">
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
        padding: var(--space-page) var(--space-page);
        background-color: var(--theme-primary)
    }
</style>

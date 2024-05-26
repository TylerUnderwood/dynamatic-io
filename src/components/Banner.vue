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
        data-scheme="dark"
    >
        <div class="page-wrapper">
            <h1 id="title" class="Heading h1 Title lhc">
                {{ title }}
            </h1>
            <p class="Copy lhc mt-4" v-if="intro">
                {{ intro }}
            </p>
        </div>
    </section>
</template>

<style>
    .Banner {
        padding: var(--space-page);
        background-color: var(--theme-primary)
    }
</style>

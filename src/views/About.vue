<script setup>
import Banner from "@/components/Banner.vue";
import Section from "@/components/Section.vue";
</script>

<template>
    <Banner title="About"/>

    <Section heading="Something">
        <p class="mt-6">Hello, here is some text.</p>
    </Section>

    <Section>
        <div class="theme-dark bg-primary p-20 px-8 md:px-20">
            <span class="Heading">Theme Dark</span>
            <code class="Code mt-2" style="font-size: 0.8rem">.theme-dark .bg-primary</code>
            <p class="Copy mt-2">This container will all ways be dark.</p>
            <ul class="List List--bullet List--colorFace mt-4">
                <li class="List__item" v-for="item in 4">Item {{ item }}</li>
            </ul>
            <div class="theme-body bg-base mt-6 p-20 px-8 md:px-20">
                <span class="Heading">Theme Body</span>
                <code class="Code mt-2" style="font-size: 0.8rem">.theme-body .bg-base</code>
                <p class="Copy mt-2">This container will follow whatever the <code class="Code">body</code> tag uses.</p>
                <ul class="List List--bullet mt-4">
                    <li class="List__item" v-for="item in 4">Item {{ item }}</li>
                </ul>
            </div>
        </div>
    </Section>
</template>

<style>
/* .theme-dark.bg-primary .List > .List__item::before, */
.List--colorFace > .List__item::before {
    color: var(--theme-face);
}
</style>

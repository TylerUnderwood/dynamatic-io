<script setup>
import Banner from "@/components/Banner.vue";
import Section from "@/components/Section.vue";
</script>

<template>
    <Banner title="About"/>

    <Section heading="Something">
        <p class="mt-6">Hello, here is some text.</p>
        <div class="pt-8"></div>
        <div class="matrix cells-6 md:cells-12">
            <div class="Cell cell" v-for="item in 12">M</div>
        </div>
    </Section>
</template>

<style>
.Cell {
    border-radius: 4px;
    border-width: 2px;
    background-color: var(--theme-offset);
    padding: 1em;
    text-align: center;
}
</style>

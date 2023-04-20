<script setup>
import Banner from "@/components/Banner.vue";
import Section from "@/components/Section.vue";
import DemoBlock from "@/components/DemoBlock.vue";
</script>

<template>
    <Banner
        title="Sandbox"
        intro="This is whatever I am currently working on"
    />

    <Section
        heading="Links to recent demos"
    >
        <div class="mt-4 flex flex-wrap gap-4">
            <router-link
                to="/demo/layout"
                class="Button"
                data-size="small"
            >
                <span class="Meta">
                    Layout
                </span>
            </router-link>
            <router-link
                to="/demo/section"
                class="Button"
                data-size="small"
            >
                <span class="Meta">
                    Section
                </span>
            </router-link>
        </div>

    </Section>

    <Section
        heading="Whatever the hell this is."
    >
        <div class="break pt-12"></div>

        <div class="matrix cells-2 sm:cells-3 md:cells-6 void bg-stripes-secondary">
            <div class="cell" v-for="item in 6">
                <DemoBlock>
                    <span>M</span>
                </DemoBlock>
            </div>
        </div>
    </Section>

</template>

<style>
.bg-stripes-secondary {
    background-color: #818cf81a;
    background-image: linear-gradient(135deg,#6366f180 10%,transparent 0,transparent 50%,#6366f180 0,#6366f180 60%,transparent 0,transparent);
    background-size: 6px 6px;
}
</style>

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
        <div class="mt-4 flex gap-4">
            <div class="w-full md:w-1/2">
                <router-link
                    to="/demo/layout"
                    class="Button"
                    data-size="large"
                    data-shape="full"
                >
                    <span class="Meta">
                        Layout Demo
                    </span>
                </router-link>
            </div>
            <div class="w-full md:w-1/2">
                <router-link
                    to="/demo/section"
                    class="Button"
                    data-size="large"
                    data-shape="full"
                >
                    <span class="Meta">
                        Section Demo
                    </span>
                </router-link>
            </div>
        </div>

    </Section>

    <Section
        heading="Learning how to build tailwind classes"
    >
        <div class="break"></div>

        <a
            class="Link font-bold"
            href="https://www.protailwind.com/tutorials/animated-background-stripes"
        >
            Tutorial by protailwind.com
        </a>

        <div class="break" style="font-size: 1.5rem;"></div>

        <div class="matrix cells-2 sm:cells-3 md:cells-6 void">
            <div class="cell" v-for="item in 6">
                <DemoBlock>
                    <span>M</span>
                </DemoBlock>
            </div>
        </div>
    </Section>

</template>

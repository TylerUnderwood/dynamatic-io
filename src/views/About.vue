<script setup>
import Banner from "@/components/Banner.vue";
import Section from "@/components/Section.vue";
import Box from "@/components/Box.vue";
</script>

<template>
    <Banner title="About"/>

    <Section
        id="section-buttons"
        heading="Section Buttons"
    >
        <div class="flex flex-col items-start gap-8 mt-8">
            <button>
                Base Button
            </button>

            <div class="flex gap-8">
                <button class="button">
                    <span class="button__text meta">Button</span>
                </button>

                <button class="button button--border">
                    <span class="button__text meta">Border</span>
                </button>
            </div>
            <div class="flex gap-8">
                <button class="button button--thin">
                    <span class="button__text meta">Thin</span>
                </button>

                <button class="button button--border button--thin">
                    <span class="button__text meta">Thin</span>
                </button>
            </div>
            <div class="flex gap-8">
                <button class="button button--tall">
                    <span class="button__text meta">Tall</span>
                </button>

                <button class="button button--border button--tall">
                    <span class="button__text meta">Tall</span>
                </button>
            </div>


            <div class="flex gap-8">
                <button class="button button--square">
                    <span class="button__text meta">S</span>
                </button>

                <button class="button button--square button--border">
                    <span class="button__text meta">S</span>
                </button>
            </div>
            <div class="flex gap-8">
                <button class="button button--square button--thin">
                    <span class="button__text meta">S</span>
                </button>

                <button class="button button--square button--border button--thin">
                    <span class="button__text meta">S</span>
                </button>
            </div>
            <div class="flex gap-8">
                <button class="button button--square button--tall">
                    <span class="button__text meta">S</span>
                </button>

                <button class="button button--square button--border button--tall">
                    <span class="button__text meta">S</span>
                </button>
            </div>
        </div>
    </Section>

    <Section
        id="section-box"
        heading="Section Box"
    >
        <Box
            display="row sm:col md:row"
            align="end sm:center md:between / center sm:end"
            class="flex-wrap mt-6 bg-offset"
            style="min-height: 240px"
        >
            <div
                v-for="index in 7"
                :key="index"
                class="border-face square text-primary text-6xl"
            ></div>
        </Box>
    </Section>
</template>

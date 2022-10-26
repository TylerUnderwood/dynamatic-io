<script setup>
import Banner from "@/components/Banner.vue";
import Section from "@/components/Section.vue";

const trianglesEqual = ['t','r','b','l'];
const trianglesRight = ['t','r','b','l'];
const angles = ['tr','br','bl','tl'];
</script>

<template>
    <Banner title="Sandbox"/>

    <Section heading="Testing">
        <div class="flex flex-col gap-8 mt-8" style="font-size: 3.6rem">
            <div class="flex gap-4">
                <div :class="`Arch Arch--${angle}`" v-for="angle in angles"></div>
            </div>

            <div class="flex gap-4">
                <div class="Circle"></div>

                <div class="Circle Circle--border"></div>
            </div>

            <div class="flex gap-4">
                <div class="Square"></div>

                <div class="Square Square--border"></div>
            </div>

            <div class="flex gap-4">
                <div
                    :class="`Triangle Triangle=${triangle}`"
                    v-for="triangle in trianglesEqual"
                ></div>
            </div>

            <div class="flex gap-4">
                <div
                    :class="`Triangle Triangle--${triangle}`"
                    v-for="triangle in trianglesRight"
                ></div>
            </div>

            <div class="flex gap-4">
                <div
                    :class="`Triangle Triangle--${triangle}`"
                    v-for="triangle in angles"
                ></div>
            </div>

            <div class="flex gap-4">
                <div class="Hexagon"></div>

                <div class="Hexagon Hexagon--border"></div>

                <div class="Hexagon Hexagon--y"></div>

                <div class="Hexagon Hexagon--y Hexagon--border"></div>
            </div>
        </div>
    </Section>
</template>

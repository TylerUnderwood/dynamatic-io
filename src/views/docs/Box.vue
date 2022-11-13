<script setup>
import Banner from "@/components/Banner.vue";
import Section from "@/components/Section.vue";
import Box from "@/components/Box.vue";
</script>

<template>
    <Banner title="Sandbox"/>

    <Section heading="Layout Component">
        <div class="mt-6 bg-offset">
            <div class="row align-x flex-wrap" style="min-height: 240px">
                <div
                    v-for="index in 12"
                    :key="index"
                    :style="`font-size: ${Math.ceil(Math.random() * 5 + 2)}em`"
                    class="Square border-face text-primary text-6xl"
                ></div>
            </div>
        </div>
    </Section>

    <Section heading="Box Component">
        <Box
            display="row sm:col md:row"
            align="end sm:center md:between / center sm:end"
            class="flex-wrap mt-6 bg-offset"
            style="min-height: 240px"
        >
            <div
                v-for="index in 7"
                :key="index"
                class="Square border-face text-primary text-6xl"
            ></div>
        </Box>
    </Section>
</template>

<script setup>
import Banner from "@/components/Banner.vue";
import Section from "@/components/Section.vue";
import Box from "@/components/Box.vue";
</script>

<template>
    <Banner title="About"/>
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

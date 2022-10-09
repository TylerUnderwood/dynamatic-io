<script setup>
import Banner from "@/components/Banner.vue";
import Section from "@/components/Section.vue";
import Box from "@/components/Box.vue";
</script>

<template>
    <Banner title="Home" intro="Welcome to Dynamatic" />
    <Section
        id="section-copy"
        heading="Copy"
        class="Markup"
    >
        <p>In pellentesque libero pulvinar tincidunt tempor. Sed elementum tempus eros, quis sollicitudin diam ultrices et.</p>
        <p>Aliquam posuere eros erat. Duis pharetra vehicula ligula, eu lacinia sapien ornare sed. Cras id sem sit amet nulla vehicula vehicula ac eu augue.</p>
    </Section>
    <Section
        id="section-headings"
        heading="Headings"
        class="Markup"
    >
        <h3>Heading Three</h3>
        <h4>Heading Four</h4>
        <h5>Heading Five</h5>
        <h6>Heading Six</h6>
    </Section>
    <Section
        id="section-lists"
        heading="Lists"
    >
        <ul class="List List--bullet">
            <li class="List__item" v-for="index in 3" :key="index">List item {{ index }}</li>
        </ul>
        <ol class="List List--numbered">
            <li class="List__item" v-for="index in 3" :key="index">List item {{ index }}</li>
        </ol>
    </Section>
</template>

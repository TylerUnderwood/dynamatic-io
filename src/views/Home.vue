<script setup>
import Banner from "@/components/Banner.vue";
import Section from "@/components/Section.vue";
</script>

<template>
    <Banner title="Home" intro="Welcome to Dynamatic" />
    <Section
        id="section-one"
        heading="Section One"
    >
        <p>In pellentesque libero pulvinar tincidunt tempor. Sed elementum tempus eros, quis sollicitudin diam ultrices et. Aliquam posuere eros erat. Duis pharetra vehicula ligula, eu lacinia sapien ornare sed. Cras id sem sit amet nulla vehicula vehicula ac eu augue.</p>
        <h3 class="Heading H3">
            Heading Three
        </h3>
        <h4 class="Heading H4">
            Heading Four
        </h4>
        <h5 class="Heading H5">
            Heading Five
        </h5>
        <h6 class="Heading H6">
            Heading Six
        </h6>
    </Section>
    <Section
        id="section-two"
        heading="Section Two"
    >
        <p>In pellentesque libero pulvinar tincidunt tempor. Sed elementum tempus eros, quis sollicitudin diam ultrices et. Aliquam posuere eros erat. Duis pharetra vehicula ligula, eu lacinia sapien ornare sed. Cras id sem sit amet nulla vehicula vehicula ac eu augue.</p>
    </Section>
</template>

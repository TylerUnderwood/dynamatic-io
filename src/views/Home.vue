<script setup>
import Banner from "@/components/Banner.vue";
import Section from "@/components/Section.vue";
</script>

<template>
    <Banner title="Home" intro="Welcome to Dynamatic" />

    <Section id="section-copy" heading="Copy" class="Markup Rhythm">
        <p>
            In pellentesque libero pulvinar tincidunt tempor. Sed elementum tempus eros, quis sollicitudin diam ultrices et.
        </p>
        <p>
            Aliquam posuere eros erat. Duis pharetra vehicula ligula, eu lacinia sapien ornare sed. Cras id sem sit amet nulla vehicula vehicula ac eu augue.
        </p>
    </Section>

    <Section id="section-headings" heading="Headings" class="Markup Rhythm">
        <h3>Heading Three</h3>
        <h4>Heading Four</h4>
        <h5>Heading Five</h5>
        <h6>Heading Six</h6>
    </Section>

    <Section id="section-lists" heading="Lists" class="Markup Rhythm">
        <ul>
            <li v-for="index in 3" :key="index">List item {{ index }}</li>
        </ul>
        <ol>
            <li v-for="index in 3" :key="index">List item {{ index }}</li>
        </ol>
    </Section>

    <Section id="section-quote" heading="Quote" class="Markup Rhythm">
        <blockquote>
            <p>
                In pellentesque libero pulvinar tincidunt tempor. Sed elementum tempus eros, quis sollicitudin diam ultrices et.
            </p>
            <cite>Lorem ipsum.</cite>
        </blockquote>
    </Section>

    <Section id="section-combined" heading="Combined" class="Markup Rhythm">
        <p>
            Aliquam posuere eros erat. Duis pharetra vehicula ligula, eu lacinia sapien ornare sed. Cras id sem sit amet nulla vehicula vehicula ac eu augue.
        </p>
        <ul>
            <li v-for="index in 3" :key="index">List item {{ index }}</li>
        </ul>
        <ol>
            <li v-for="index in 3" :key="index">List item {{ index }}</li>
        </ol>
        <blockquote>
            <p>
                In pellentesque libero pulvinar tincidunt tempor. Sed elementum tempus eros, quis sollicitudin diam ultrices et.
            </p>
            <cite>Lorem ipsum.</cite>
        </blockquote>
        <p>
            In pellentesque libero pulvinar tincidunt tempor. Sed elementum tempus eros, quis sollicitudin diam ultrices et.
        </p>
        <h3>Heading Three</h3>
        <p>
            Aliquam posuere eros erat. Duis pharetra vehicula ligula, eu lacinia sapien ornare sed. Cras id sem sit amet nulla vehicula vehicula ac eu augue.
        </p>
        <blockquote>
            <p>
                In pellentesque libero pulvinar tincidunt tempor. Sed elementum tempus eros, quis sollicitudin diam ultrices et.
            </p>
            <cite>Lorem ipsum.</cite>
        </blockquote>
    </Section>
</template>

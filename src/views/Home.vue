<script setup>
import Banner from "@/components/Banner.vue";
import Section from "@/components/Section.vue";
</script>

<template>
    <Banner title="Home" intro="Welcome to Dynamatic" />

    <Section id="section-copy" heading="Copy">
        <div class="Markup Rhythm mt-8">
            <p>In pellentesque libero pulvinar tincidunt tempor. Sed elementum tempus eros, quis sollicitudin diam ultrices et.</p>
            <p>Aliquam posuere eros erat. Duis pharetra vehicula ligula, eu lacinia sapien ornare sed. Cras id sem sit amet nulla vehicula vehicula ac eu augue.</p>
        </div>
    </Section>

    <Section id="section-headings" heading="Headings">
        <div class="Markup Rhythm mt-8">
            <h3>Heading Three</h3>
            <h4>Heading Four</h4>
            <h5>Heading Five</h5>
            <h6>Heading Six</h6>
        </div>
    </Section>

    <Section id="section-lists" heading="Lists">
        <div class="Markup Rhythm mt-8">
            <p>In pellentesque libero pulvinar tincidunt tempor. Sed elementum tempus eros, quis sollicitudin diam ultrices et.</p>
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
        </div>
    </Section>

    <Section id="section-quote" heading="Quote">
        <div class="Markup Rhythm mt-8">
            <blockquote>
                <p>
                    In pellentesque libero pulvinar tincidunt tempor. Sed elementum tempus eros, quis sollicitudin diam ultrices et.
                </p>
            </blockquote>
            <blockquote>
                <p>
                    In pellentesque libero pulvinar tincidunt tempor. Sed elementum tempus eros, quis sollicitudin diam ultrices et.
                </p>
                <cite>Lorem ipsum.</cite>
            </blockquote>
        </div>
    </Section>
</template>

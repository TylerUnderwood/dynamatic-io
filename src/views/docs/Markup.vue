<script setup>
import SectionDocs from "@/components/SectionDocs.vue";
</script>

<template>
    <SectionDocs
        heading="Copy"
        class="Markup Rhythm"
    >
        <p>
            In pellentesque libero pulvinar tincidunt tempor. Sed elementum tempus eros, quis sollicitudin diam ultrices et.
        </p>
        <p>
            Aliquam posuere eros erat. Duis pharetra vehicula ligula, eu lacinia sapien ornare sed. Cras id sem sit amet nulla vehicula vehicula ac eu augue.
        </p>
    </SectionDocs>

    <SectionDocs
        heading="Headings"
        class="Markup Rhythm"
    >
        <h3>Heading Three</h3>
        <h4>Heading Four</h4>
        <h5>Heading Five</h5>
        <h6>Heading Six</h6>
    </SectionDocs>

    <SectionDocs
        heading="Lists"
        class="Markup Rhythm"
    >
        <ul>
            <li v-for="index in 3" :key="index">List item {{ index }}</li>
        </ul>
        <ol>
            <li v-for="index in 3" :key="index">List item {{ index }}</li>
        </ol>
    </SectionDocs>

    <SectionDocs
        heading="Quote"
        class="Markup Rhythm"
    >
        <blockquote>
            <p>
                In pellentesque libero pulvinar tincidunt tempor. Sed elementum tempus eros, quis sollicitudin diam ultrices et.
            </p>
            <cite>Lorem ipsum.</cite>
        </blockquote>
    </SectionDocs>

    <SectionDocs
        heading="Combined"
        class="Markup Rhythm"
    >
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
    </SectionDocs>
</template>

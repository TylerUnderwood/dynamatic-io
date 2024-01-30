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
            <li v-for="index in 3" :key="index">
                <p>List item {{ index }}</p>
            </li>
        </ul>
        <ol>
            <li v-for="index in 3" :key="index">
                <p>List item {{ index }}</p>
            </li>
        </ol>
        <ul>
            <li>
                <p>Sed elementum tempus eros, quis sollicitudin diam ultrices et.</p>
            </li>
            <li>
                <p>Aliquam posuere eros erat. Duis pharetra vehicula ligula, eu lacinia sapien ornare sed. Cras id sem sit amet nulla vehicula vehicula ac eu augue.</p>
            </li>
            <li>
                <p>In pellentesque libero pulvinar tincidunt tempor. Sed elementum tempus eros, quis sollicitudin diam ultrices et.</p>
            </li>
        </ul>
        <ol>
            <li>
                <p>Sed elementum tempus eros, quis sollicitudin diam ultrices et.</p>
            </li>
            <li>
                <p>Aliquam posuere eros erat. Duis pharetra vehicula ligula, eu lacinia sapien ornare sed. Cras id sem sit amet nulla vehicula vehicula ac eu augue.</p>
            </li>
            <li>
                <p>In pellentesque libero pulvinar tincidunt tempor. Sed elementum tempus eros, quis sollicitudin diam ultrices et.</p>
            </li>
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
            <li v-for="index in 3" :key="index">
                <p>List item {{ index }}</p>
            </li>
        </ul>
        <ol>
            <li v-for="index in 3" :key="index">
                <p>List item {{ index }}</p>
            </li>
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
        <h3>Nested lists</h3>
        <ol>
            <li>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla tempora exercitationem suscipit vero alias veniam repellendus, ullam quibusdam aliquam similique ut illum!</p>
            </li>
            <li>
                <p>Lorem ipsum dolor sit amet adipisicing elit. Animi omnis, maxime praesentium quo in repudiandae at quos quod a!</p>
            </li>
            <ul>
                <li v-for="index in 2" :key="index">
                    <p>List item {{ index }}</p>
                </li>
            </ul>
            <li>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro placeat sed tempore totam maxime recusandae vitae. Sit, sequi debitis. Perspiciatis alias autem voluptates ducimus voluptate hic deleniti exercitationem voluptas quo!</p>
            </li>
        </ol>
    </SectionDocs>

    <SectionDocs
        heading="Long List"
        class="Markup Rhythm"
    >
        <ol>
            <li v-for="index in 24" :key="index">
                <p>List item {{ index }}</p>
            </li>
        </ol>
    </SectionDocs>
</template>

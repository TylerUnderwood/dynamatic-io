<script setup>
import SectionDocs from "@/components/SectionDocs.vue";

const shapes = {
    "Arch": {
        ".Arch .Arch--t | r | b | l": [
            "Arch Arch--tr",
            "Arch Arch--br",
            "Arch Arch--bl",
            "Arch Arch--tl",
        ]
    },
    "Circle": {
        ".Circle | .Circle .Circle--border": [
            "Circle",
            "Circle Circle--border",
        ]
    },
    "Hexagon": {
        ".Hexagon | .Hexagon .Hexagon--border": [
            "Hexagon",
            "Hexagon Hexagon--border",
        ]
    },
    "Square": {
        ".Square | .Square .Square--border": [
            "Square",
            "Square Square--border",
        ]
    },
    "Triangle": {
        ".Triangle .Triangle=t | r | b | l": [
            "Triangle Triangle=t",
            "Triangle Triangle=r",
            "Triangle Triangle=b",
            "Triangle Triangle=l",
        ],
        ".Triangle .Triangle--t | r | b | l": [
            "Triangle Triangle--t",
            "Triangle Triangle--r",
            "Triangle Triangle--b",
            "Triangle Triangle--l",
        ],
        ".Triangle .Triangle--tr | br | bl | tl": [
            "Triangle Triangle--tr",
            "Triangle Triangle--br",
            "Triangle Triangle--bl",
            "Triangle Triangle--tr",
        ],
    },
}
</script>

<template>
    <SectionDocs :heading="name" v-for="(group, name) in shapes">
        <div class="block mt-2" v-for="(shape, label) in group">
            <code class="Code" style="font-size: 0.8rem">{{ label }}</code>
            <div class="flex gap-4 mt-2" style="font-size: var(--shape-demo-size)">
                <div :class="types" v-for="types in shape"></div>
            </div>
        </div>
    </SectionDocs>
</template>

<style>
:root {
    --shape-demo-size: 3.6rem;
}
</style>

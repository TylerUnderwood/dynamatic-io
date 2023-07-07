<script setup>
import SectionDocs from "@/components/SectionDocs.vue";
</script>

<script>
import theme from '@config/theme.json';
import { tokenCategories } from 'dynamatic';

export default {
    data() {
        return {
            tokens: tokenCategories(theme),
            themeNames: [],
        }
    },

    created() {
        this.themeNames = [
            ...Object.keys(this.tokens.light).map(color => color.replace(/light/g, 'theme')),
            ...Object.keys(this.tokens.color).filter(color => /^blue/.test(color)),
            ...Object.keys(this.tokens.color).filter(color => /^dark/.test(color)),
            ...Object.keys(this.tokens.color).filter(color => /^light/.test(color)),
        ]
    }
}
</script>

<template>
    <SectionDocs heading="Colors">
        <div class="pt-6"></div>
        <div class="flex flex-wrap gap-y-6">
            <div
                v-for="name in themeNames"
                class="flex flex-col w-1/6"
                :style="{ color: `var(--${name})` }"
            >
                <span class="Meta text-face mt-auto mb-2" :style="{fontSize: '0.6rem'}">
                    {{ name.replace('theme-', ''), `var(--${name})` }}
                </span>
                <div class="w-full bg-current" :style="{paddingTop: '100%'}"></div>
            </div>
        </div>
    </SectionDocs>

    <SectionDocs heading="Scheme">
        <div class="pt-6"></div>
        <div class="bg-primary p-8 md:p-12 lg:p-8" data-scheme=dark>
            <span class="Heading">Theme Dark</span>
            <code class="Code mt-2" style="font-size: 0.8rem">[data-scheme=dark] .bg-primary</code>
            <p class="Copy mt-2">This container will all ways be dark.</p>
            <ul class="List List--bullet List--colorFace mt-4">
                <li class="List__item" v-for="item in 4">
                    <p class="List__text">Item {{ item }}</p>
                </li>
            </ul>
            <div class="bg-base mt-6 p-8 md:p-12 lg:p-8" data-scheme=body>
                <span class="Heading">Theme Body</span>
                <code class="Code mt-2" style="font-size: 0.8rem">[data-scheme=body] .bg-base</code>
                <p class="Copy mt-2">This container will follow whatever the <code class="Code">body</code> tag uses.</p>
                <ul class="List List--bullet mt-4">
                    <li class="List__item" v-for="item in 4">
                        <p class="List__text">Item {{ item }}</p>
                    </li>
                </ul>
            </div>
        </div>
    </SectionDocs>

    <SectionDocs heading="Tokens">
        <div class="pt-6"></div>
        <details
            v-for="category, cline in tokens"
            :open="/^colors/.test(cline) ? true : null"
        >
            <summary>
                <h3 class="Heading h3">{{ cline }}</h3>
            </summary>
            <code v-for="token, name in category" class="block mt-2">
                <span>{{ name }}: </span>
                <mark v-if="/^#/.test(token)" :style="{backgroundColor: token}">
                    {{ token }}
                </mark>
                <mark v-else-if="/^--/.test(token)" :style="{backgroundColor: `var(${token})`}">
                    {{ token }}
                </mark>
                <mark v-else>
                    {{ token }}
                </mark>
            </code>
        </details>
    </SectionDocs>
</template>

<style>
mark {
    background-color: var(--theme-accent);
    color: black;
    mix-blend-mode: multiply;
}
mark::before,
mark::after {
    content: "\00a0";
}

/* .theme-dark.bg-primary .List > .List__item::before, */
.List--colorFace > .List__item::before {
    color: var(--theme-face);
}
</style>

<script setup>
import SectionDocs from "@/components/section/SectionDocs.vue";
import theme from '@config/theme.json';
import { tokenCategories } from 'dynamatic';

const tokens = tokenCategories(theme)
const themeNames = [...Object.keys(tokens.DEFAULT).map(color => color)]
</script>

<template>
    <SectionDocs heading="Colors">
        <div class="pt-6"></div>
        <div class="flex flex-wrap gap-y-6">
            <div
                v-for="name in themeNames"
                class="flex flex-col w-1/6"
            >
                <span class="Meta lhc mt-auto mb-2" :style="{fontSize: '0.6rem'}">
                    {{ name.replace('theme-', ''), `var(--${name})` }}
                </span>
                <div
                    class="w-full bg-current"
                    :style="{paddingTop: '100%', color: `var(--${name})`}"
                ></div>
            </div>
        </div>
    </SectionDocs>

    <SectionDocs heading="Scheme">
        <div class="pt-6"></div>
        <div class="Card bg-primary p-8" data-scheme=dark>
            <span class="Heading">Theme Dark</span>
            &nbsp;
            <code class="Code" style="font-size: 0.8rem">[data-scheme=dark]</code>
            <p class="Copy mt-2">This container will all ways be dark.</p>
            <ul class="List List--bullet List--colorFace mt-4">
                <li class="List__item" v-for="item in 4">
                    <p class="List__text">Item {{ item }}</p>
                </li>
            </ul>
            <div class="Card bg-base mt-6 p-8" data-scheme=body>
                <span class="Heading">Theme Body</span>
                &nbsp;
                <code class="Code" style="font-size: 0.8rem">[data-scheme=body]</code>
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
            :open="/^color/.test(cline) ? true : null"
        >
            <summary>
                <h3 class="Heading h3">
                    {{ cline === "DEFAULT" ? "theme" : cline }}
                </h3>
            </summary>
            <div v-for="token, name in category" class="flex mt-2">
                <code class="mr-3">{{ name }}: {{ token }};</code>
                <div
                    class="VarBox"
                    :style="{'--varBox-color': token, '--varBox-length': token}"
                ></div>
            </div>
        </details>
    </SectionDocs>
</template>

<style>
@property --varBox-color {
  syntax: '<color>';
  initial-value: transparent;
  inherits: true;
}

@property --varBox-length {
  syntax: '<length>';
  initial-value: 0px;
  inherits: true;
}

.VarBox {
    display: flex;
    flex-shrink: 0;
    border-width: 1px;
    border-style: solid;
    border-color: var(--theme-face);
    border-radius: 2px;
    background-color: var(--varBox-color);
    min-width: 1em;
    height: 1em;
    overflow: visible;
}

.VarBox::before {
    flex-shrink: 0;
    margin-top: -1px;
    margin-bottom: -1px;
    border-top-width: 1px;
    border-bottom-width: 1px;
    border-style: solid;
    border-color: var(--theme-base);
    background-color: currentColor;
    background: linear-gradient(
        0deg,
        currentColor 0%,
        currentColor 50%,
        rgba(0, 0, 0, 0) 50%,
        rgba(0, 0, 0, 0) 100%);
    min-width: var(--varBox-length);
    height: calc(1em + 1px);
    content: '';
}

/* TODO: Find a permanent solution to primary color bullet points on a primary background-color */
/* .theme-dark.bg-primary .List > .List__item::before, */
.List--colorFace > .List__item::marker {
    color: var(--theme-face);
}
</style>

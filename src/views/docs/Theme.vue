<script setup>
import { ref, onBeforeUnmount } from 'vue'
import theme from '@config/theme.json';
import { tokenCategories } from 'dynamatic';
import SectionDocs from "@/components/section/SectionDocs.vue";
import SwatchCard from '@/components/SwatchCard.vue'

const tokens = tokenCategories(theme)
const themeSwatches = [...Object.keys(tokens.DEFAULT).map(key => {
    return {
        name: key.replace('theme-', ''),
        val: `var(--${key})`,
        hex: window.getComputedStyle(document.documentElement)
                    .getPropertyValue(`--${key}`)
                    .trim()
    }
})]

var themePallet = [...Object.keys(tokens.color).reduce((result, color) => {
    const number = Number(color.match(/\d+/))

    if (number !== 0) {
        result.push({
            name: color,
            val: tokens.color[color],
            number,
        })
    }

    return result
}, [])];
console.log(themePallet)

// Copy to Clipboard functionality
const showCopyMessage = ref(false);
const swatchCopyMessage = ref('')
const swatchCopyTimeout = ref(null)
const msgX = ref(0)
const msgY = ref(0)

async function copyToClipboard(text, event) {
    const mousePosition = { x: event.clientX, y: event.clientY }

    const showMessage = (message) => {
        if (swatchCopyTimeout.value) {
            clearTimeout(swatchCopyTimeout.value)
        }

        swatchCopyMessage.value = message
        msgX.value = event.clientY
        msgY.value = event.clientX
        showCopyMessage.value = true

        swatchCopyTimeout.value = setTimeout(() => {
            showCopyMessage.value = false
        }, 1800)
    }

    try {
        await navigator.clipboard.writeText(text);
        showMessage(text)
    } catch (err) {
        console.error('Failed to copy text: ', err);
        showMessage('Error copying to clipboard')
    }
}

onBeforeUnmount(() => {
    if (swatchCopyTimeout.value) {
        clearTimeout(swatchCopyTimeout.value);
        swatchCopyTimeout.value = null;
    }
});
</script>

<template>
    <SectionDocs heading="Dynamic Colors">
        <div class="pt-6"></div>
        <div class="flex flex-wrap -m-1" style="font-size: 0.9rem;">
            <div
                v-for="swatch in themeSwatches"
                class="w-1/3 sm:w-1/6 md:w-1/4 lg:w-1/6 p-1"
            >
                <SwatchCard
                    :name="swatch.name"
                    :val="swatch.val"
                    :hex="swatch.hex"
                    :copyToClipboard="copyToClipboard"
                ></SwatchCard>
            </div>
            <div
                class="SwatchCopyMessage"
                :data-open="showCopyMessage"
                :style="{ top: `${msgX}px`, left: `${msgY}px`}"
            >
                <strong>Copied:</strong>
                <code class="Code">{{ swatchCopyMessage }}</code>
            </div>
        </div>
    </SectionDocs>

    <SectionDocs heading="Pallet">
        <div class="pt-6"></div>
        <div class="flex flex-wrap gap-y-3">
            <div v-for="color in themePallet" class="flex flex-col items-start w-[calc(1/11*100%)] relative group">
                <code class="Code absolute opacity-0 group-hover:opacity-100 bottom-1 left-1" style="font-size: 0.6rem">
                    {{ color.number }}
                </code>
                <div class="aspect-square w-full" :style="{backgroundColor: color.val}"></div>
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
.SwatchCopyMessage {
    --copy-message-timing: 300ms;
    display: flex;
    align-items: center;
    gap: 0.5em;
    position: fixed;
    z-index: 9999;
    translate: -50% -100%;
    box-shadow: var(--shadow);
    border-radius: var(--round);
    padding: 0.5em 0.6em;
    background-color: var(--theme-base);
    font-size: 0.8rem;
    pointer-events: none;
    opacity: 0;
    visibility: hidden;
    transition-property: opacity, visibility;
    transition-duration: var(--copy-message-timing), 0ms;
    transition-timing-function: ease-in, linear;
    transition-delay: 0ms, 0ms;
}
.SwatchCopyMessage[data-open="true"] {
    opacity: 1;
    visibility: visible;
    transition-delay: 0ms, 0ms;
}
.SwatchCopyMessage[data-open="false"] {
    opacity: 0;
    visibility: hidden;
    transition-delay: 0ms, var(--copy-message-timing);
}


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

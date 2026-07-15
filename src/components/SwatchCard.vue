<script>
export default {
    props: {
        name: String,
        val: String,
        hex: String,
        copyToClipboard: {
            type: Function,
            required: true
        },
    },
};
</script>

<template>
    <div :id="`swatchCard-${name}`" class="SwatchCard Card" :style="{'--swatch-color': hex}">
        <button
            class="SwatchCard__color"
            @click="copyToClipboard(val, $event)"
        ></button>
        <div class="SwatchCard__content">
            <button @click="copyToClipboard(hex, $event)" class="flex items-center gap-2 -m-1 p-1">
                <span class="Meta lhc tracking-[0] font-[600] font-mono">
                    {{ hex }}
                </span>
                <i class="fi fi-rr-copy" style="font-size: 0.7rem; margin-bottom: -0.1rem" aria-hidden="true"></i>
            </button>
            <div class="spacer" style="font-size: .5rem"></div>
            <button class="flex text-xs" @click="copyToClipboard(name, $event)">
                <code class="Code whitespace-nowrap">{{ name }}</code>
            </button>
        </div>
    </div>
</template>

<style lang="css">
.SwatchCard {
    --swatch-round: 1em;
    padding: 0;
    border-color: var(--theme-base);
    border-right-width: 2px;
    border-top-left-radius: var(--swatch-round);
    background: linear-gradient(
        90deg,
        var(--swatch-color) 0%,
        var(--swatch-color) 50%,
        var(--theme-base) 50%,
        var(--theme-base) 100%);
    overflow: clip;
}

.SwatchCard__color {
    display: block;
    aspect-ratio: 1/1;
    width: 100%;
    border-bottom-right-radius: var(--swatch-round);
    background-color: var(--swatch-color);
}

.SwatchCard__content {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: start;
    padding: 0.75em;
    padding-top: 1.25em;
    background-color: var(--theme-base);
    border-top-left-radius: var(--swatch-round);
}
</style>

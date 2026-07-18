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
        >
            <div class="SwatchCard__colorShadowLeft"></div>
            <div class="SwatchCard__colorShadowLeftBlock"></div>
            <div class="SwatchCard__ArchLeft Arch Arch--tl"></div>
            <div class="SwatchCard__colorShadowRight"></div>
            <div class="SwatchCard__colorShadowRightBlock"></div>
            <div class="SwatchCard__ArchRight Arch Arch--br"></div>
        </button>
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
    /* background: linear-gradient(
        90deg,
        var(--swatch-color) 0%,
        var(--swatch-color) 50%,
        var(--theme-base) 50%,
        var(--theme-base) 100%); */
    overflow: clip;
}

.SwatchCard__color {
    position: relative;
    display: block;
    aspect-ratio: 1/1;
    width: 100%;
    border-bottom-right-radius: var(--swatch-round);
    background-color: var(--swatch-color);
}

/* Shadow that follows midline s-curve*/
.SwatchCard__colorShadowLeft,
.SwatchCard__colorShadowLeftBlock,
.SwatchCard__colorShadowRight,
.SwatchCard__colorShadowRightBlock {
    --swatch-shadow: rgba(0, 0, 0, 0.125) -3px -3px 12px -2px;
    position: absolute;
    inset: 0;
    width: 100%;
}
.SwatchCard__colorShadowLeft {
    background-color: var(--swatch-color);
    border-bottom-right-radius: var(--swatch-round);
    box-shadow: var(--swatch-shadow) inset;
    left: unset;
}
.SwatchCard__colorShadowLeftBlock {
    background: linear-gradient(
        90deg,
        var(--swatch-color) 0%,
        transparent 100%);
}
.SwatchCard__colorShadowRight {
    background-color: var(--theme-base);
    border-top-left-radius: var(--swatch-round);
    height: var(--swatch-round);
    top: 100%;
    bottom: unset;
    box-shadow: var(--swatch-shadow);
}
.SwatchCard__colorShadowRightBlock {
    background: linear-gradient(
        180deg,
        var(--swatch-color) 0%,
        transparent calc(100% - var(--swatch-round)));
}
.SwatchCard__ArchLeft,
.SwatchCard__ArchRight {
    position: absolute;
    font-size: 1em;
    bottom: 0;
}
.SwatchCard__ArchLeft {
    left: 0;
    translate: 0 100%;
    color: var(--swatch-color);
}
.SwatchCard__ArchRight {
    right: 0;
    color: var(--theme-base);
}

.SwatchCard__content {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0.75em;
    padding-top: 1.25em;
    background-color: var(--theme-base);
    border-top-left-radius: var(--swatch-round);
}
</style>

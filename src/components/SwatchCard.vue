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
            <div class="SwatchCard__shadowLayer01"></div>
            <div class="SwatchCard__shadowLayer02"></div>
        </button>
        <div class="SwatchCard__content">
            <div class="SwatchCard__ArchBR Arch Arch--br"></div>
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
    --swatch-round: 1rem;
    padding: 0;
    border-color: var(--theme-base);
    border-right-width: 1px;
    border-top-left-radius: var(--swatch-round);
    background: linear-gradient(
        90deg,
        var(--swatch-color) 0%,
        var(--swatch-color) 50%,
        var(--theme-base) 50%,
        var(--theme-base) 100%);
    background-position-y: var(--swatch-round);
    background-repeat: no-repeat;
    background-size: 100% calc(100% - (var(--swatch-round) * 2));
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
.SwatchCard__shadowLayer01::before,
.SwatchCard__shadowLayer01::after,
.SwatchCard__shadowLayer02::before,
.SwatchCard__shadowLayer02::after {
    --swatch-shadow: rgba(0, 0, 0, 0.125) -3px -3px 8px -2px;
    position: absolute;
    inset: 0;
    width: 100%;
    content: '';
}
.SwatchCard__shadowLayer01::before {
    background-color: var(--swatch-color);
    border-bottom-right-radius: var(--swatch-round);
    box-shadow: var(--swatch-shadow) inset;
    left: unset;
}
.SwatchCard__shadowLayer01::after {
    background: linear-gradient(
        90deg,
        var(--swatch-color) 0%,
        transparent 100%);
}
.SwatchCard__shadowLayer02::before {
    background-color: var(--theme-base);
    border-top-left-radius: var(--swatch-round);
    height: var(--swatch-round);
    top: 100%;
    bottom: unset;
    box-shadow: var(--swatch-shadow);
}
.SwatchCard__shadowLayer02::after {
    background: linear-gradient(
        180deg,
        var(--swatch-color) 0%,
        transparent calc(100% - var(--swatch-round)));
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
.SwatchCard__ArchBR {
    position: absolute;
    top: 0;
    right: 0;
    translate: 0 -100%;
    font-size: var(--swatch-round);
    color: var(--theme-base);
}
</style>

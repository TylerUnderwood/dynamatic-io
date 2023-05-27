<script setup>
import Banner from "@/components/Banner.vue";
import Section from "@/components/Section.vue";

const alignSharedTypes = [
    'center',
    'stretch',
    'between',
    'around',
    'evenly',
];

const selectFields = [
    {
        name: 'Y Content',
        slug: 'content-y',
        label: 'alignY',
        types: ['top', 'bottom', ...alignSharedTypes]
    },
    {
        name: 'Y Items',
        slug: 'items-y',
        label: 'itemsY',
        types: ['top', 'bottom', 'center', 'baseline']
    },
    {
        name: 'X Content',
        slug: 'content-x',
        label: 'alignX',
        types: ['right', 'left', ...alignSharedTypes]
    },
    {
        name: 'X Items',
        slug: 'items-x',
        label: 'itemsX',
        types: ['right', 'left', 'center', 'baseline']
    }
];

const randomSizes = [
    4,2,4,2,2,5,3,5,4,4,4,2,2,4,4,4,3,5,5,2,2,5,5,2,4,2,3,5,3,3,4,5,5,2,2,2,3,5
];
</script>

<script>
export default {
    data() {
        return {
            isRow: true,
            squares: 0,
            useNumbersForSquares: false,
            wrapLayoutSquares: true,
            showSquareBaseline: false,
            basisFillSquares: false,
            maxSquares: 36,
        }
    },

    methods: {
        radioAttr: ( radio, element ) => {
            radio.checked = element.getAttribute(radio.name) === radio.value;

            radio.addEventListener("change", (event) => {
                element.setAttribute(event.target.name, radio.value);
            });
        },

        selectAttr: ( selector, element ) => {
            selector.value = element.getAttribute(selector.name);

            selector.addEventListener("change", (event) => {
                const options = event.target.options;
                const name = event.target.name;

                for ( let i = 0; i < options.length; i++) {
                    const option = options[i];

                    if ( !option.selected ) continue;

                    if ( option.value === "" || option.value === "default" ) {
                        element.removeAttribute(name);
                    } else {
                        element.setAttribute(name, option.value);
                    }
                }
            })
        },

        randomSquareSize: () => {
            return Math.ceil(Math.random() * 4 + 1);
        },

        isAlignFieldDisabled: ( fieldSlug, isRow )  => {
            return (fieldSlug === 'items-x' && isRow)
                || (fieldSlug === 'items-y' && !isRow);
        },

        flexOrientationConversion: ( fieldSlug, isRow ) => {
            switch (fieldSlug) {
                case 'content-y':
                    return isRow ? 'align-content' : 'justify-content';
                case 'items-y':
                    return isRow ? 'align-items' : 'justify-items';
                case 'content-x':
                    return isRow ? 'justify-content' : 'align-content';
                case 'items-x':
                    return isRow ? 'justify-items' : 'align-items';
                default:
                    return '';
            }
        }
    },

    mounted() {
        const selectors = document.querySelectorAll("[id*=select-box-]");
        const radios = document.querySelectorAll("[id*=radio-]");
        const box = document.querySelector("#dynamic-box");

        selectors.forEach( (selector) => {
            this.selectAttr(selector, box);
        });

        radios.forEach( (radio) => {
            this.radioAttr(radio, box);
        });

        if (window.matchMedia("(width > 719px)").matches) {
            this.maxSquares = 36;
            this.squares = 18;
        } else {
            this.maxSquares = 18;
            this.squares = 9;
        }

        window.addEventListener("resize", (event) => {
            const isDesktop = window.matchMedia("(width > 719px)").matches;

            if (isDesktop && this.maxSquares === 18) {
                this.maxSquares = 36;
            }
            if (!isDesktop && this.maxSquares === 36) {
                this.squares > 18 ? this.squares = 18 : null;
                this.maxSquares = 18;
            }
        });
    }
}
</script>

<template>
    <Banner
        title="Layout"
        intro="This is a demo of how the [layout] attribute work"
    />

    <Section heading="Layout Selector">
        <div class="break" style="font-size: 2.4rem;"></div>
        <div class="flex flex-wrap items-end -m-2">
            <div class="w-full p-2">
                <fieldset class="Fieldset">
                    <legend class="Legend">
                        Orientation
                    </legend>
                    <div class="flex">
                        <label
                            class="Label mr-3"
                            :for="`radio-orientation-root-${axis}`"
                            v-for="axis in ['row','column']"
                        >
                            <input
                                :id="`radio-orientation-root-${axis}`"
                                name="layout"
                                type="radio"
                                :value="axis"
                                :checked="axis === 'row' ? true : null"
                                @change="() => isRow = !isRow"
                            >
                            <span class="Meta ml-1">{{ axis }}</span>
                        </label>
                        <div class="filler p-2"></div>
                        <label for="wrapLayoutSquares" class="Label">
                            <input
                                type="checkbox"
                                name="wrapLayoutSquares"
                                id="wrapLayoutSquares"
                                v-model="wrapLayoutSquares"
                            >
                            <span class="Meta ml-2">
                                wrap
                            </span>
                        </label>
                    </div>
                </fieldset>
            </div>
            <div class="w-1/2 sm:w-1/4 p-2" v-for="field in selectFields">
                <div
                    class="flex sm:flex-col md:flex-row items-start gap-1 mb-2"
                    :style="isAlignFieldDisabled( field.slug, isRow ) ? 'opacity: 0.5' : null"
                >
                    <label class="Label" :for="`select-${field.slug}`">
                        {{ field.name }}
                    </label>
                    <code class="Code" style="font-size: 0.7rem;">
                        <span style="color: red">
                            {{ flexOrientationConversion( field.slug, isRow )}}
                        </span>
                    </code>
                </div>
                <select
                    :id="`select-box-${field.slug}`"
                    :name="field.slug"
                    class="Field Field--small"
                    :disabled="isAlignFieldDisabled( field.slug, isRow ) ? 'true' : null"
                >
                    <option value="null">None</option>
                    <option
                        :value="value"
                        v-for="value in field.types"
                    >{{ value }}</option>
                </select>
            </div>
        </div>
        <div class="break"></div>
        <div
            class="LayoutDemo"
            :class="{ 'show-baseline': showSquareBaseline }"
        >
            <div
                id="dynamic-box"
                class="LayoutDemo__container bg-stripes-secondary"
                layout="row"
                content-y="top"
                items-y="null"
                content-x="left"
                items-x="null"
                :style="{ flexWrap: wrapLayoutSquares ? 'wrap' : 'nowrap'}"
            >
                <div
                    class="LayoutDemo__Square"
                    :style="`
                        font-size: ${randomSizes[index+1]}rem;
                        flex: ${basisFillSquares ? '1 0 auto;' : 'unset'};
                    `"
                    v-for="index in Number(squares)"
                    :key="index"
                >
                    <small>
                        <template v-if="useNumbersForSquares">
                            {{ index < 10 ? '0' + index : index }}
                        </template>
                        <template v-else>
                            M
                        </template>
                    </small>
                </div>
            </div>
        </div>
        <div class="break" style="text-size: 0.7rem;"></div>
        <input
            type="range"
            name="amount-of-dynamic-squares"
            label="Amount of Dynamic Squares"
            step="1"
            :max="maxSquares"
            list="amount-of-dynamic-squares"
            v-model="squares"
        />
        <datalist
            id="amount-of-dynamic-squares"
            name="Amount of Dynamic Squares"
        >
            <option
                :value="(maxSquares / 6) * index"
                v-for="(number, index) in 7"
            >
                {{ (maxSquares / 6) * index }}
            </option>
        </datalist>
        <div class="break"></div>
        <div class="flex flex-wrap -m-2">
            <label for="useNumbersForSquares" class="Label p-2">
                <input
                    type="checkbox"
                    name="useNumbersForSquares"
                    id="useNumbersForSquares"
                    v-model="useNumbersForSquares"
                >
                <small class="Code ml-2">
                    useNumbersForSquares
                </small>
            </label>
            <label for="showSquareBaseline" class="Label p-2">
                <input
                    type="checkbox"
                    name="showSquareBaseline"
                    id="showSquareBaseline"
                    v-model="showSquareBaseline"
                >
                <small class="Code ml-2">
                    showSquareBaseline
                </small>
            </label>
            <label for="basisFillSquares" class="Label p-2">
                <input
                    type="checkbox"
                    name="basisFillSquares"
                    id="basisFillSquares"
                    v-model="basisFillSquares"
                >
                <small class="Code ml-2">
                    basisFillSquares
                </small>
            </label>
        </div>
    </Section>
</template>

<style>
    .LayoutDemo {
        position: relative;
        display: flex;
        flex-direction: column;
    }
    .LayoutDemo__container {
        --layout-demo-gap: 0.3rem;
        padding: var(--layout-demo-gap);
        gap: var(--layout-demo-gap);
        background-color: var(--theme-offset);
        aspect-ratio: 4/3;
        overflow: clip;
        max-width: 100%;
    }
    .LayoutDemo__Square {
        position: relative;
        display: flex;
        justify-content: center;
        box-shadow: inset 0 0 2px 0 var(--dark-head);
        border-radius: var(--input-round);
        min-width: 1em;
        min-height: 1em;
        background-color: var(--theme-primary);
        padding: 0.1em;
        opacity: .96;
        color: var(--dark-face);
    }
    .LayoutDemo.show-baseline .LayoutDemo__Square::after {
        position: absolute;
        top: 0.777em;
        z-index: 99;
        width: 2em;
        border-bottom: 1px solid red;
        content: '';
    }

    .bg-stripes-secondary {
        background-color: #818cf81a;
        background-image: linear-gradient(
            135deg,#6366f180 10%,
            transparent 0,
            transparent 50%,
            #6366f180 0,
            #6366f180 60%,
            transparent 0,
            transparent
        );
        background-size: 6px 6px;
    }
    @media (min-width: 479px) {
        .LayoutDemo__container {
            aspect-ratio: 16/9;
        }
    }
</style>

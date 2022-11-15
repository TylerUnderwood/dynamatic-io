<script setup>
import Banner from "@/components/Banner.vue";
import Section from "@/components/Section.vue";

const alignSharedTypes = [
    'center',
    'stretch',
    'between',
    'around',
    'evenly',
]
const selectFields = [
    {
        name: 'Y Content',
        slug: 'align-y',
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
        slug: 'align-x',
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
</script>

<script>
export default {
  data() {
    return {
      squares: 18,
      useNumbersForSquares: false,
      wrapLayoutSquares: true,
      showSquareBaseline: false
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
    }
}
</script>

<template>
    <Banner title="Layout"/>

    <Section heading="Layout Selector">
        <br class="break">
        <form action="" class="flex flex-wrap items-end -m-2">
            <div class="w-full p-2">
                <fieldset class="Fieldset">
                    <legend class="Legend">Orientation</legend>
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
                        >
                        <span class="Meta ml-1">{{ axis }}</span>
                    </label>
                </fieldset>
            </div>
            <div class="w-1/4 p-2" v-for="field in selectFields">
                <div class="mb-2">
                    <label class="Label" :for="`select-${field.slug}`">
                        {{ field.name }}
                    </label>
                    <code class="Code ml-2" style="font-size: 0.7rem;">
                        [{{ field.slug }}]
                    </code>
                </div>
                <select
                    :id="`select-box-${field.slug}`"
                    :name="field.slug"
                    class="Field Field--small"
                >
                    <option value="null">None</option>
                    <option
                        :value="value"
                        v-for="value in field.types"
                    >{{ value }}</option>
                </select>
            </div>
        </form>
        <br class="break">
        <div
            class="LayoutDemo"
            :class="{ 'show-baseline': showSquareBaseline }"
        >
            <div
                id="dynamic-box"
                class="LayoutDemo__container"
                layout="row"
                align-y="top"
                items-y="null"
                align-x="left"
                items-x="null"
                :style="{ flexWrap: wrapLayoutSquares ? 'wrap' : 'nowrap'}"
            >
                <div
                    class="LayoutDemo__Square"
                    :style="`font-size: ${Math.ceil(Math.random() * 4 + 1)}rem;`"
                    v-for="index in Number(squares)"
                    :key="index"
                >
                    <small class="text-head">
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
        <br class="break">
        <input
            type="range"
            name="amount-of-dynamic-squares"
            label="Amount of Dynamic Squares"
            step="1"
            max="36"
            list="amount-of-dynamic-squares"
            v-model="squares"
        />
        <datalist
            id="amount-of-dynamic-squares"
            name="Amount of Dynamic Squares"
        >
            <option value="0">0</option>
            <option value="6">6</option>
            <option value="12">12</option>
            <option value="18">18</option>
            <option value="24">24</option>
            <option value="30">30</option>
            <option value="36">36</option>
        </datalist>
        <br class="break">
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
            <label for="wrapLayoutSquares" class="Label p-2">
                <input
                    type="checkbox"
                    name="wrapLayoutSquares"
                    id="wrapLayoutSquares"
                    v-model="wrapLayoutSquares"
                >
                <small class="Code ml-2">
                    wrapLayoutSquares
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
        </div>
    </Section>
</template>

<style>
    .LayoutDemo {
        position: relative;
        display: flex;
        flex-direction: column;
        margin-bottom: 1.6rem;
        --layout-demo-axis-offset: 0.5em;
    }
    .LayoutDemo::before,
    .LayoutDemo::after {
        position: absolute;
        display: flex;
        justify-content: center;
        align-items: center;
        border: 0px solid var(--theme-head);
        vertical-align: middle;
        text-align: center;
    }
    .LayoutDemo::after {
        top: 0;
        right: calc(100% + var(--layout-demo-axis-offset));
        bottom: calc(var(--layout-demo-axis-offset) * -3);
        left: unset;
        border-right-width: 1px;
        padding-bottom: calc(var(--layout-demo-axis-offset) * 3);
        padding-right: 0.2em;
        content: "Y";
    }
    .LayoutDemo::before {
        top: calc(100% + var(--layout-demo-axis-offset));
        right: 0;
        bottom: unset;
        left: calc(var(--layout-demo-axis-offset) * -3);
        border-top-width: 1px;
        padding-left: calc(var(--layout-demo-axis-offset) * 3);
        padding-top: 0.2em;
        content: "X";
    }
    .LayoutDemo__container {
        background-color: var(--theme-offset);
        aspect-ratio: 16/9;
        overflow: auto;
        max-width: 100%;
        resize: horizontal;
    }
    .LayoutDemo__Square {
        position: relative;
        display: flex;
        justify-content: center;
        box-shadow: inset 0 0 0 1px var(--theme-head);
        min-width: 1em;
        min-height: 1em;
        background-color: var(--theme-primary);
        padding: 0.1em;
    }
    .LayoutDemo.show-baseline .LayoutDemo__Square::after {
        position: absolute;
        top: 0.777em;
        z-index: 99;
        width: 2em;
        border-bottom: 1px solid red;
        content: '';
    }
</style>

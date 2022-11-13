<script setup>
import Banner from "@/components/Banner.vue";
import Section from "@/components/Section.vue";
import Box from "@/components/Box.vue";

// const alignXClasses = [
//     'align-r',
//     'align-l',
//     'align-x',
//     'align-x-stretch',
//     'align-x-between',
//     'align-x-around',
//     'align-x-evenly',
// ];
// const alignYClasses = [
//     'align-t',
//     'align-b',
//     'align-y',
//     'align-y-stretch',
//     'align-y-between',
//     'align-y-around',
//     'align-y-evenly',
// ];
// const justifyXClasses = [
//     'justify-r',
//     'justify-l',
//     'justify-x',
//     'justify-x-baseline',
//     'justify-x-stretch',
//     'justify-x-between',
//     'justify-x-around',
//     'justify-x-evenly',
// ];
// const justifyYClasses = [
//     'justify-t',
//     'justify-b',
//     'justify-y',
//     'justify-y-baseline',
//     'justify-y-stretch',
//     'justify-y-between',
//     'justify-y-around',
//     'justify-y-evenly',
// ];
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
        // classes: alignYClasses,
        types: ['top', 'bottom', ...alignSharedTypes]
    },
    {
        name: 'Y Items',
        slug: 'items-y',
        label: 'itemsY',
        // classes: justifyYClasses,
        types: ['top', 'bottom', 'center', 'baseline']
    },
    {
        name: 'X Content',
        slug: 'align-x',
        label: 'alignX',
        // classes: alignXClasses,
        types: ['right', 'left', ...alignSharedTypes]
    },
    {
        name: 'X Items',
        slug: 'items-x',
        label: 'itemsX',
        // classes: justifyXClasses,
        types: ['right', 'left', 'center', 'baseline']
    }
];
</script>

<script>
export default {
  data() {
    return {
      squares: 24,
      useNumbersForSquares: false,
    }
  },

  methods: {
        radioDataset: ( radio, element ) => {
            radio.checked = element.dataset[radio.name] === radio.value;

            radio.addEventListener("change", (event) => {
                element.dataset[event.target.name] = radio.value;
            });
        },

        selectDataset: ( selector, element ) => {
            selector.value = element.dataset[selector.name];

            selector.addEventListener("change", (event) => {
                const options = event.target.options;
                const name = event.target.name;

                for ( let i = 0; i < options.length; i++) {
                    const option = options[i];

                    if ( !option.selected ) continue;

                    if ( option.value === "" || option.value === "default" ) {
                        delete element.dataset[name];
                    } else {
                        element.dataset[name] = option.value;
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
            this.selectDataset(selector, box);
        });

        radios.forEach( (radio) => {
            this.radioDataset(radio, box);
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
                        [data-{{ field.slug }}]
                    </code>
                </div>
                <select
                    :id="`select-box-${field.slug}`"
                    :name="field.label"
                    class="Field"
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
        <div class="bg-offset">
            <div
                id="dynamic-box"
                data-layout="row"
                data-align-y="top"
                data-items-y="null"
                data-align-x="left"
                data-items-x="null"
                style="aspect-ratio: 16/9; flex-wrap: wrap; overflow: clip;"
            >
                <div
                    class="LayoutDemoSquare"
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
            name="range"
            label="Range"
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
        <label for="useNumbersForSquares" class="Label">
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
    </Section>
</template>

<style>
    .LayoutDemoSquare {
        display: flex;
        justify-content: center;
        border: 2px solid var(--theme-head);
        min-width: 1em;
        min-height: 1em;
        background-color: var(--theme-primary);
        padding: 0.1em;
    }
</style>

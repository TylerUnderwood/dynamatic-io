<script setup>
import Banner from "@/components/Banner.vue";
import Section from "@/components/Section.vue";

const buttons = {
    type: [
        "default",
        "secondary",
        "tertiary",
        "stealth",
    ],
    state: [
        "active",
        "hover",
        "disabled",
    ],
    size: [
        "tall",
        "default",
        "thin",
        "tiny",
    ],
    shape: [
        "stout",
        "square",
        "full",
    ],
    scheme: [
        "warn",
        "error",
    ],
}

</script>

<script>
export default {
    methods: {
        selectClass: ( selector, element ) => {
            selector.addEventListener("change", (event) => {
                const options = event.target.options;

                for ( let i = 0; i < options.length; i++) {
                    const option = options[i];

                    if ( option.value === "" ) continue;

                    if ( option.selected ) {
                        element.classList.add(option.value);
                    } else {
                        element.classList.remove(option.value);
                    }
                }
            })
        },

        selectDataset: ( selector, element ) => {
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
        }
    },

    mounted() {
        const selectors = document.querySelectorAll("[id*=select-button-]");
        const button = document.querySelector("#dynamic-button");

        selectors.forEach( (selector) => {
            // this.selectClass(selector, button);
            this.selectDataset(selector, button);
        });
    }
}
</script>

<template>
    <Banner title="Button"/>

    <Section
        id="section-button-dynamic"
        heading="Button Selector"
    >
        <div class="flex mt-6 gap-4">
            <div v-for="types, name in buttons" class="flex-1">
                <label :for="`select-button-${name}`" class="meta" style="font-size: 0.7rem;">
                    {{ name }}
                </label>
                <select :id="`select-button-${name}`" class="Field w-full mt-2" :name="name">
                    <option value="" v-if="!types.includes('default')" selected>
                        none
                    </option>
                    <option
                        v-for="button in types"
                        :value="button"
                        :selected="button === 'default'"
                    >
                        {{ button }}
                    </option>
                </select>
            </div>
        </div>

        <div class="flex justify-center items-center p-4 mt-6 border-2" style="min-height: 240px;">
            <button id="dynamic-button" class="button">
                <span class="button__text meta">
                    Button
                </span>
            </button>
        </div>

    </Section>

    <Section
        v-for="types, name in buttons"
        :id="`section-button-${name}`"
        :heading="name[0].toUpperCase() + name.slice(1)"
    >
        <div class="flex flex-wrap gap-6 mt-6">
            <button
                v-for="button in types"
                class="button"
                :data-type="( name === 'type' ) ? button : null"
                :data-size="( name === 'size' ) ? button : null"
                :data-shape="( name === 'shape' ) ? button : null"
                :data-scheme="( name === 'scheme' ) ? button : null"
                :[button]="name === 'state' ? '' : null"
            >
                <span class="button__text meta">
                    {{ /square/.test(button) ? "s" : button }}
                </span>
            </button>
        </div>
    </Section>
</template>

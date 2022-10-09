<script setup>
import Banner from "@/components/Banner.vue";
import Section from "@/components/Section.vue";
import { nextTick } from "vue";

const buttons = {
    type: [
        "primary",
        "border",
        "stealth",
    ],
    state: [
        "active",
        "visited",
        "disabled",
    ],
    size: [
        "tall",
        "normal",
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

                for ( let i=0; i<options.length; i++) {
                    if ( options[i].value === "" ) continue;

                    if ( options[i].selected ) {
                        element.classList.add(options[i].value);
                    } else {
                        element.classList.remove(options[i].value);
                    }
                }
            })
        }
    },

    mounted() {
        const selectors = document.querySelectorAll("[id*=select-button-]");
        const button = document.querySelector("#dynamic-button");

        selectors.forEach( (selector) => {
            this.selectClass(selector, button);
        });
    }
}
</script>

<template>
    <Banner title="About"/>

    <Section
        id="section-button-dynamic"
        heading="Button Selector"
    >
        <div class="flex mt-6 gap-4">
            <div v-for="types, name in buttons">
                <label :for="`select-button-${name}`" class="meta" style="font-size: 0.7rem;">
                    {{ name }}
                </label>
                <select :id="`select-button-${name}`" class="mt-2" :name="name">
                    <option value="" v-if="!types.includes('primary')" selected>
                        none
                    </option>
                    <option :value="`button--${button}`" v-for="button in types">
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
        :heading="`${name}`"
    >
        <div class="flex flex-wrap gap-8 mt-8">
            <button :class="`button button--${button}`" :[button]="true" v-for="button in types">
                <span class="button__text meta">
                    {{ button }}
                </span>
            </button>
        </div>
    </Section>
</template>

<script setup>
import SectionDocs from "@/components/SectionDocs.vue";
</script>

<script>
export default {
    data() {
        return {
            buttonTree: {
                type: [
                    "default",
                    "secondary",
                    "tertiary",
                ],
                state: [
                    "stealth",
                    "active",
                    "hover",
                    "focus-v",
                    "disabled",
                ],
                size: [
                    "large",
                    "default",
                    "small",
                    "tiny",
                ],
                shape: [
                    "stout",
                    "square",
                    "simple",
                    "full",
                    "sm-full",
                    "md-full",
                    "lg-full",
                ],
                scheme: [
                    "base",
                    "face",
                    "success",
                    "warn",
                    "error",
                ],
            }
        }
    },

    computed: {
        buttonTypes() {
            let newItem = {};

            Object.keys(this.buttonTree).map(item => {
                if (item !== 'state') {
                    newItem[item] = this.buttonTree[item];
                }
            });

            return newItem;
        },
        buttonStates() {
            let newItem = {};

            Object.keys(this.buttonTree).map(item => {
                if (item === 'state') {
                    newItem[item] = this.buttonTree[item];
                }
            });

            return newItem;
        }
    },

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
        },

        toggleAttr: (toggle, element) => {
            const toggleAttr = () => {
                if (toggle.checked) {
                    element.setAttribute(toggle.value, "");
                } else {
                    element.removeAttribute(toggle.value);
                }
            }

            toggle.addEventListener('change', toggleAttr, false);

            toggleAttr();
        },
    },

    mounted() {
        const selectors = document.querySelectorAll("[id*=select-button-]");
        const toggles = document.querySelectorAll("[id*=toggle-button-]");
        const button = document.querySelector("#dynamic-button");

        selectors.forEach( (selector) => {
            this.selectDataset(selector, button);
        });

        toggles.forEach( (toggle) => {
            this.toggleAttr(toggle, button);
        });
    }
}
</script>

<template>
    <SectionDocs heading="Button Selector">
        <br class="break" style="font-size: 2.4rem;">
        <div class="flex flex-wrap gap-4">
            <div
                class="flex-1"
                style="min-width: 120px;"
                v-for="types, name in buttonTypes"
            >
                <label :for="`select-button-${name}`" class="Meta" style="font-size: 0.7rem;">
                    {{ name }}
                </label>
                <select :id="`select-button-${name}`" class="Field Field--small mt-2" :name="name">
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

        <div class="flex flex-wrap gap-4 mt-4" v-for="types in buttonStates">
            <label
                class="flex items-center gap-2"
                :for="`toggle-button-${button}`"
                v-for="button in types"
            >
                <span  class="order-2 Meta" style="font-size: 0.7rem;">
                    {{ button }}
                </span>
                <input
                    :id="`toggle-button-${button}`"
                    :name="button"
                    :value="button"
                    type="checkbox"
                />
            </label>
        </div>

        <div class="flex justify-center items-center p-4 mt-6 border-2" style="min-height: 240px;">
            <button id="dynamic-button" class="Button">
                <span class="Button__text Meta">
                    Button
                </span>
            </button>
        </div>
    </SectionDocs>

    <SectionDocs
        v-for="types, name in buttonTree"
        :heading="name[0].toUpperCase() + name.slice(1)"
    >
        <div class="mt-4">
            <code class="Code" style="font-size: 0.8rem">
                <template v-if="name === 'state'">
                    [{{ types.map(type => type).join(' | ') }}]
                </template>
                <template v-else>
                    [data-{{ name }}="{{ types.map(type => type).join(' | ') }}"]
                </template>
            </code>
        </div>
        <div class="flex flex-wrap gap-6 mt-6">
            <a
                v-for="button in types"
                class="Button"
                :data-type="name === 'type' ? button : null"
                :data-size="name === 'size' ? button : null"
                :data-shape="name === 'shape' ? button : null"
                :data-scheme="name === 'scheme' ? button : null"
                :[button]="name === 'state' ? '' : null"
                :href="`#docs-button-${name}-${button}`"
            >
                <span class="Button__text Meta">
                    {{ /square/.test(button) ? "&#9432;" : button }}
                </span>
            </a>
        </div>
    </SectionDocs>
</template>

<style>
    #dynamic-button[data-shape="square"]::before {
        content: "ⓘ" !important;
    }
    #dynamic-button[data-shape="square"] .Button__text {
        display: none;
    }
</style>

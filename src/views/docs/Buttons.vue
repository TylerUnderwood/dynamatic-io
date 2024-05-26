<script setup>
import SectionDocs from "@/components/SectionDocs.vue";
</script>

<script>
export default {
    data() {
        return {
            // demoButtonType: "default",
            // demoButtonSize: "default",
            // demoButtonShape: "default",
            // demoButtonTheme: "default",
            // demoButtonStealth: false,
            // demoButtonActive: false,
            // demoButtonHover: false,
            // demoButtonFocusV: false,
            // demoButtonDisabled: false,

            // :data-type="demoButtonType"
            // :data-size="demoButtonSize"
            // :data-shape="demoButtonShape"
            // :data-theme="demoButtonTheme"
            // :stealth="demoButtonStealth"
            // :active="demoButtonActive"
            // :hover="demoButtonHover"
            // :focus-v="demoButtonFocusV"
            // :disabled="demoButtonDisabled"
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
                theme: [
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
        const buttonLight = document.querySelector("#demo-button-light");
        const buttonDark = document.querySelector("#demo-button-dark");

        selectors.forEach( (selector) => {
            this.selectDataset(selector, buttonLight);
            this.selectDataset(selector, buttonDark);
        });

        toggles.forEach( (toggle) => {
            this.toggleAttr(toggle, buttonLight);
            this.toggleAttr(toggle, buttonDark);
        });
    }
}
</script>

<template>
    <SectionDocs heading="Button Selector">
        <div class="break" style="font-size: 2.4rem;"></div>
        <div class="flex flex-wrap -m-2">
            <div
                class="w-1/2 md:w-1/4 p-2"
                v-for="types, name in buttonTypes"
            >
                <label :for="`select-button-${name}`" class="Meta lhc" style="font-size: 0.7rem;">
                    {{ name }}
                </label>
                <select :id="`select-button-${name}`" class="Field Field--small mt-1" :name="name">
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

        <div class="flex flex-wrap gap-4 mt-5" v-for="types in buttonStates">
            <label
                class="flex items-center gap-2"
                :for="`toggle-button-${button}`"
                v-for="button in types"
            >
                <span  class="order-2 Meta lhc" style="font-size: 0.7rem;">
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

        <div class="flex mt-5" style="min-height: 240px;">
            <div
                :class="[
                    'flex justify-center items-center p-4 flex-1 bg-base border-t-2 border-b-2',
                    {
                        'border-l-2 rounded-s': item === 'light',
                        'border-r-2 rounded-e': item === 'dark'
                    }
                ]"
                :data-scheme="item"
                v-for="item in ['light', 'dark']"
            >
                <button :id="`demo-button-${item}`" class="Button">
                    <span class="Button__text Meta lhc">
                        Button
                    </span>
                </button>
            </div>
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
                :data-theme="name === 'theme' ? button : null"
                :[button]="name === 'state' ? '' : null"
                :href="`#docs-button-${name}-${button}`"
            >
                <span class="Button__text Meta lhc">
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
        display: none !important;
    }
</style>

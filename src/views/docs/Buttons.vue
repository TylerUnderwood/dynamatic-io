<script setup>
import { ref } from "vue"
import SectionDocs from "@/components/SectionDocs.vue";

const demoButtonStates = ref([])
const demoButton =  ref({
                type: "default",
                size: "default",
                shape: "default",
                theme: "default",
                states: demoButtonStates,
            })
const schemeTuple = ['body', 'inverse'];



const hasAttr = (attrName) => {
            return demoButton.value[attrName] !== "default" || demoButton.value[attrName] !== "none";
        };
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
                    "focused",
                    "disabled",
                ],
                size: [
                    "large",
                    "default",
                    "small",
                    "tiny",
                ],
                shape: [
                    "default",
                    "stout",
                    "square",
                    "simple",
                    "full",
                    "sm-full",
                    "md-full",
                    "lg-full",
                ],
                theme: [
                    "default",
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

                    if ( option.value === "default" ) {
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
        const button1 = document.querySelector("#demo-button-1");
        const button2 = document.querySelector("#demo-button-2");

        selectors.forEach( (selector) => {
            this.selectDataset(selector, button1);
            this.selectDataset(selector, button2);
        });

        toggles.forEach( (toggle) => {
            this.toggleAttr(toggle, button1);
            this.toggleAttr(toggle, button2);
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
                <label
                    :for="`select-button-${name}`"
                    class="Meta lhc"
                    style="font-size: 0.7rem;"
                >
                    {{ name }}
                </label>
                <select
                    :id="`select-button-${name}`"
                    class="Field Field--small mt-1"
                    :name="name"
                    v-model="demoButton[name]"
                >
                    <option
                        v-for="option in types"
                        :value="option"
                        :selected="option === 'default'"
                    >
                        {{ option }}
                    </option>
                </select>
            </div>
        </div>

        <div class="flex flex-wrap gap-4 mt-5" v-for="types in buttonStates">
            <label
                class="flex items-center gap-2"
                :for="`toggle-button-${buttonState}`"
                v-for="buttonState in types"
            >
                <span  class="order-2 Meta lhc" style="font-size: 0.7rem;">
                    {{ buttonState }}
                </span>
                <input
                    :id="`toggle-button-${buttonState}`"
                    :name="buttonState"
                    :value="buttonState"
                    type="checkbox"
                    v-model="demoButtonStates"
                />
            </label>
        </div>

        <div class="flex mt-5" style="min-height: 240px;">
            <div
                :class="[
                    'flex flex-col justify-center items-center gap-2 p-4 flex-1 bg-base border-t-2 border-b-2',
                    {
                        'border-l-2 rounded-s': item === schemeTuple[0],
                        'border-r-2 rounded-e': item === schemeTuple[1]
                    }
                ]"
                :data-scheme="item"
                v-for="(item, index) in schemeTuple"
                :key="index"
            >
                <button
                    :id="`demo-button-${index+1}`"
                    class="Button"
                >
                    <span class="Button__text Meta lhc">
                        {{ demoButton.shape !== "square" ? "Button" : "B" }}
                    </span>
                </button>
            </div>
        </div>

        <div class="pt-3"></div>

        <code class="Codeblock text-xs">
<pre>
&lt;button
    class="Button"{{ demoButton.type !== 'default' ? `
    data-type="${demoButton.type}"` : '' }}{{ demoButton.size !== 'default' ? `
    data-size="${demoButton.size}"` : '' }}{{ demoButton.shape !== 'default' ? `
    data-shape="${demoButton.shape}"` : '' }}{{ demoButton.theme !== 'default' ? `
    data-theme="${demoButton.theme}"` : '' }}{{ demoButton.states.length > 0 ? `
    ${demoButton.states.join(" ")}` : null }}
&gt;
</pre>
        </code>
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
                    {{ /square/.test(button) ? "B" : button }}
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

<script setup>
import SectionDocs from "@/components/SectionDocs.vue";
import Field from "@/components/Field.vue";

const inputTypes = {
    "string": [
        "text",
        "number",
        "email",
        "password",
        "url",
        "tel",
        "search",
    ],
    "time": [
        "datetime-local",
        "date",
        "month",
        "week",
        "time",
    ],
    "unique": [
        "file",
        "range",
        "color",
        "checkbox",
        "radio",
    ],
    "button": [
        "button",
        "reset",
        "submit",
    ]
}

const inputFields = [...inputTypes.string, ...inputTypes.time]
</script>

<script>
import theme from '@config/theme.json';

export default {
  data() {
    return {
      theme
    }
  },

  computed: {
    themeInputHex() {
      return getComputedStyle(document.documentElement).getPropertyValue(theme.color.input).trim();
    }
  },
}
</script>

<template>
    <SectionDocs heading="Styled Inputs">
        <div class="pt-6"></div>

        <form class="flex flex-col gap-4" action="">
            <input
                class="Field"
                type="text"
                name="field"
                placeholder="Field"
            />
            <textarea
                class="Field Textarea"
                name="textarea"
                placeholder="Field Textarea"
            />
            <select
                class="Field Select"
                name="select"
            >
                <option value="field-select-1">Field Select 01</option>
                <option value="field-select-2">Field Select 02</option>
                <option value="field-select-3">Field Select 03</option>
            </select>
        </form>
    </SectionDocs>

    <SectionDocs heading="Default Inputs">
        <div class="pt-6"></div>

        <details>
            <summary>
                <h3 class="Heading">Text Field Types</h3>
            </summary>
            <form class="flex flex-col gap-4" action="null">
                <template v-for="type, index in inputFields">
                    <input
                        :id="'input-' + type"
                        :type="type"
                        :name="type"
                        :placeholder="type"
                    />
                </template>
            </form>
        </details>

        <details open>
            <summary>
                <h3 class="Heading">All Input Types</h3>
            </summary>
            <form class="Form" action="">

                <input id="text" type="text" name="text" placeholder="text" />
                <br/>

                <textarea placeholder="textarea"></textarea>
                <br/>

                <select name="select">
                    <option value="select-1">Select option 01</option>
                    <option value="select-2">Select option 02</option>
                    <option value="select-3">Select option 03</option>
                    <option value="select-4">Select option 04</option>
                    <option value="select-5">Select option 05</option>
                </select>
                <br/>

                <input
                    type="text"
                    name="datalist"
                    placeholder="datalist"
                    list="datalist"
                />
                <datalist id="datalist" name="datalist">
                    <option value="datalist-1">Datalist option 01</option>
                    <option value="datalist-2">Datalist option 02</option>
                    <option value="datalist-3">Datalist option 03</option>
                    <option value="datalist-4">Datalist option 04</option>
                    <option value="datalist-5">Datalist option 05</option>
                </datalist>
                <br/>

                <fieldset>
                    <legend>Checkbox</legend>
                    <label for="checkbox-1">
                        <input
                            id="checkbox-1"
                            name="checkbox"
                            label="checkbox 1"
                            type="checkbox"
                            checked />
                        <span class="ml-4">Checkbox 1</span>
                    </label>
                    <br/>
                    <label for="checkbox-2">
                        <input
                            id="checkbox-2"
                            name="checkbox"
                            label="checkbox 2"
                            type="checkbox" />
                        <span class="ml-4">Checkbox 2</span>
                    </label>
                    <br/>
                    <label for="checkbox-3">
                        <input
                            id="checkbox-3"
                            name="checkbox"
                            label="checkbox 3"
                            type="checkbox" />
                        <span class="ml-4">Checkbox 3</span>
                    </label>
                </fieldset>
                <br/>

                <fieldset>
                    <legend>Radio</legend>
                    <label for="radio-1">
                        <input
                            id="radio-1"
                            name="radio"
                            label="Radio 1"
                            type="radio"
                            checked />
                        <span class="ml-4">Radio 1</span>
                    </label>
                    <br/>
                    <label for="radio-2">
                        <input
                            id="radio-2"
                            name="radio"
                            label="Radio 2"
                            type="radio" />
                        <span class="ml-4">Radio 2</span>
                    </label>
                    <br/>
                    <label for="radio-3">
                        <input
                            id="radio-3"
                            name="radio"
                            label="Radio 3"
                            type="radio" />
                        <span class="ml-4">Radio 3</span>
                    </label>
                </fieldset>
                <br/>

                <input type="range" name="range" label="Range" />
                <br/>

                <input type="range" name="range" label="Range" step="25" list="range-amounts" />
                <datalist id="range-amounts" name="range-amounts">
                    <option value="0">0</option>
                    <option value="25">25</option>
                    <option value="50">50</option>
                    <option value="75">75</option>
                    <option value="100">100</option>
                </datalist>
                <br/>

                <progress max="100" value="50"></progress>
                <br/>

                <progress></progress>
                <br/>

                <input name="file" type="file" />
                <br/>

                <input
                    id="input-type-color"
                    name="color"
                    label="color"
                    type="color"
                    placeholder="color"
                    :value="themeInputHex"
                />
                <br/>

                <input type="button" value="Button" />
                <br/>

                <input type="reset" />
                <br/>

                <input type="submit"  />
            </form>
        </details>

    </SectionDocs>

</template>

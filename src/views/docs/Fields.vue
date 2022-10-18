<script setup>
import Banner from "@/components/Banner.vue";
import Section from "@/components/Section.vue";

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
        "image",
        "range",
        "color",
        "checkbox",
        "radio",
        "hidden",
    ],
    "button": [
        "button",
        "reset",
        "submit",
    ]
}

const inputFields = [...inputTypes.string, ...inputTypes.time]
</script>

<template>
    <Banner title="Fields"/>

    <Section
        id="section-fields"
        heading="Section Fields"
    >
        <br class="break"/>

        <form class="" action="">

            <input id="text" type="text" name="text" placeholder="text" />

            <br class="break"/>

            <fieldset>
                <legend>Select</legend>
                <select name="select">
                    <option value="option1">Option 1</option>
                    <option value="option2">Option 2</option>
                    <option value="option3">Option 3</option>
                    <option value="option4">Option 4</option>
                </select>
                <br class="break"/>
                <input
                    placeholder="datalist"
                    name="datalist"
                    label="datalist"
                    type="text"
                    list="datalist"
                />
                <datalist id="datalist" name="datalist">
                    <option value="option1">Option 1</option>
                    <option value="option2">Option 2</option>
                    <option value="option3">Option 3</option>
                    <option value="option4">Option 4</option>
                </datalist>
            </fieldset>

            <br class="break"/>

            <fieldset>
                <legend>Checkbox</legend>
                <label for="checkbox1">
                    <input
                        id="checkbox1"
                        name="checkbox"
                        label="checkbox 1"
                        type="checkbox"
                        checked />
                    <span class="ml-4">Checkbox 1</span>
                </label>
                <br class="break size-xs"/>
                <label for="checkbox2">
                    <input
                        id="checkbox2"
                        name="checkbox"
                        label="checkbox 2"
                        type="checkbox" />
                    <span class="ml-4">Checkbox 2</span>
                </label>
                <br class="break size-xs"/>
                <label for="checkbox3">
                    <input
                        id="checkbox3"
                        name="checkbox"
                        label="checkbox 3"
                        type="checkbox" />
                    <span class="ml-4">Checkbox 3</span>
                </label>
            </fieldset>

            <br class="break"/>

            <fieldset>
                <legend>Radio</legend>
                <label for="radio1">
                    <input
                        id="radio1"
                        name="radio"
                        label="Radio 1"
                        type="radio"
                        checked />
                    <span class="ml-4">Radio 1</span>
                </label>
                <br class="break size-xs"/>
                <label for="radio2">
                    <input
                        id="radio2"
                        name="radio"
                        label="Radio 2"
                        type="radio" />
                    <span class="ml-4">Radio 2</span>
                </label>
                <br class="break size-xs"/>
                <label for="radio3">
                    <input
                        id="radio3"
                        name="radio"
                        label="Radio 3"
                        type="radio" />
                    <span class="ml-4">Radio 3</span>
                </label>
            </fieldset>

            <br class="break"/>

            <input
                type="range"
                name="range"
                label="Range"
            />

            <br class="break"/>

            <input
                name="file"
                type="file"
            />

            <br class="break"/>

            <input
                name="image"
                type="image"
            />

            <br class="break"/>

            <input
                name="color"
                label="color"
                type="color"
                placeholder="color"
            />

            <br class="break"/>

            <textarea class="textarea"></textarea>

            <br class="break"/>

            <input class="button" type="submit" />
        </form>

    </Section>

    <Section
        id="section-all-fields"
        heading="Section All Fields"
    >
        <form action="">
            <details>
                <summary>All normal fields</summary>
                <div>
                    <template v-for="type, index in inputFields">
                        <input
                            :id="'input-' + type"
                            :type="type"
                            :name="type"
                            :placeholder="type"
                        />
                        <br class="break"/>
                    </template>
                </div>
            </details>
        </form>
    </Section>

</template>

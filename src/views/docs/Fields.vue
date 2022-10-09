<script setup>
import Banner from "@/components/Banner.vue";
import Section from "@/components/Section.vue";
</script>

<template>
    <Banner title="Fields"/>

    <Section
        id="section-fields"
        heading="Section Fields"
    >
        <form class="Form mt-6">
            <input class="input" type="text" placeholder="Text" />
            <br/>
            <input class="input" type="number" placeholder="Number" />
            <br/>
            <input class="input" type="password" placeholder="Password" />
            <br/>
            <select class="input">
                <option value="option-1">Option 1</option>
                <option value="option-2">Option 2</option>
                <option value="option-3">Option 3</option>
            </select>
            <br/>
            <input class="button" type="button" value="submit">
        </form>
    </Section>
</template>

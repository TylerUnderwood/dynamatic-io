<script setup>
import Banner from "@/components/Banner.vue";
import Section from "@/components/Section.vue";
import Field from "@/components/Field.vue";
import Submit from "@/components/Submit.vue";
</script>

<template>
    <Banner title="Contact"/>

    <Section heading="Form That Does Nothing">

        <form class="flex md:items-end mt-8" action="">
            <button class="Button rounded-full mr-2 z-9" data-type="tertiary" data-shape="square">
                <div class="Button__icon">&#9432;</div>
            </button>
            <div class="Soloform flex-1 md:items-end">
                <Field
                    name="Vue Field Component"
                    type="email"
                    placeholder
                    label
                />
                <Submit id="submit-vue-field" />
            </div>
        </form>

    </Section>
</template>

<style>
    .Soloform {
        display: flex;
        flex-direction: column;
    }

    .Soloform .Field {
        flex: 1 0 auto;
        width: 100%;
    }

    .Soloform .Submit {
        margin-top: 0.5em;
        width: 100%;
        padding-left: 1.2em;
        padding-right: 1.2em;
    }

    @media screen and (min-width: 768px) {
        .Soloform {
            flex-direction: row;
        }

        .Soloform .Field {
            border-top-right-radius: unset;
            border-bottom-right-radius: unset;
            border-right: transparent;
        }

        .Soloform .Submit {
            margin-top: 0;
            width: auto;
            border-top-left-radius: unset;
            border-bottom-left-radius: unset;
            border-left: transparent;
        }
    }
</style>

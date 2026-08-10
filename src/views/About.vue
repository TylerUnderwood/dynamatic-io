<script setup>
import Hero from "@/components/hero/Hero.vue";
import Section from "@/components/section/Section.vue";
</script>

<template>
    <Hero
        title="About"
    />

    <Section heading="Contributors">
        <div class="Markup mt-6">
            <h3>
                Tyler Underwood
            </h3>
            <p>
                I am  currently the only one working on this project, but I would like to make Dynamatic open source and easy to use for all. You can check me out on github here, <a class="Link" href="https://github.com/TylerUnderwood" target="_blank">TylerUnderwood</a>.
            </p>
        </div>
    </Section>

    <Section heading="Form That Does Nothing" v-if="$isDev">

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

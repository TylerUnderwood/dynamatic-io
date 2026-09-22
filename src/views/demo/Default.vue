<script setup>
import { computed } from "vue"
import { useRoutesList } from "@/utils/useRoutesList"
import Hero from "@/components/hero/Hero.vue";
import Section from "@/components/section/Section.vue";

const demosLinks = computed(() => useRoutesList("Demos"))
</script>

<template>
    <Hero
        title="Demos"
        intro="These are components that will be available with Dynamatic"
    />

    <Section
        heading="Current WIP demos"
        class="hidden"
    >
        <div class="mt-4 flex flex-wrap -m-2">
            <div class="w-full md:w-1/2 p-2">
                <router-link
                    to="/demo/layout"
                    class="Button"
                    data-size="large"
                    data-shape="full"
                >
                    <span class="Meta lhc">
                        Layout Demo
                    </span>
                </router-link>
            </div>
            <div class="w-full md:w-1/2 p-2">
                <router-link
                    to="/demo/section"
                    class="Button"
                    data-size="large"
                    data-shape="full"
                >
                    <span class="Meta lhc">
                        Section Demo
                    </span>
                </router-link>
            </div>
        </div>
    </Section>

    <Section heading="List of all Demos">
        <ul class="mt-4">
            <li class="[&:not(:first-child)]:mt-2" v-for="link in demosLinks">
                <router-link :to="link.path" class="Button" data-size="small" data-shape="stout">
                    <span class="Meta lhc">{{ link.name }}</span>
                </router-link>
            </li>
        </ul>
    </Section>

</template>

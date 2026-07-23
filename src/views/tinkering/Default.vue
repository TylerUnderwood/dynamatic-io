<script setup>
import { computed } from "vue"
import { useRoutesList } from "@/utils/useRoutesList"
import Hero from "@/components/hero/Hero.vue";
import Section from "@/components/section/Section.vue";

const tinkerLinks = computed(() => useRoutesList("Tinkering"))
</script>

<template>
    <Hero
        title="Tinkering"
        intro="This is whatever I am currently working on"
    />

    <Section
        heading="Recent tinkerings"
        class="hidden"
    >
        <div class="mt-4 flex flex-wrap -m-2">
            <div class="w-full md:w-1/2 p-2">
                <router-link
                    to="/tinkering/components"
                    class="Button"
                    data-size="large"
                    data-shape="full"
                >
                    <span class="Meta lhc">
                        Misc Components
                    </span>
                </router-link>
            </div>
            <div class="w-full md:w-1/2 p-2">
                <router-link
                    to="/tinkering/custom-tailwind-classes"
                    class="Button"
                    data-size="large"
                    data-shape="full"
                >
                    <span class="Meta lhc">
                        Custom Tailwind Classes
                    </span>
                </router-link>
            </div>
        </div>
    </Section>

    <Section heading="List of all tinkerings">
        <ul class="mt-4">
            <li class="[&:not(:first-child)]:mt-2" v-for="link in tinkerLinks">
                <router-link :to="link.path" class="Button" data-size="small" data-shape="stout">
                    <span class="Meta lhc">{{ link.name }}</span>
                </router-link>
            </li>
        </ul>
    </Section>

</template>

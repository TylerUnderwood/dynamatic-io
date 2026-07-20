<script setup>
import Hero from "@/components/hero/Hero.vue";
import Section from "@/components/section/Section.vue";
import Modal from "@/components/Modal.vue";
import Drawer from "@/components/Drawer.vue";
import Button from "@/components/inputs/Button.vue";
import DemoBlock from "@/components/DemoBlock.vue";
</script>

<template>
    <Hero
        title="Tinkering"
        intro="This is whatever I am currently working on"
    />

    <Section
        heading="Links to recent tinkerings"
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

</template>

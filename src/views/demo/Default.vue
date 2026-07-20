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
        title="Demos"
        intro="These are components that will be available with Dynamatic"
    />

    <Section
        heading="WIP demos"
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

</template>

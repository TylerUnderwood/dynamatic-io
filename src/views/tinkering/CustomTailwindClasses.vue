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
        title="Custom Tailwind Classes"
    />

    <Section
        heading="Learning how to build tailwind classes"
    >
        <div class="break"></div>

        <a
            class="Link font-bold"
            href="https://www.protailwind.com/tutorials/animated-background-stripes"
        >
            Tutorial by protailwind.com
        </a>

        <div class="break" style="font-size: 1.5rem;"></div>

        <div class="matrix cells-2 sm:cells-3 md:cells-6 void">
            <div class="cell" v-for="item in 6">
                <DemoBlock>
                    <span>M</span>
                </DemoBlock>
            </div>
        </div>
    </Section>

</template>

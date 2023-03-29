<script setup>
import Banner from "@/components/Banner.vue";
import Section from "@/components/Section.vue";
import SectionSplit from "@/components/SectionSplit.vue";
import SectionBlock from "@/components/SectionBlock.vue";

const topItems = [
    {
        copy: 'Hello',
    },
    {
        copy: 'Hello',
        blockClass: 'bg-base theme-body py-4 mt-8 md:mt-20',
    },
    {
        copy: 'Hello',
    },
];

const botItems = [
    {
        copy: 'Hello',
    },
    {
        copy: 'Hello',
    },
    {
        copy: 'Hello',
        blockClass: 'mt-8 md:mt-20',
    },
];
</script>

<template>
    <Banner
        title="Home"
        intro="Welcome to Dynamatic"
    />

    <Section>
        <div class="flex flex-col md:flex-row gap-6">
            <div class="sm:w-1/2">
                <router-link to="/sandbox" class="Button" data-size="small">
                    <span class="Button__text Meta">Sandbox</span>
                </router-link>
                <p class="Copy mt-2">Head over to my sandbox to see what I am currently working on.</p>
            </div>
            <div class="sm:w-1/2">
                <router-link to="/docs" class="Button" data-size="small">
                    <span class="Button__text Meta">Docs</span>
                </router-link>
                <p class="Copy mt-2">Or checkout the Docs to see some more "finalized" elements.</p>
            </div>
        </div>
    </Section>

    <SectionSplit
        classTop="bg-primary theme-dark py-8"
        classBot="mt-8 md:mt-0 justify-center"
        :ratio="66"
    >
        <template #top>
            <SectionBlock
                class="Markup Rhythm"
                :class="item.blockClass ? item.blockClass : 'mt-8'"
                v-for="item, index in topItems"
                :wrapWidth="index === 1 ? 'var(--max-w-copy)' : null"
            >
                <h3>Top {{ index + 1 }}</h3>
                <p>{{ item.copy }}</p>
            </SectionBlock>
        </template>
        <template #bot>
            <SectionBlock
                class="Markup Rhythm"
                :class="item.blockClass ? item.blockClass : 'mt-8'"
                v-for="item, index in botItems"
            >
                <h3>Bottom {{ index + 1 }}</h3>
                <p>{{ item.copy }}</p>
            </SectionBlock>
        </template>
    </SectionSplit>
</template>

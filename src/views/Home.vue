<script setup>
import Banner from "@/components/Banner.vue";
import Section from "@/components/Section.vue";
import SectionSplit from "@/components/SectionSplit.vue";
import SectionBlock from "@/components/SectionBlock.vue";
</script>

<template>
    <Banner
        title="Home"
        intro="Welcome to Dynamatic"
    />

    <Section>
        <div class="m-auto Rhythm text-center">
            <p class="Copy">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque volutpat ut elit non tincidunt. Fusce ac eros neque. Morbi eget mollis eros. Suspendisse porttitor arcu quam, nec tincidunt erat porta vitae.
            </p>
        </div>
    </Section>

    <SectionSplit
        :reverse="true"
        classBase="mt-section"
        classTop="bg-primary"
        classBot="py-8 justify-center"
    >
        <template #top>
            <SectionBlock classBase="p-0 flex-1" classWrap="p-0" data-theme="dark">
                <figure class="m-0 aspect-video overflow-hidden">
                    <img
                        class="w-full h-full object-cover object-center"
                        src="images/saturn-001.jpg"
                        alt="Saturn"
                    >
                </figure>
            </SectionBlock>
        </template>
        <template #bot>
            <SectionBlock>
                <div class="m-auto Block Rhythm text-center md:text-left">
                    <h2 class="Heading">Sandbox</h2>
                    <p class="Copy">Head over to my sandbox to see what I am currently working on.</p>
                    <router-link to="/sandbox" class="Button mt-4" data-size="small">
                        <span class="Button__text Meta">See More</span>
                    </router-link>
                </div>
            </SectionBlock>
        </template>
    </SectionSplit>

    <SectionSplit
        classBase="mb-section"
        classTop="bg-primary"
        classBot="py-8 justify-center"
    >
        <template #top>
            <SectionBlock classBase="p-0 flex-1" classWrap="p-0" data-theme="dark">
                <figure class="m-0 aspect-video overflow-hidden">
                    <img
                        class="w-full h-full object-cover object-center"
                        src="images/saturn-002.jpg"
                        alt="Saturn"
                    >
                </figure>
            </SectionBlock>
        </template>
        <template #bot>
            <SectionBlock>
                <div class="m-auto Block Rhythm text-center md:text-left">
                    <h2 class="Heading">Documentation</h2>
                    <p class="Copy">Or checkout the Docs to see some more "finalized" elements.</p>
                    <router-link to="/docs" class="Button mt-4" data-size="small">
                        <span class="Button__text Meta">Read More</span>
                    </router-link>
                </div>
            </SectionBlock>
        </template>
    </SectionSplit>

</template>

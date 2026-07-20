<script setup>
import Hero from "@/components/hero/Hero.vue";
import Section from "@/components/section/Section.vue";
import HomeSection from "@/components/homepage/HomeSection.vue";

const homeSections = [
    {
        heading: "Sandbox",
        copy: "Head over to my sandbox to see what I am currently working on.",
        link: "/sandbox",
        linkText: "See More",
    },
    {
        heading: "Documentation",
        copy: "Or checkout the Docs to see some more 'finalized' elements.",
        link: "/docs",
        linkText: "Read More",
    },
    {
        heading: "Section Split Demo",
        copy: "This demo shows how you can effectively split a section of a page.",
        link: "/demo/section",
        linkText: "See Demo",
    },
    {
        heading: "Layout Demo",
        copy: "This layout tool is a simple way to use flex without the difficult naming conventions.",
        link: "/demo/layout",
        linkText: "See Demo",
    },
]

</script>

<template>
    <Hero
        title="Home"
        intro="Welcome to Dynamatic"
    />

    <Section>
        <div class="m-auto Rhythm text-center">
            <p class="Copy mx-auto md:mx-unset">
                Dynamatic is a native CSS framework with modern design technologies, built from configured theme tokens. And this, is a promotional SPA build using the Dynamatic framework.
            </p>
            <div class="mt-5 md:mt-8 flex justify-center items-center gap-4">
                <a
                    class="Button"
                    href="https://github.com/TylerUnderwood/dynamatic-io"
                    target="_blank"
                >
                    <div class="Button__text Meta lhc">
                        Repo
                    </div>
                </a>
                <a
                    class="Button"
                    data-type="secondary"
                    href="https://www.npmjs.com/package/dynamatic?activeTab=readme"
                    target="_blank"
                >
                    <div class="Button__text Meta lhc">
                        Node Package
                    </div>
                </a>
            </div>
        </div>
    </Section>

    <template v-for="(item, index) in homeSections" :key="index">
        <HomeSection
            :isFirst="index === 0"
            :isLast="index === homeSections.length - 1"
            :reverse="!(index % 2)"
            :heading="item.heading"
            :copy="item.copy"
            :link="item.link"
            :linkText="item.linkText"
        />
    </template>

    <div class="spacer size-[var(--space-section)]"></div>

    <Section
        classBase="hidden px-page bg-primary py-3 mb-5 md:mb-0"
        data-scheme="dark"
    >
        <div class="flex flex-col md:flex-row items-center text-center">
            <p class="Copy">
                Want to contribute and or chat about design and development?
            </p>
            <div class="filler"></div>
            <router-link
                to="/contact"
                class="Button"
                data-type="secondary"
                data-size="small"
                data-theme="face"
            >
                <span class="Meta lhc">
                    Contact
                </span>
            </router-link>
        </div>
    </Section>

</template>

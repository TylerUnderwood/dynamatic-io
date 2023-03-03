<script setup>
import Banner from "@/components/Banner.vue";
import Section from "@/components/Section.vue";
</script>

<template>
    <Banner title="Home" intro="Welcome to Dynamatic" />

    <section class="Section px-section my-section">
        <div class="wrapper">
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
        </div>
    </section>
</template>

<script setup>
import Banner from "@/components/Banner.vue";
import Section from "@/components/Section.vue";
import Modal from "@/components/Modal.vue";
import Drawer from "@/components/Drawer.vue";
import Button from "@/components/Button.vue";
import DemoBlock from "@/components/DemoBlock.vue";
</script>

<template>
    <Banner
        title="Sandbox"
        intro="This is whatever I am currently working on"
    />

    <Section
        heading="Links to recent demos"
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

    <Section heading="Drawer">
        <Drawer
            :id="`demoDrawer0${index}`"
            v-for="index in 3"
            class="mt-6"
            :open="index === 1 ? '' : null"
        >
            <template #summary>
                <div class="Card Card--hover">
                    <h3 class="Heading h4 lhc">This is a summary {{ index }}</h3>
                </div>
            </template>
            <template #content>
                <div class="Markup Rhythm mt-4">
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos adipisci <a href="#0" class="Link">inventore</a> sunt dolore earum ex repellat voluptate dicta ipsum porro, nesciunt quo, minus illum, optio officiis ad rem sapiente consequatur.
                    </p>
                    <p v-if="index === 2 || index === 3">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, distinctio enim illum earum vitae dignissimos velit, error totam voluptatibus quam accusamus architecto inventore tempore sit numquam? Quo voluptatum commodi excepturi.
                    </p>
                    <p v-if="index === 3" v-for="copy in 20">
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae accusamus quidem numquam reiciendis, illum repudiandae recusandae adipisci. Nesciunt consequatur non quasi eligendi officia repellat, molestias nulla expedita debitis possimus facere!
                    </p>
                </div>
            </template>
        </Drawer>
        <div class="mt-4">
            <code class="Code">
                new Drawer('demoDrawer01').toggle()
            </code>
        </div>
    </Section>

    <Section heading="Modal">
        <div class="break"></div>

        <div class="flex flex-wrap -m-2">
            <div class="p-2">
                <a
                    class="Button"
                    data-size="large"
                    data-shape="stout"
                    href="#demoModal01"
                >
                    <div class="Button__text Meta lhc">
                        Open Modal
                    </div>
                </a>
            </div>
            <div class="p-2">
                <Button
                    text="Open Tall Modal"
                    size="large"
                    shape="stout"
                    onclick="new window.Modal('demoModal02').toggle()"
                />
            </div>
        </div>

        <Modal id="demoModal01">
            <div class="Card Card--lg">
                <h2 class="Heading h3 lhc">Heading</h2>
                <p class="Copy mt-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur voluptas, aut saepe unde nesciunt sunt ipsum! Magnam officiis veritatis molestiae debitis soluta hic accusamus, praesentium quod. A iusto sunt tempore?</p>
            </div>
        </Modal>

        <Modal id="demoModal02">
            <div class="Card Card--lg Col" style="min-height: 110vh;">
                <h2 class="Heading h3 lhc">Heading</h2>
                <p class="Copy mt-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur voluptas, aut saepe unde nesciunt sunt ipsum! Magnam officiis veritatis molestiae debitis soluta hic accusamus, praesentium quod. A iusto sunt tempore?</p>
                <div class="filler"></div>
                <small class="mt-4">Hello lol</small>
            </div>
        </Modal>

        <div class="mt-4">
            <code class="Code">
                new Modal('demoModal01').toggle()
            </code>
        </div>
    </Section>

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

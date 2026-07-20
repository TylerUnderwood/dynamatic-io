<script setup>
import Hero from "@/components/hero/Hero.vue";
import Section from "@/components/section/Section.vue";
import Modal from "@/components/Modal.vue";
import Drawer from "@/components/Drawer.vue";
import Button from "@/components/inputs/Button.vue";
</script>

<template>
    <Hero
        title="Tinkering Components"
        intro="This is whatever I am currently working on"
    />

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
                <p class="Copy mt-4" v-for="index in 5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur voluptas, aut saepe unde nesciunt sunt ipsum! Magnam officiis veritatis molestiae debitis soluta hic accusamus, praesentium quod. A iusto sunt tempore?</p>
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

    <Section heading="Drawer">
        <Drawer
            :id="`demoDrawer0${index}`"
            v-for="index in 3"
            class="mt-6"
            :open="index === 1 ? '' : null"
        >
            <template #summary>
                <div class="Card Card--hover border-l-[4px] border-primary">
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

</template>

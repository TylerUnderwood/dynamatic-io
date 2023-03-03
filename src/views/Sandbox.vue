<script setup>
import Banner from "@/components/Banner.vue";
import Section from "@/components/Section.vue";
import DemoBlock from "@/components/DemoBlock.vue";
</script>

<script>
export default {
    data() {
        return {
            sectionRatio: 66,
            sectionReverse: false,
            demoBlockHeight: "7rem",
        }
    },
}
</script>

<template>
    <Banner title="Sandbox" intro="This is whatever I am currently working on"/>

    <section class="Section px-section my-2">
        <div class="wrapper">
            <div class="flex">
                <label
                    class="flex items-center gap-2"
                    for="toggle-section-reverse"
                >
                    <span class="order-2 Meta" style="font-size: 0.7rem;">
                        Reverse
                    </span>
                    <input
                        id="toggle-section-reverse"
                        name="section-reverse"
                        value="section-reverse"
                        type="checkbox"
                        @click="sectionReverse = !sectionReverse"
                    />
                </label>
            </div>
        </div>
    </section>
    <section class="Section mt-2">
        <div class="wrapper">
            <div class="flex">
                <div class="filler w-1/4 pr-3 border-l-2 text-right">
                    Section Ratio
                </div>
                <div class="w-1/2">
                    <input
                        type="range"
                        name="variable-section-ratio-selector"
                        label="Variable section ratio selector"
                        min="25"
                        max="75"
                        list="section-ratio-datalist"
                        v-model="sectionRatio"
                    />
                    <datalist
                        id="section-ratio-datalist"
                        name="Section ratio datalist"
                    >
                        <option value="25">25</option>
                        <option value="33">33</option>
                        <option value="50">50</option>
                        <option value="66">66</option>
                        <option value="75">75</option>
                    </datalist>
                </div>
                <div class="filler w-1/4 pl-3 border-r-2">
                    {{ Math.round(sectionRatio * 48) / 100 }}rem
                </div>
            </div>
        </div>
    </section>

    <section
        id="dynamic-section"
        class="Section"
        :class="{'Section--reverse':sectionReverse}"
        :style="`--section-ratio: ${sectionRatio*.01};`"
    >
        <div class="Section__column py-8 bg-secondary" data-theme="dark">
            <div class="Section__block px-section">
                <div class="Section__wrap px-section">
                    <DemoBlock :height="demoBlockHeight">
                        <span class="Meta">Demo Block First</span>
                    </DemoBlock>
                </div>
            </div>
        </div>
        <div class="Section__column py-8">
            <div class="Section__block px-section">
                <div class="Section__wrap px-section">
                    <DemoBlock :height="demoBlockHeight">
                        <span class="Meta">Demo Block Last</span>
                    </DemoBlock>
                </div>
            </div>
        </div>
    </section>

    <section class="px-section">
        <div class="wrapper flex">
            <div :style="`width: ${sectionRatio}%`">
                <div class="bg-offset border-x-2 text-center p-1">
                    {{ sectionRatio }}%
                </div>
            </div>
            <div :style="`width: ${100 - sectionRatio}%`">
                <div class="bg-offset border-x-2 text-center p-1">
                    {{ 100 - sectionRatio }}%
                </div>
            </div>
        </div>
    </section>
</template>

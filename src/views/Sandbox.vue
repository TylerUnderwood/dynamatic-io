<script setup>
import Banner from "@/components/Banner.vue";
import Section from "@/components/Section.vue";
</script>

<script>
export default {
    data() {
        return {
            sectionRatio: 66,
        }
    },
}
</script>

<template>
    <Banner title="Sandbox" intro="This is whatever I am currently working on"/>

    <section class="Section px-section my-2">
        <div class="wrapper">
            <input
                type="range"
                name="variable-section-ratio-selector"
                label="Variable section ratio selector"
                max="100"
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
    </section>

    <section class="Section Section--reverse mb-8" :style="`--section-ratio: ${sectionRatio*.01};`">
        <div class="Section__column py-8 bg-secondary" data-theme="dark">
            <div class="Section__block px-section">
                <div class="Section__wrap px-section bg-primary">
                    <p>lsfnveofin weon orge</p>
                    <ul class="List List--bullet List--white mt-4">
                        <li class="List__item" v-for="index in 3" :key="index">item {{ index }}</li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="Section__column py-8">
            <div class="Section__block px-section">
                <div class="Section__wrap px-section">
                    ooinwefov inego
                </div>
            </div>
        </div>
    </section>
</template>

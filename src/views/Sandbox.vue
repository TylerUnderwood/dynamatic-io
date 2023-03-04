<script setup>
import Banner from "@/components/Banner.vue";
import Section from "@/components/Section.vue";
import DemoBlock from "@/components/DemoBlock.vue";
</script>

<script>
export default {
    data() {
        return {
            sectionReverse: false,
            sectionWrap: '48',
            sectionRatio: 66,
            sectionWrapLeft: '',
            sectionWrapRight: '',
            demoBlockHeight: "7rem",
            sectionDifference: '',
        }
    },

    methods: {
        getPropertyValueById: ( id, property ) => {
            const section = document.getElementById(id);
            return getComputedStyle(section).getPropertyValue(property);
        },

        updatePropertyData() {
            const id = 'dynamic-section-column-first';
            this.sectionWrap = this.getPropertyValueById(id, '--section-wrap');
            this.sectionWrapLeft = this.getPropertyValueById(id, '--section-wrap-left');
            this.sectionWrapRight = this.getPropertyValueById(id, '--section-wrap-right');
            this.sectionDifference = this.getPropertyValueById(id, '--section-difference');
        },

        trimProperty( property ) {
            return property.replace(/\s\s+/g, ' ').trim();
        },

        toggleSectionReverse() {
            this.updatePropertyData();
            this.sectionReverse = !this.sectionReverse;
        },
    },

    computed: {
        calcSectionWrap() {
            return this.trimProperty( this.sectionWrap );
        },
        calcSectionWrapNum() {
            return Number(this.sectionWrap.match(/\d/g).join(""));
        },
        calcSectionRatio() {
            return Math.round(this.sectionRatio) / 100;
        },
        // wrap left
        calcSectionWrapLeft() {
            return this.trimProperty( this.sectionWrapLeft );
        },
        calcSectionWarpLeftNum() {
            return Math.round(this.sectionRatio * this.calcSectionWrapNum) / 100;
        },
        //wrap right
        calcSectionWrapRight() {
            return this.trimProperty( this.sectionWrapRight );
        },
        calcSectionWrapRightNum() {
            return Math.round((100 - this.sectionRatio) * this.calcSectionWrapNum) / 100;
        },
        calcSectionDifference() {
            return this.trimProperty( this.sectionDifference );
        },
    },

    mounted() {
        this.updatePropertyData();
    }
}
</script>

<template>
    <Banner title="Sandbox" intro="This is whatever I am currently working on"/>

    <section class="Section px-section my-section mb-0">
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
            <div class="flex mt-2">
                <div class="filler w-1/4 pr-3 border-l-2 border-muted text-right">
                    {{ calcSectionWarpLeftNum }}rem
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
                        @change="updatePropertyData()"
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
                <div class="filler w-1/4 pl-3 border-r-2 border-muted">
                    {{ calcSectionWrapRightNum }}rem
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
        <div
            id="dynamic-section-column-first"
            class="Section__column bg-stripes-secondary py-8"
            data-theme="dark"
        >
            <div class="Section__block px-section">
                <div class="Section__wrap px-section">
                    <DemoBlock :height="demoBlockHeight">
                        <span class="Meta">Demo Block First</span>
                    </DemoBlock>
                </div>
            </div>
        </div>
        <div class="Section__column mt-8 md:mt-0 md:py-8">
            <div class="Section__block px-section">
                <div class="Section__wrap px-section">
                    <DemoBlock :height="demoBlockHeight">
                        <span class="Meta">Demo Block Last</span>
                    </DemoBlock>
                </div>
            </div>
        </div>
    </section>

    <section class="px-section my-section mt-0">
        <div class="wrapper">
            <div class="flex">
                <div :style="`width: ${sectionRatio}%`">
                    <div class="bg-offset border-x-2 border-muted text-center p-1">
                        {{ sectionRatio }}%
                    </div>
                </div>
                <div :style="`width: ${100 - sectionRatio}%`">
                    <div class="bg-offset border-x-2 border-muted text-center p-1">
                        {{ 100 - sectionRatio }}%
                    </div>
                </div>
            </div>
            <div class="mt-4">
                <code class="Code w-full">
<pre class="overflow-auto">
--section-wrap: {{ calcSectionWrap }};
--section-ratio: {{ calcSectionRatio }};
--section-wrap-left: {{ calcSectionWrapLeft }};
--section-wrap-right: {{ calcSectionWrapRight }};
--section-difference: {{ calcSectionDifference }};
</pre>
                </code>
            </div>
        </div>
    </section>
</template>

<style>
.bg-stripes-secondary {
    background-color: #818cf81a;
    background-image: linear-gradient(135deg,#6366f180 10%,transparent 0,transparent 50%,#6366f180 0,#6366f180 60%,transparent 0,transparent);
    background-size: 6px 6px;
}
</style>

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
            sectionWrap: 48,
            sectionRatio: 66,
            demoBlockHeight: "7rem",
            topBlocks: 1,
            bottomBlocks: 1,
        }
    },

    methods: {
        changeWrapperWidth() {
            document.documentElement.style.setProperty('--wrapper-page', `${this.sectionWrap}rem`);
        },
    },

    computed: {
        sectionWrapLeft() {
            return this.sectionWrap * this.sectionRatio;
        },
        sectionWrapRight() {
            return this.sectionWrap * (100 - this.sectionRatio);
        },
        sectionWrapDiff() {
            return this.sectionWrapLeft - this.sectionWrapRight;
        },
        sectionWrapValue() {
            return this.sectionWrap + "rem";
        },
        sectionRatioValue() {
            return (this.sectionRatio / 100);
        },
        sectionWrapLeftValue() {
            return (this.sectionWrapLeft / 100) + "rem";
        },
        sectionWrapRightValue() {
            return (this.sectionWrapRight / 100) + "rem";
        },
        sectionWrapDiffValue() {
            return (this.sectionWrapDiff / 100) + "rem";
        },
    },

    mounted() {
        this.sectionWrap = Number(
            getComputedStyle(document.documentElement)
                .getPropertyValue('--wrapper-page')
                .match(/\d/g)
                .join("")
        );
    }
}
</script>

<template>
    <Banner title="Sandbox" intro="This is whatever I am currently working on"/>

    <section class="Section px-section my-section mb-0">
        <div class="Section__wrap">
            <div class="flex justify-between gap-4">
                <div class="block">
                    <label
                        class="flex items-center gap-2"
                        for="top-blocks-number"
                    >
                        <div>
                            <input
                                id="top-blocks-number"
                                class="Field Field--small"
                                name="Top blocks number"
                                type="number"
                                min="1"
                                max="5"
                                v-model="topBlocks"
                            />
                        </div>
                    </label>
                </div>
                <div class="flex gap-4">
                    <label
                        class="flex items-center gap-2"
                        for="toggle-section-reverse"
                    >
                        <span class="Meta" style="font-size: 0.7rem;">
                            Reverse
                        </span>
                        <input
                            id="toggle-section-reverse"
                            name="section-reverse"
                            type="checkbox"
                            @click="sectionReverse = !sectionReverse"
                        />
                    </label>
                    <label
                        class="flex items-center gap-2"
                        for="page-wrapper-number"
                    >
                        <span class="Meta" style="font-size: 0.7rem;">
                            Wrapper
                        </span>
                        <div>
                            <input
                                id="page-wrapper-number"
                                class="Field Field--small"
                                name="Page wrapper number"
                                type="number"
                                min="32"
                                max="64"
                                v-model="sectionWrap"
                                @input="changeWrapperWidth()"
                            />
                        </div>
                    </label>
                </div>
                <div class="block">
                    <label
                        class="flex items-center gap-2"
                        for="bottom-blocks-number"
                    >
                        <div>
                            <input
                                id="bottom-blocks-number"
                                class="Field Field--small"
                                name="Bottom blocks number"
                                type="number"
                                min="1"
                                max="5"
                                v-model="bottomBlocks"
                            />
                        </div>
                    </label>
                </div>
            </div>
            <div class="flex mt-2">
                <div class="filler w-1/4 pr-3 border-l-2 border-muted text-right">
                    {{ sectionWrapLeftValue }}
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
                <div class="filler w-1/4 pl-3 border-r-2 border-muted">
                    {{ sectionWrapRightValue }}
                </div>
            </div>
        </div>
    </section>

    <section
        id="dynamic-section"
        class="Section"
        :class="{'Section--reverse':sectionReverse}"
        :style="`--section-ratio: ${sectionRatio / 100};`"
    >
        <div
            class="Section__column bg-stripes-secondary py-8"
            data-theme="dark"
        >

            <div
                class="Section__block px-section"
                :class="{'mt-4':index!=0}"
                v-for="(block, index) in topBlocks"
            >
                <div class="Section__wrap px-section">
                    <DemoBlock :height="demoBlockHeight">
                        <span class="Meta">Demo Block Top</span>
                    </DemoBlock>
                </div>
            </div>

        </div>
        <div
            class="Section__column mt-8 md:mt-0 md:py-8"
        >

            <div
                class="Section__block px-section"
                :class="{'mt-4':index!=0}"
                v-for="(block, index) in bottomBlocks"
            >
                <div class="Section__wrap px-section">
                    <DemoBlock :height="demoBlockHeight">
                        <span class="Meta">Demo Block Bottom</span>
                    </DemoBlock>
                </div>
            </div>

        </div>
    </section>

    <section class="Section px-section my-section mt-0">
        <div class="Section__wrap">
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
            <details class="mt-4">
                <summary class="Meta mb-0">Meta</summary>
                <code class="Codeblock w-full">
<pre>
sectionWrap: {{ sectionWrapValue }};
sectionRatio: {{ sectionRatioValue }};
sectionWrapLeft: {{ sectionWrapLeftValue }};
sectionWrapRight: {{ sectionWrapRightValue }};
sectionWrapDiff: {{ sectionWrapDiffValue }};
</pre>
                </code>
            </details>
        </div>
    </section>

    <section class="Section my-8 px-section">
        <div class="Section__wrap">
            <code class="Codeblock">
<pre>
&lt;section
    class="Section{{ sectionReverse ? ' Section--reverse' : null }}"
    style="--section-ratio: {{ sectionRatio / 100 }}"
&gt;
    &lt;div class="Section__column bg-blue py-8"&gt;

        &lt;div class="Section__block px-section"&gt;
            &lt;div class="Section__wrap md:px-section"&gt;
                &lt;!-- CONTENT --&gt;
            &lt;/div&gt;
        &lt;/div&gt;

    &lt;/div&gt;
    &lt;div class="Section__column py-8"&gt;

        &lt;div class="Section__block px-section"&gt;
            &lt;div class="Section__wrap md:px-section"&gt;
                &lt;!-- CONTENT --&gt;
            &lt;/div&gt;
        &lt;/div&gt;

    &lt;/div&gt;
&lt;/section&gt;
</pre>
            </code>
        </div>
    </section>

    <section class="Section my-8 px-section">
        <div class="Section__wrap">
            <code class="Codeblock">
<pre>
&lt;section class="Section"&gt;
    &lt;div class="Section__wrap"&gt;

        &lt;div style="width: {{ sectionRatio }}%"&gt;
            &lt;!-- CONTENT --&gt;
        &lt;div/&gt;

        &lt;div style="width: {{ 100 - sectionRatio }}%"&gt;
            &lt;!-- CONTENT --&gt;
        &lt;div/&gt;

    &lt;/div&gt;
&lt;/section&gt;
</pre>
            </code>
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

<script setup>
import Banner from "@/components/Banner.vue";
import Section from "@/components/Section.vue";
</script>

<script>
export default {
    data() {
        return {
            sectionReverse: false,
            sectionWrap: 48,
            sectionRatio: 66,
            demoBlockHeight: "8rem",
            topBlocks: 1,
            bottomBlocks: 1,
        }
    },

    methods: {
        changeWrapperWidth() {
            document.documentElement.style.setProperty('--max-w-page', `${this.sectionWrap}rem`);
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
                .getPropertyValue('--max-w-page')
                .match(/\d/g)
                .join("")
        );
    }
}
</script>

<template>
    <Banner
        title="Section"
        intro="This is a showcase of the .Section component"
    />

    <section class="Section px-page my-section mb-0">
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
                        <span class="Meta lhc" style="font-size: 0.7rem;">
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
                        <span class="Meta lhc" style="font-size: 0.7rem;">
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
                        <span class="Meta lhc" style="font-size: 0.7rem;">
                            rem
                        </span>
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
                <div class="filler w-1/4 pr-3 border-l-2 border-muted"></div>
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
                <div class="filler w-1/4 pl-3 border-r-2 border-muted"></div>
            </div>
        </div>
    </section>

    <section class="Section px-page">
        <div class="Section__wrap">
            <div class="flex w-full">
                <div :style="`width: ${sectionRatio}%`">
                    <div class="bg-offset border-l-2 border-r-1 border-muted text-center p-1">
                        {{ sectionRatio }}%
                    </div>
                </div>
                <div :style="`width: ${100 - sectionRatio}%`">
                    <div class="bg-offset border-l-1 border-r-2 border-muted text-center p-1">
                        {{ 100 - sectionRatio }}%
                    </div>
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
            class="Section__column bg-primary py-8"
        >

            <div
                class="Section__block px-page"
                :class="{'mt-4':index!=0}"
                v-for="(block, index) in topBlocks"
            >
                <div class="Section__wrap md:px-page">
                    <div
                        class="SectionDemoBlock bg-base"
                        :style="`height: ${demoBlockHeight}`"
                        data-scheme="body"
                    >
                        <div class="Block">
                            <span class="Meta lhc">Top Block</span>
                            <br class="break" style="font-size: 0.4rem;">
                            <code class="Code">{{ sectionWrapLeftValue }}</code>
                        </div>
                    </div>
                </div>
            </div>

        </div>
        <div
            class="Section__column mt-8 md:mt-0 md:py-8"
        >

            <div
                class="Section__block px-page"
                :class="{'mt-4':index!=0}"
                v-for="(block, index) in bottomBlocks"
            >
                <div class="Section__wrap md:px-page">
                    <div
                        class="SectionDemoBlock bg-primary"
                        :style="`height: ${demoBlockHeight}`"
                        data-scheme="dark"
                    >
                        <div class="Block">
                            <span class="Meta lhc">Bottom Block</span>
                            <br class="break" style="font-size: 0.4rem;">
                            <code class="Code">{{ sectionWrapRightValue }}</code>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </section>

    <section class="Section">
        <div class="flex w-full">
            <div :style="`width: ${sectionRatio}%`">
                <div class="bg-offset border-l-2 border-r-1 border-muted text-center p-1">
                    {{ sectionRatio }}vw
                </div>
            </div>
            <div :style="`width: ${100 - sectionRatio}%`">
                <div class="bg-offset border-l-1 border-r-2 border-muted text-center p-1">
                    {{ 100 - sectionRatio }}wv
                </div>
            </div>
        </div>
    </section>

    <section class="Section my-8 px-page">
        <div class="Section__wrap">
            <details>
                <summary class="mb-0"><strong>Meta</strong></summary>
                <div class="flex">
                    <code class="Codeblock w-1/2">
<pre>
sectionWrap: {{ sectionWrapValue }},
sectionRatio: {{ sectionRatioValue }},
sectionWrapLeft: {{ sectionWrapLeftValue }},
sectionWrapRight: {{ sectionWrapRightValue }},
sectionWrapDiff: {{ sectionWrapDiffValue }},
</pre>
                    </code>
                    <code class="Codeblock w-1/2">
<pre>
:root {
    --max-w-page: <span style="color: red;">{{ sectionWrap }}rem;</span>
    --space-page: 32px;
}
</pre>
                    </code>
                </div>
            </details>
            <details>
                <summary class="mb-0"><strong>Section Split HTML</strong></summary>
                <div class="flex">
                    <code class="Codeblock w-full">
<pre>
&lt;section
    class="Section<span style="color: red;">{{ sectionReverse ? ' Section--reverse' : null }}</span>"
    style="--section-ratio: <span style="color: red;">{{ sectionRatio / 100 }}</span>"
&gt;
    &lt;div class="Section__column py-8 bg-blue"&gt;

        &lt;div class="Section__block px-page"&gt;
            &lt;div class="Section__wrap md:px-page"&gt;
                &lt;!-- CONTENT --&gt;
            &lt;/div&gt;
        &lt;/div&gt;

    &lt;/div&gt;
    &lt;div class="Section__column py-8"&gt;

        &lt;div class="Section__block px-page"&gt;
            &lt;div class="Section__wrap md:px-page"&gt;
                &lt;!-- CONTENT --&gt;
            &lt;/div&gt;
        &lt;/div&gt;

    &lt;/div&gt;
&lt;/section&gt;
</pre>
                    </code>
                </div>
            </details>
            <details>
                <summary class="mb-0"><strong>Section Full HTML</strong></summary>
                <div class="flex">
                    <code class="Codeblock w-full">
<pre>
&lt;section class="Section"&gt;
    &lt;div class="Section__wrap"&gt;

        &lt;div style="width: <span style="color: red;">{{ sectionRatio }}%</span>"&gt;
            &lt;!-- CONTENT --&gt;
        &lt;div/&gt;

        &lt;div style="width: <span style="color: red;">{{ 100 - sectionRatio }}%</span>"&gt;
            &lt;!-- CONTENT --&gt;
        &lt;div/&gt;

    &lt;/div&gt;
&lt;/section&gt;
</pre>
                    </code>
                </div>
            </details>
        </div>
    </section>

    <section class="Section flex-row my-section bg-stripes-secondary">
        <div
            class="space bg-primary"
            style="font-size: var(--space-page)"
        ></div>
        <div class="Section__wrap bg-white">
            <h2 class="Heading lhc">
                This is a normal section
            </h2>
            <p class="Copy lhc mt-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit asperiores sit assumenda? Sed, impedit facere velit quis laboriosam odio temporibus tenetur a omnis nam, expedita possimus consectetur dicta. Corrupti, dicta!
            </p>
        </div>
        <div
            class="space bg-primary"
            style="font-size: var(--space-page)"
        ></div>
    </section>
</template>

<style>
.SectionDemoBlock {
    flex: 1 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 8px;
    padding: 2rem;
    text-align: center;
}
</style>

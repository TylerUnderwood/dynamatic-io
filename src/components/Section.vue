<script setup>
import { v4 as uuid } from 'uuid';
import { useTableOfContentsStore } from '@/stores/TableOfContents';
</script>

<script>
export default {
    props: {
        id: String,
        heading: String,
        classBase: {
            type: String,
            default: 'px-page my-section',
        },
        classWrap: String,
        wrapWidth: {
            type: String,
            default: null,
        },
    },

    data() {
        return {
            tableOfContents: useTableOfContentsStore(),
        }
    },

    computed: {
        computedId() {
            let id;

            // if no id and has heading, make id from heading
            if (this.id == null && this.heading != null) {
                id = this.heading.trim().toLowerCase().split(' ').join('-');
            // if no heading and no id
            } else if (this.id == null) {
                id = uuid();
            } else {
                id = this.id;
            }

            return id;
        },
        sectionId() {
            return 'section-' + this.computedId;
        },
        headingId() {
            return this.computedId + '-heading';
        }
    },

    mounted() {
        this.tableOfContents.add({
            id: this.sectionId,
            name: this.heading,
        });
    },

    beforeUnmount() {
        this.tableOfContents.remove(this.sectionId);
    },
}
</script>

<template>
    <section
        :id="sectionId"
        class="Section"
        :class="classBase"
        :aria-labelledby="heading != null ? headingId : null"
    >
        <div
            class="Section__wrap"
            :class="classWrap"
            :style="wrapWidth != null ? `--section-wrap: ${wrapWidth};` : null"
        >
            <h2
                :id="headingId"
                class="Heading h2"
                v-if="heading"
            >
                {{ heading }}
            </h2>

            <slot/>

        </div>
    </section>
</template>

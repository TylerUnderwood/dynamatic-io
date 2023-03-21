<script>
export default {
    props: {
        id: String,
        classBase: {
            type: String,
            default: 'my-section',
        },
        reverse: {
            type: Boolean,
            default: false,
        },
        ratio: {
            type: Number,
            default: 50,
        },
        classTop: {
            type: String,
            default: '',
        },
        classBot: {
            type: String,
            default: 'mt-8 md:mt-0',
        },
    },
}
</script>

<template>
    <section
        :id="id"
        :class="[
            'Section',
            classBase,
            {
                'Section--reverse': reverse,
            },
        ]"
        :style="`--section-ratio: ${ratio / 100};`"
    >
        <div
            :class="[
                'Section__column',
                classTop,
            ]"
        >

            <slot name="top"/>

        </div>

        <div
            :class="[
                'Section__column',
                classBot,
            ]"
        >

            <slot name="bot"/>

        </div>
    </section>
</template>

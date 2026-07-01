<script>
export default {
    props: {
        classBase: {
            type: String,
            default: 'px-page',
        },
        classWrap: {
            type: String,
            default: 'md:px-page',
        },
        wrapWidth: {
            type: String,
            default: null,
        },
    },
}
</script>

<template>
    <div
        :class="[
            'Section__block',
            classBase,
        ]"
        :style="wrapWidth != null ? `--section-wrap: ${wrapWidth};` : null"
    >
        <div
            :class="[
                'Section__wrap',
                classWrap,
            ]"
        >

            <slot />

        </div>
    </div>
</template>

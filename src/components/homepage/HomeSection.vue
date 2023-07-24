<script setup>
import SectionSplit from "@/components/SectionSplit.vue";
import SectionBlock from "@/components/SectionBlock.vue";
</script>

<script>
export default {
    props: {
        reverse: {
            type: Boolean,
            default: false,
        },
        heading: {
            type: String,
            default: '',
        },
        copy: {
            type: String,
            default: '',
        },
        link: {
            type: String,
            default: '',
        },
        linkText: {
            type: String,
            default: '',
        },
    },
    computed: {
        topClass() {
            if(this.reverse) {
                return "md:rounded-bl-[2.4rem]"
            } else {
                return "md:rounded-tr-[2.4rem]"
            }
        },
        botClass() {
            if(this.reverse) {
                return "HomeSectionColLeft md:rounded-[2.4rem]"
            } else {
                return "HomeSectionColRight md:rounded-[2.4rem]"
            }
        },
        gradientAngle() {
            if(this.reverse) {
                return "210deg"
            } else {
                return "30deg"
            }
        },
        archClass() {
            if(this.reverse) {
                return "Arch--tr top-0 right-0"
            } else {
                return "Arch--bl bottom-0 left-0"
            }
        },
    }
}
</script>

<template>

    <SectionSplit
        :reverse="reverse"
        classBase="m-0"
        :classTop="`bg-primary ${topClass} overflow-hidden `"
        :classBot="`relative py-8 justify-center ${botClass}`"
    >
        <template #top>
            <SectionBlock
                classBase="p-0 flex-1"
                classWrap="p-0"
                data-scheme="dark"
            >
                <div
                    class="flex-1"
                    :style="`
                        min-height: 96px;
                        background: linear-gradient(
                            ${gradientAngle},
                            rgba(255,255,255,0) 60%,
                            var(--theme-primary-up) 100%)
                        ;
                    `"
                ></div>
            </SectionBlock>
        </template>
        <template #bot>
            <div
                class="Arch absolute text-primary text-[2.4rem] hidden md:block"
                :class="archClass"
            ></div>
            <SectionBlock>
                <div class="Block Rhythm text-center md:text-left">
                    <h2 class="Heading">
                        {{ heading }}
                    </h2>
                    <p class="Copy mx-auto md:mx-unset">
                        {{ copy }}
                    </p>
                    <router-link :to="link" class="Button mt-4" data-size="small">
                        <span class="Button__text Meta">
                            {{ linkText }}
                        </span>
                    </router-link>
                </div>
            </SectionBlock>
        </template>
    </SectionSplit>

</template>

<style>
.HomeSectionColLeft,
.HomeSectionColRight {
    position: relative;
}
.HomeSectionColLeft::before,
.HomeSectionColRight::before {
    position: absolute;
    inset: 0;
    content: '';
}
.HomeSectionColLeft > .Section__block,
.HomeSectionColRight > .Section__block {
    position: relative;
}
@media (min-width: 767px) {
    .HomeSectionColLeft {
        box-shadow: inset -24px 24px 12px -24px rgba(0,0,0,0.5);
    }
    .HomeSectionColRight {
        box-shadow: inset 24px -24px 12px -24px rgba(0,0,0,0.5);
    }
    .HomeSectionColLeft::before {
        background: linear-gradient(75deg, var(--theme-base) 90%, rgba(255,255,255,0) 100%);
    }
    .HomeSectionColRight::before {
        background: linear-gradient(255deg, var(--theme-base) 90%, rgba(255,255,255,0) 100%);
    }
}
</style>

<script setup>
import SectionSplit from "@/components/section/SectionSplit.vue";
import SectionBlock from "@/components/section/SectionBlock.vue";
</script>

<script>
export default {
    props: {
        isFirst: Boolean,
        isLast: Boolean,
        reverse: Boolean,
        heading: String,
        copy: String,
        link: String,
        linkText: String,
    },
    computed: {
        archClass() {
            if (this.reverse && !this.isFirst) {
                return "Arch--tr top-0 right-0"
            } else if (!this.reverse && !this.isLast) {
                return "Arch--bl bottom-0 left-0"
            } else {
                return "md:hidden"
            }
        },
    },
}
</script>

<template>

    <SectionSplit
        :reverse="reverse"
        :classBase="[
            'HomeSection',
            { 'HomeSection--first': isFirst },
            { 'HomeSection--last': isLast },
            'm-0',
        ]"
        classTop="HomeSection__top HomeSection__blockGradient bg-primary overflow-hidden"
        classBot="HomeSection__bot relative py-8 md:py-10 justify-center"
    >
        <template #top>
        </template>
        <template #bot>
            <div
                class="Arch absolute text-primary hidden md:block"
                :class="archClass"
                style="font-size: var(--section-radius);"
            ></div>
            <SectionBlock
                classWrap="md:px-12"
            >
                <div class="Block Rhythm text-center md:text-left">
                    <h2 class="Heading">
                        {{ heading }}
                    </h2>
                    <p class="Copy mx-auto md:mx-unset">
                        {{ copy }}
                    </p>
                    <router-link :to="link" class="Button mt-4" data-size="small">
                        <span class="Button__text Meta lhc">
                            {{ linkText }}
                        </span>
                    </router-link>
                </div>
            </SectionBlock>
        </template>
    </SectionSplit>

</template>

<style>
.HomeSection {
    --section-radius: 2.4rem;
}

.HomeSection__blockGradient {
    --gradient-angle: 180deg;
    min-height: 5rem;
    background: linear-gradient(
        var(--gradient-angle),
        var(--theme-primary) 66%,
        var(--theme-secondary) 100%)
    ;
}

@media (min-width: 768px) {
    .Section--forward .HomeSection__top {
        border-top-right-radius: var(--section-radius);
    }
    .Section--forward.HomeSection--last .HomeSection__top {
        border-bottom-right-radius: var(--section-radius);
    }
    .Section--reverse .HomeSection__top {
        border-bottom-left-radius: var(--section-radius);
    }
    .Section--reverse.HomeSection--first .HomeSection__top {
        border-top-left-radius: var(--section-radius);
    }
    .Section--forward .HomeSection__blockGradient {
        --gradient-angle: 20deg;
    }
    .Section--reverse .HomeSection__blockGradient {
        --gradient-angle: 200deg;
    }
}
</style>

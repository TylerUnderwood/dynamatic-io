<script>
export default {
  props: [
    'title',
    'intro',
    'pop'
  ]
}
</script>

<template>
    <section
        id="Hero"
        :class="['Hero', {'Hero--pop': pop}]"
        aria-labelledby="title"
        data-scheme="dark"
    >
        <div class="page-wrapper">
            <h1 id="title" class="Heading h1 Title lhc">
                {{ title }}
            </h1>
            <p class="Copy lhc mt-4" v-if="intro">
                {{ intro }}
            </p>
        </div>
    </section>
</template>

<style>
    @property --hp-hero-tilt {
        syntax: "<angle>";
        initial-value: 15deg;
        inherits: false;
    }

    @keyframes hp-hero-tilt {
        0% {
            --hp-hero-tilt: 15deg;
        }
        50% {
            --hp-hero-tilt: 75deg;
        }
        100% {
            --hp-hero-tilt: 15deg;
        }
    }

    .Hero {
        box-shadow: inset rgba(0, 0, 0, 0.24) 0px 3px 8px;
        padding: var(--space-page);
        background-color: var(--theme-primary);
        background: linear-gradient(
            var(--hp-hero-tilt),
            var(--theme-primary-base) 0%,
            var(--theme-primary) 40%,
            var(--theme-primary) 80%,
            var(--theme-secondary) 100%
        );
    }

    .Hero--pop {
        background: linear-gradient(
            var(--hp-hero-tilt),
            var(--theme-tertiary) 0%,
            var(--theme-primary) 40%,
            var(--theme-primary) 60%,
            var(--theme-secondary) 100%
        );
        animation-name: hp-hero-tilt;
        animation-duration: 6000ms;
        animation-timing-function: ease-in-out;
        animation-iteration-count: infinite;
    }
</style>

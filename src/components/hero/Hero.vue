<script>
export default {
  props: [
    'title',
    'intro'
  ]
}
</script>

<template>
    <section
        id="Hero"
        class="Hero"
        aria-labelledby="title"
        data-scheme="dark"
    >
        <div class="page-wrapper flex">
            <div class="Hero__content">
                <h1 id="title" class="Heading h1 Title lhc">
                    {{ title }}
                </h1>
                <p class="Copy lhc mt-4" v-if="intro">
                    {{ intro }}
                </p>
            </div>
        </div>
    </section>
</template>

<style>
    @property --hp-hero-tilt {
        syntax: "<angle>";
        initial-value: 30deg;
        inherits: false;
    }

    @keyframes hp-hero-tilt {
        0% {
            --hp-hero-tilt: 15deg;
        }
        50% {
            --hp-hero-tilt: 60deg;
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
            var(--theme-secondary) 0%,
            var(--theme-primary) 40%,
            var(--theme-primary) 60%,
            var(--theme-tertiary) 100%
        );
        overflow: clip;
        animation-name: hp-hero-tilt;
        animation-duration: 8000ms;
        animation-timing-function: ease-in-out;
        animation-iteration-count: infinite;
        animation: name duration timing-function delay iteration-count direction fill-mode;
    }
    .Hero__content {
        position: relative;
        z-index: 0;
    }
    .Hero__content::before {
        visibility: hidden;
        position: absolute;
        z-index: -1;
        inset: -20% -100%;
        translate: 0 33%;
        background: radial-gradient(ellipse, var(--theme-tertiary) 0%, transparent 80%);
        filter: blur(20px);
        content: '';
    }
</style>

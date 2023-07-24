<script>
import Logo from '../assets/icons/Logo.vue';

export default {
    data() {
        return {
            nav: [
                { url: "/about", name: "About" },
                { url: "/contact", name: "Contact" },
                { url: "/sandbox", name: "Sandbox" }
            ]
        };
    },

    components: { Logo }
}
</script>

<template>
    <header id="header" class="flex justify-between items-center p-4">
        <router-link to="/" class="Logo">
            <div class="Logo__icon">
                <Logo/>
            </div>
            <span class="Logo__text Heading">
                Dynamatic
            </span>
        </router-link>

        <div class="spacer filler"></div>

        <nav class="Nav">
            <ul class="Nav__list">
                <li class="Nav__item" v-for="item in nav">
                    <router-link
                        :to="item.url"
                        class="Link Nav__link"
                    >
                        <span class= "Meta">{{ item.name }}</span>
                    </router-link>
                </li>
            </ul>
        </nav>

        <div class="spacer"></div>

        <router-link
            to="/docs"
            class="Button border-0"
            data-shape="simple"
        >
            <span class="Button__text Meta">Docs</span>
        </router-link>
    </header>
</template>

<style>
.Logo {
    display: flex;
    align-items: center;
    gap: 0.8rem;
    padding: 1rem;
    margin: -1rem;
}

.Logo:hover,
.Logo:focus {
    background-color: var(--input-backdrop);
}

.Logo__icon {
    display: flex;
    font-size: 2rem;
    padding: 0.2em;
    margin: -0.2em;
}

.Logo__icon svg {
    display: block;
    width: 1em;
    height: 1em;
}

.Logo__text {
    display: none;
    text-transform: uppercase;
    font-size: 1rem;
    letter-spacing: 1px;
}

@media screen and (min-width: 767px) {
    .Logo__icon {
        font-size: 2.4rem;
    }
    .Logo__text {
        display: block;
    }
}
</style>

<script setup>
// type Link = { path: string; name: string };

const props = defineProps({
    links: Array,
});

const isExternal = (url) => url.startsWith('http');

/**
TODO: swap to this after updating vue to handle dynamic components v-bind:href/to

            <component
                :is="isExternal(item.link) ? 'a' : 'router-link'"
                class="Nav__link Link"
                :[isExternal(link.url) ? 'href' : 'to']="link.url"
                :target="isExternal(item.link) ? '_blank' : null"
            >
                <span class="Meta lhc">
                    {{ item.name }}
                </span>
            </component>
*/

console.log("SidebarNavItems.vue: links", props.links);
</script>

<template>
    <ul class="Nav__list flex-wrap lg:flex-col">
        <li
            class="Nav__item"
            v-for="(link, index) in links"
            :key="index"
        >
            <router-link
                class="Nav__link Link"
                :to="link.path"
                v-if="isExternal(link.path) === false"
            >
                <span class="Meta lhc">
                    {{ link.name }}
                </span>
            </router-link>
            <a
                class="Nav__link Link"
                :href="link.path"
                v-else
            >
                <span class="Meta lhc">
                    {{ link.name }}
                </span>
            </a>
        </li>
    </ul>
</template>

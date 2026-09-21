<script setup>
import SidebarNavItems from "@/components/SidebarNavItems.vue";
// type Link = { path: string; name: string };
// type Nav = { name: string; items: Link[] }[] | Link[];

const props = defineProps({
    heading: String,
    nav: Array,
});

const isCategoryList = props.nav[0]?.hasOwnProperty('items');

console.log("SidebarNav.vue: isCategoryList", props.nav, isCategoryList);
</script>

<template>
    <div class="Sidebar__nav">
        <span class="Heading text-sm uppercase lhc">
            {{ heading }}
        </span>
        <hr class="Line mt-3">
        <nav class="Nav mt-6">
            <template v-if="isCategoryList">
                <ul :for="(category, index) in nav" :key="index">
                    <li>
                        <span class="Meta lhc">
                            {{ category.name }}
                        </span>
                        <SidebarNavItems
                            :items="category.items"
                        />
                    </li>
                </ul>
            </template>
            <template v-else>
                <SidebarNavItems
                    :items="nav"
                />
            </template>
        </nav>
    </div>
</template>

<style>
    .Sidebar__nav {
        display: block;
    }
</style>

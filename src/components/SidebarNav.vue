<script>
export default {
    props: [
        'heading',
        'items',
        'isInternal'
    ],
}
</script>

<template>
    <div class="Sidebar__nav">
        <span class="Heading text-sm uppercase lhc">
            {{ heading }}
        </span>
        <hr class="Line mt-3">
        <nav class="Nav mt-6">
            <ul class="Nav__list flex-wrap lg:flex-col">
                <li
                    class="Nav__item"
                    v-for="(item, index) in items" :key="index"
                >
                    <router-link
                        class="Link Nav__link"
                        :to="item.link"
                        v-if="item.isInternal"
                    >
                        <span class="Meta lhc">
                            {{ item.name }}
                        </span>
                    </router-link>
                    <a
                        class="Link Nav__link"
                        :href="item.link"
                        v-else
                    >
                        <span class="Meta lhc">
                            {{ item.name }}
                        </span>
                    </a>

                </li>
            </ul>
        </nav>
    </div>
</template>

<style>
    .Sidebar__nav {
        display: block;
    }
</style>

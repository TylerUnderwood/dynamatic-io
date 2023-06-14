<script>
import Drawer from "@scripts/drawer";

export default {
    props: [
        'id',
        'open'
    ],

    beforeCreate() {
        window.Drawer = Drawer;
    },

    mounted() {
        new Drawer( this.id ).init();
    }
}
</script>

<template>
    <div class="Drawer" :drawer-part="id">
        <button :drawer-toggle="id" class="Drawer__summary w-full">
            <slot name="summary"></slot>
        </button>
        <div drawer :id="id" class="Drawer__content" :open="open">
            <slot name="content"></slot>
        </div>
    </div>
</template>

<style>
@import "@styles/components/Drawer.css";
</style>

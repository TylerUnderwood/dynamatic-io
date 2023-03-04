<script setup>
import { v4 as uuid } from 'uuid';
</script>

<script>
export default {
  props: [
    'height'
  ]
}
</script>

<template>
    <div
        :id="`demo-block-${uuid()}`"
        class="DemoBlock stripes"
        :style="`min-height: ${height};`"
        data-theme="dark"
    >
        <div class="DemoBlock__item">
            <slot/>
        </div>
    </div>
</template>

<style>
    .DemoBlock {
        flex: 1 0 auto;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 8px;
        /* outline: 2px dashed var(--theme-face);
        outline-offset: -3px; */
        background-color: var(--theme-primary);
        padding: 2rem;
    }

    .DemoBlock__item {
        position: relative;
        border-radius: 4px;
        padding: 4px;
        overflow: hidden;
    }

    .DemoBlock__item::before {
        position: absolute;
        inset: 0;
        background-color: var(--theme-primary);
        opacity: 0.8;
        content: "";
    }

    .DemoBlock__item > * {
        position: relative;
    }
</style>

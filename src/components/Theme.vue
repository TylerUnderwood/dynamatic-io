<script setup>
import { useThemeStore } from '@/stores/Theme';

useThemeStore().init();
</script>

<template>
    <noscript>Theme and Core</noscript>
</template>

<!-- <style lang="scss">
@import "@styles/theme/index.scss";
</style>
<style lang="scss">
@import "@styles/core/index.scss";
</style> -->
<style>
@import "dynamatic/dist/styles/theme.css";
@import "dynamatic/dist/styles/core.css";
@import "@styles/components/index.css";

html {
  font-size: var(--fluid-rem);
}

.wrapper {
    margin-left: auto;
    margin-right: auto;
    width: 100%;
    max-width: var(--max-w-page);
}
</style>

<script>
import theme from '@config/theme.json';
import { tokenBuilder } from "dynamatic";

export default {
  created() {
    document.getElementById('theme').innerHTML = tokenBuilder(theme);
  },
}
</script>

<template>
    <noscript>Theme and Core</noscript>
</template>

<style lang="scss">
@import "@styles/theme/index.scss";
</style>
<style lang="scss">
@import "@styles/core/index.scss";
</style>
<style>
@import "@styles/components/index.css";
</style>

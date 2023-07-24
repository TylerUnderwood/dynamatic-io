<script>
import theme from '@config/theme.json';
import { tokenCategories, tokensNative, tokenBuilder } from "dynamatic";

export default {
  created() {
    document.getElementById('theme').innerHTML = tokenBuilder(theme);

    console.log("00 - Theme", theme);
    console.log("01 - Token Categories", tokenCategories(theme));
    console.log("02 - Tokens Native", tokensNative(theme));
    console.log("03 - Token Builder", tokenBuilder(theme));
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

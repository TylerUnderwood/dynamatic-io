<template>
    <noscript>Tools and Utilities</noscript>
</template>

<style lang="scss">
@import "@styles/tools/index.scss";
</style>
<style>
@import "dynamatic/dist/styles/utilities/misc.css";
@import "@styles/utilities/index.css";

:root {
    --stripes-rgb: 0 0 0;
    --stripes-angle: -45deg;
    --stripes-opacity: 1;
    --stripes-size: 20px;
}

@keyframes slide {
    from { transform: translateX(0); }
    to { transform: translateX(var(--stripes-size)); }
}
</style>

<script setup>
const rawColors = {
    "red": "#ff0000",
    "orange": "#ff8000",
    "yellow": "#ffff00",
    "chartreuse": "#80ff00",
    "green": "#00ff00",
    "jade": "#00ff80",
    "cyan": "#00ffff",
    "azure": "#0080ff",
    "blue": "#0000ff",
    "purple": "#8000ff",
    "magenta": "#ff00ff",
    "fuchsia": "#ff0080",
    "white": "#ffffff",
    "off-white": "#f8f8f8",
    "light": "#eeeeee",
    "light-grey": "#c0c0c0",
    "grey": "#808080",
    "dark-grey": "#404040",
    "dark": "#333333",
    "off-black": "#202020",
    "black": "#000000",
}
</script>

<template>
    <div class="flex flex-wrap">
        <div v-for="color in rawColors" class="Block w-1/6 aspect-square flex-grow-0" :style="`background-color: ${color};`"></div>
    </div>
</template>

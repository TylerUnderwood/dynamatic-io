<script setup>
import { useThemeStore } from '@/stores/Theme';
import Toggle from './inputs/Toggle.vue';
// import Checkbox from './inputs/Checkbox.vue';

const themeStore = useThemeStore();
const selectThemeOptions = Object.keys(themeStore.list).map(themeId => ({
    value: themeId,
    label: themeId.charAt(0).toUpperCase() + themeId.slice(1),
}));
</script>

<template>
    <div id="settings" class="SettingsConsole">
        <div instant-transitions-exception>
            <label for="toggle-dark-mode" visually-hidden>
                Toggle Dark Mode
            </label>
            <Toggle
                id="toggle-dark-mode"
                name="Toggle Dark Mode"
                v-model="themeStore.isDarkMode"
            />
        </div>
        <div>
            <label for="select-theme" visually-hidden>
                Select Theme
            </label>
            <select
                id="select-theme"
                class="Field Field--small"
                name="Select Theme"
                v-model="themeStore.id"
            >
                <option 
                    v-for="themeOption in selectThemeOptions" 
                    :value="themeOption.value"
                    :key="themeOption.value"
                    :selected="themeOption.value === themeStore.id"
                >
                    {{ themeOption.label }}
                </option>
            </select>
        </div>
        <!--
        <label for="toggle-identify-guidelines" visually-hidden>
            Toggle Guidelines
        </label>
        <Checkbox
            id="toggle-identify-guidelines"
            name="Toggle Guidelines"
            label="Toggle Guidelines"
        />
        -->
    </div>
</template>

<style>
.SettingsConsole {
    position: fixed;
    top: unset;
    right: 0.5rem;
    bottom: 0.5rem;
    left: unset;
    display: flex;
    align-items: center;
    box-shadow: var(--shadow);
    border-radius: var(--round-sm);
    background-color: var(--theme-base);
    padding: 0.5em 0.5em 0.5em 1em;
    gap: 1em;
    font-size: 0.7rem;
}

[instant-transitions] {
    --input-timing: 0ms;
}
[instant-transitions] [instant-transitions-exception] {
    --input-timing: 300ms;
}
</style>

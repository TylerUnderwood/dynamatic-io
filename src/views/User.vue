<script setup>
import { ref } from 'vue';
import { useThemeStore } from '@/stores/Theme';
// components
import Hero from "@/components/hero/Hero.vue";
import Section from "@/components/section/Section.vue";
import Checkbox from '@/components/inputs/Checkbox.vue';

const theme = useThemeStore();

const userSchemePreference = ref(theme.userSchemePreference);
const saveTempSchemeValue = ref(localStorage.getItem('saveTempSchemeValue') === 'true');
const handleSaveTempSchemeValueChange = () => {
    localStorage.setItem('saveTempSchemeValue', saveTempSchemeValue.value);
};
</script>

<template>
    <Hero title="User"/>

    <Section heading="Settings">
        <form action="null" id="settings" class="flex flex-col gap-6 mt-5">
            <label for="default-scheme-preference" class="flex gap-3 items-center justify-start">
                <span class="Meta">Default Scheme Preference</span>
                <div>
                    <select
                        id="default-scheme-preference"
                        name="default-scheme-preference"
                        class="Field"
                        v-model="userSchemePreference"
                        @change="theme.setUserSchemePreference(userSchemePreference)"
                    >
                        <option value="system">System</option>
                        <option value="light">Light</option>
                        <option value="dark">Dark</option>
                        <option value="nopreference">No Preference</option>
                    </select>
                </div>
            </label>
            <div>
                <label for="save-temp-scheme-value" class="flex gap-3 items-center justify-start">
                    <span class="Meta">Save Temporary Scheme Value</span>
                    <Checkbox
                        id="save-temp-scheme-value"
                        v-model="saveTempSchemeValue"
                        @change="handleSaveTempSchemeValueChange"
                    />
                </label>
                <p class="Copy mt-3" style="font-size: 0.8rem;">
                    Current scheme (<i>using the bottom right toggle</i>) will save for 24 hours, and will reset to the user scheme preference after that time.
                </p>
            </div>
        </form>
    </Section>
</template>

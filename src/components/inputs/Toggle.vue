<script setup>
defineProps({
    id: String,
    name: String,
    label: String,
    value: String,
    size: {
        type: String,
        default: 'text-lg',
    },
  });

defineOptions({ inheritAttrs: false });

const model = defineModel()
</script>

<template>
    <label :class="`Toggle ${size}`" :for="id">
        <input
            class="Toggle__input"
            type="checkbox"
            :id="id"
            :name="name"
            :label="label"
            :value="value"
            v-model="model"
            v-bind="$attrs"
        />

        <div class="Toggle__switch"></div>
    </label>
</template>

<style>
@import "@styles/components/Toggle.css";
</style>

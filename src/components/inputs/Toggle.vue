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

.Toggle__switch {
    border-width: 0;
}
.Toggle__switch::before {
    inset: 0;
    background-repeat: no-repeat;
    background-image:
        linear-gradient(
            to right,
            var(--theme-secondary) 0%,
            var(--theme-primary) 50%,
            var(--theme-primary) 100%
        ),
        linear-gradient(
            to left,
            var(--theme-secondary) 0%,
            var(--theme-primary) 50%,
            var(--theme-primary) 100%
        );
    background-position: left, right;
    background-size: 0% 100%, 100% 100%;
    transition-property: background;
}
.Toggle__switch::after {
    transform: unset;
    translate: 0;
    margin: var(--toggle-border-width);
    width: unset;
}
input:checked + .Toggle__switch::before {
    background-size: 100% 100%, 0% 100%;
}
input:checked + .Toggle__switch::after {
    transform: unset;
    translate: calc(-100% - (var(--toggle-border-width) * 2));
}
</style>

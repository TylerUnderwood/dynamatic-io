<script>
export default {
  props: {
    id: String,
    name: String,
    label: String,
    size: {
        type: String,
        default: 'text-lg',
    },
  }
}
</script>

<template>
    <label :class="`Toggle ${size}`" :for="id">
        <input
            class="Toggle__input"
            type="checkbox"
            :id="id"
            :name="name"
            :label="label"
        />

        <div class="Toggle__switch"></div>
    </label>
</template>

<style>
@import "@styles/components/Toggle.css";
</style>

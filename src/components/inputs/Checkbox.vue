<script>
export default {
  props: {
    id: String,
    name: String,
    label: String,
    value: String,
    size: {
        type: String,
        default: 'text-lg',
    },
  }
}
</script>

<template>
    <label :class="`Checkbox ${size}`" :for="id">
        <input
            class="Checkbox__input"
            type="checkbox"
            :id="id"
            :name="name"
            :label="label"
            :value="value"
        />

        <div class="Checkbox__box">
            <svg class="Checkbox__icon" width="20" height="20" viewBox="0 0 20 20">
                <polyline class="Checkbox__polyline" points="4 11 8 15 16 6"></polyline>
            </svg>
        </div>
    </label>
</template>

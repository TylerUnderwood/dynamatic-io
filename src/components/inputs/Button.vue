<script>
export default {
  props: {
    text: String,
    type: {
        type: String,
        default: 'primary',
    },
    size: {
        type: String,
        default: 'default',
    },
    shape: {
        type: String,
        default: 'default',
    },
    theme: {
        type: String,
        default: 'default',
    },
  }
}
</script>

<template>
    <button
        class="Button"
        :data-type="type"
        :data-size="size"
        :data-shape="shape"
        :data-theme="theme"
    >
        <div class="Button__text Meta lhc">
            {{ text }}
        </div>
    </button>
</template>

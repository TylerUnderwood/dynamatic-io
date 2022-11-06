<script>
export default {
    props: {
        id: String,
    },
};
</script>

<template>
    <label :for="id" class="Button Submit relative">
        <input :id="id" class="inset opacity-0" type="submit" />
        <span class="Button__text Meta">submit</span>
    </label>
</template>

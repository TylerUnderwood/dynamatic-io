<script>
export default {
    props: {
        id: String,
    },
};
</script>

<template>
    <label :for="id" class="Button Submit relative">
        <input :id="id" class="absolute inset-0 opacity-0 w-full" type="submit" />
        <span class="Button__text Meta lhc">submit</span>
    </label>
</template>

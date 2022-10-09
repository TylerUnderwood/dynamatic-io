<script>
export default {
  props: [
    'id',
    'heading'
  ],
  data() {
    return {
      labelledby: this.id + '-heading'
    }
  }
}
</script>

<template>
    <section
        :id="id"
        class="Section gutter margins"
        :aria-labelledby="labelledby"
        identify-item
    >
        <div class="wrapper" identify-item="left">
            <h2 :id="labelledby" v-if="heading" class="Heading h2">
                {{ heading }}
            </h2>
            <slot/>
        </div>
    </section>
</template>

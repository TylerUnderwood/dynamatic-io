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
        class="gutter margins"
        :aria-labelledby="labelledby"
    >
        <div class="wrapper">
            <h2 :id="labelledby" v-if="heading" class="Heading h2">
                {{ heading }}
            </h2>
            <slot/>
        </div>
    </section>
</template>

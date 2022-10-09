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
    identify-item="component"
  >
    <div class="Section__wrap wrapper" identify-item="component right">
      <h2 :id="labelledby" v-if="heading" class="Heading h2">
        {{ heading }}
      </h2>

      <slot/>

    </div>
  </section>
</template>

<style>
  [identify] .Section[identify-item] {
    counter-increment: identify-section;
  }
  [identify] .Section[identify-item]::before {
    content: "Section " counter(identify-section) !important;
  }
  [identify] .Section__wrap[identify-item]::before {
    content: "Section Wrap" !important;
  }
</style>

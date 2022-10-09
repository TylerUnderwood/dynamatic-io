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
        <div class="wrapper" identify-item="right">
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
    content: "Section " counter(identify-section);
  }

  [identify] .wrapper[identify-item]::before {
    content: "Wrapper";
  }
</style>

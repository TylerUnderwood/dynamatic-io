<script>
export default {
  props: [
    'id',
    'heading'
  ],
  computed: {
    cid() {
      let id;

      if (this.id == null && this.heading != null) {
        id = this.heading.trim().toLowerCase().split(' ').join('-');
      } else if (this.id == null) {
        id = 'asdf';
      } else {
        id = this.id;
      }

      return id;
    },
    sectionId() {
      return 'section-' + this.cid;
    },
    headingId() {
      return this.cid + '-heading';
    }
  }
}
</script>

<template>
  <section
    :id="sectionId"
    class="Section px-page my-section"
    :aria-labelledby="heading != null ? headingId : null"
    identify-item="component"
  >
    <div class="Section__wrap" identify-item="component right">
      <h2 :id="headingId" class="Heading h2" v-if="heading">
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

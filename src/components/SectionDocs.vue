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
  <div
    :id="sectionId"
    class="SectionDocs"
    :aria-labelledby="heading != null ? headingId : null"
    identify-item="component"
  >
    <h2 :id="headingId" class="Heading h2" v-if="heading">
      {{ heading }}
    </h2>

    <slot/>

  </div>
</template>

<style>
  .SectionDocs + .SectionDocs {
    margin-top: var(--section-space-y);
  }
  [identify] .SectionDocs[identify-item] {
    counter-increment: identify-SectionDocs;
  }
  [identify] .SectionDocs[identify-item]::before {
    content: "SectionDocs " counter(identify-SectionDocs) !important;
  }
</style>

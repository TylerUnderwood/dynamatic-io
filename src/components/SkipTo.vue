<script>
export default {
  data() {
    return {
      skipButtons: [
        { href: '#main', name: 'main'},
        { href: '#footer', name: 'footer'},
        { href: '#settings', name: 'settings'},
      ]
    }
  }
}
</script>

<template>
  <div id="skipto-slots" class="relative pointer-events-none">
    <template v-for="item in skipButtons">
      <a :id="`skip-to-${ item.name }`" class="SkipTo" :href="item.href">
        <span class="Meta lhc">Skip to {{ item.name }}</span>
        <span class="Triangle Triangle--r"></span>
      </a>
    </template>
  </div>
</template>

<style>
.SkipTo {
  position: fixed;
  z-index: -999;
  top: 1rem;
  left: 50%;
  translate: -50% -20%;
  display: inline-flex;
  opacity: 0;
  box-shadow: var(--shadow);
  outline: 2px solid var(--theme-primary) !important;
  outline-offset: 0;
  border-radius: 2px;
  background-color: var(--theme-base);
  padding: 1.2em;
  font-weight: 700;
  font-size: 0.8rem;
  transition: scale 200ms ease,
              translate 200ms ease,
              opacity 200ms ease;
}

.SkipTo:hover,
.SkipTo:focus,
.SkipTo:focus-visible {
  z-index: 999;
  translate: -50% 0;
  opacity: 1;
}

.SkipTo .Triangle {
  margin-left: 0.8em;
  font-size: 0.8em;
}
</style>

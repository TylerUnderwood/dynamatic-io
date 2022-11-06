<template>
  <div id="skipto-slots" class="relative">
    <a id="skip-to-main" class="SkipTo" href="#main">
      <span class= "Meta">Skip to main</span>
    </a>
    <a id="skip-to-footer" class="SkipTo" href="#footer">
      <span class= "Meta">Skip to footer</span>
    </a>
    <a id="skip-to-settings" class="SkipTo" href="#settings">
      <span class= "Meta">Skip to settings</span>
    </a>
  </div>
</template>

<style>
.SkipTo {
  position: fixed;
  z-index: -999;
  top: 100vh;
  left: 100vh;
  translate: -10%;
  opacity: 0;
  outline: 2px solid var(--theme-primary) !important;
  outline-offset: 0;
  background-color: var(--theme-base);
  padding: 1.2em;
  font-weight: 700;
  font-size: 0.8rem;
  transition: all 0ms 200ms, translate 200ms ease, opacity 200ms ease;
}

.SkipTo:hover,
.SkipTo:focus,
.SkipTo:focus-visible {
  z-index: 999;
  top: 0;
  left: 0;
  translate: 0;
  opacity: 1;
  transition: translate 200ms ease, opacity 200ms ease;
}

.SkipTo .triangle {
  font-size: 1.3em;
}
</style>

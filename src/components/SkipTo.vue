<template>
  <div id="skipto-slots" class="relative">
    <a id="skip-to-main" class="SkipTo" href="#main">
      <span class="Meta lhc">Skip to main</span>
    </a>
    <a id="skip-to-footer" class="SkipTo" href="#footer">
      <span class="Meta lhc">Skip to footer</span>
    </a>
    <a id="skip-to-settings" class="SkipTo" href="#settings">
      <span class="Meta lhc">Skip to settings</span>
    </a>
  </div>
</template>

<style>
.SkipTo {
  position: fixed;
  z-index: -999;
  top: 1rem;
  left: 50%;
  translate: -50% -20%;
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

.SkipTo .triangle {
  font-size: 1.3em;
}
</style>

<template>
    <a id="skip-to-main" class="SkipToMain" href="#main">Skip to main</a>
</template>

<style>
.SkipToMain {
  position: fixed;
  z-index: -999;
  top: auto;
  left: -999px;
  width: 1px;
  height: 1px;
  background-color: var(--theme-base);
  padding: 0.6em 0.8em;
  overflow: hidden;
}

.SkipToMain:focus {
  z-index: 999;
  left: auto;
  outline: 2px solid var(--theme-primary);
  outline-offset: -2px;
  width: auto;
  height: auto;
  overflow: visible;
}
</style>

<script setup>
import Theme from "./components/style/Theme.vue"
import Header from "./components/Header.vue";
import TheWelcome from "./components/TheWelcome.vue";
import Utilities from "./components/style/Utilities.vue"
</script>

<template>
  <Theme/>

  <header>
    <img
      alt="Vue logo"
      class="logo"
      src="./assets/logo.svg"
      width="125"
      height="125"
    />

    <div class="wrapper">
      <Header msg="You did it!" />
    </div>
  </header>

  <main>
    <TheWelcome />
  </main>

  <Utilities/>
</template>

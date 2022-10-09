<script setup>

</script>

<template>
  <header id="header" class="flex justify-between items-center p-4">
    <span class="p-2">LOGO</span>
    <nav>
      <ul class="flex list-none m-0 p-0">
        <li>
          <router-link to="/" class="inline-block hover:bg-light-400 p-1">Home</router-link>
        </li>
        <li>
          <router-link to="/about" class="inline-block hover:bg-light-400 p-1">About</router-link>
        </li>
        <li>
          <router-link to="/theme" class="inline-block hover:bg-light-400 p-1">Theme</router-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<style>
@import "@styles/components/_header.css";
</style>

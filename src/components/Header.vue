<script setup>

</script>

<template>
  <header class="p-4">
    <span>LOGO</span>
    <nav>
      <ul>
        <li>
          <router-link to="/">Home</router-link>
        </li>
        <li>
          <router-link to="/about">About</router-link>
        </li>
        <li>
          <router-link to="/theme">Theme</router-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<style>
@import "@styles/components/_header.css";
</style>

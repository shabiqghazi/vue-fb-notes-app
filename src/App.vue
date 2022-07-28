<script setup>
import { RouterLink, RouterView } from "vue-router";
import NavbarComponent from "./components/NavbarComponent.vue";
</script>

<template>
  <NavbarComponent />
  <div class="container py-5">
    <RouterView />
  </div>
</template>

<style scoped>
</style>

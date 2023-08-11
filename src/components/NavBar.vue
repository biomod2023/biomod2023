<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<template>
  <div
    class="flex justify-center items-center bg-slate font-semibold text-gold py-3 gap-44 drop-shadow-lg"
  >
    <div class="flex justify-center gap-16">
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/ideas">Ideas</RouterLink>
      <RouterLink to="#">Notebook</RouterLink>
    </div>
    <a href="/">
      <img src="../assets/logo.svg" alt="Biomod Logo" />
    </a>
    <div class="flex justify-center gap-16">
      <RouterLink to="#">ELSI</RouterLink>
      <RouterLink to="/team">Teams</RouterLink>
      <RouterLink to="#">Sponsors</RouterLink>
    </div>
  </div>
</template>

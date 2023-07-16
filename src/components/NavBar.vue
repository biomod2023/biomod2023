<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<template>
  <div class="flex justify-center items-center bg-slate font-semibold text-gold py-3 gap-44">
    <div class="flex justify-center gap-16">
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="#">Ideas</RouterLink>
      <RouterLink to="#">Notebook</RouterLink>
    </div>
    <img src="../assets/logo.svg" alt="Biomod Logo" />
    <div class="flex justify-center gap-16">
      <RouterLink to="#">ELSI</RouterLink>
      <RouterLink to="#">Teams</RouterLink>
      <RouterLink to="#">Sponsors</RouterLink>
    </div>
  </div>
</template>

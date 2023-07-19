<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<template>
  <div
    class="flex justify-between items-center drop-shadow-[0_-4px_3px_rgba(0,0,0,0.25)] bg-slate text-gray-50 py-1 px-3"
  >
    <a href="https://ubcbiomod.com" class="pl-2">
      See Past <span class="font-semibold">UBC Biomod</span> Projects
    </a>

    <RouterLink to="/">
      <img src="../assets/biomod_footer.svg" alt="Biomod Logo" />
    </RouterLink>
  </div>
</template>

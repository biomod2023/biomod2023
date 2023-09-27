<script setup lang="ts">
import { RouterView } from 'vue-router'
import NavBar from '@/components/NavBar.vue'
import Footer from '@/components/Footer.vue'
</script>

<template>
  <div class="flex flex-col h-full">
    <NavBar :key="$route.fullPath" />
    <RouterView class="mt-24 lg:mt-0 bg-slate"/>
    <div class="flex flex-col justify-end grow">
      <Footer />
    </div>
  </div>
</template>

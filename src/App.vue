<script setup lang="ts">
import { RouterView } from 'vue-router'
import NavBar from '@/components/NavBar.vue'
import Footer from '@/components/Footer.vue'
</script>

<template>
  <NavBar />
  <RouterView class="mt-24 lg:mt-0"/>
  <div class="flex flex-col justify-end grow">
    <Footer />
  </div>
</template>

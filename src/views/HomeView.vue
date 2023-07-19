<script setup lang="ts">
import NavBar from '../components/NavBar.vue'
import Footer from '../components/Footer.vue'
</script>

<template>
  <div class="flex flex-col h-screen">
    <NavBar />
    <main class="pt-2 flex flex-col items-center">
      <h1 class="text-gold font-title text-title">Title</h1>
      <p>Text</p>
      <button class="btn my-4">Click me</button>
    </main>

    <div class="flex flex-col justify-end grow">
      <Footer />
    </div>
  </div>
</template>

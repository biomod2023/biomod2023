<script setup lang="ts">
import NavBar from '../components/NavBar.vue'
import Footer from '../components/Footer.vue'

</script>

<template>
  <div class="flex flex-col bg-slate">
    <NavBar />

    <div class="pt-2 flex flex-col items-center justify-center min-h-screen bg-[#1E1E1E]">
      <h1 class="font-title text-title">Embrace the Nano Frontier</h1>
      <h2 class="text-subtitle w-1/2 text-center">Unleash the Nano Frontier, where a new era of technology begins. Pioneering advancements redefine possibilities. Embrace the future with us.</h2>
      <button class="btn mt-20">Explore</button>
    </div>

    <div class="w-full h-20 rounded-full bg-[#1E1E1E]"></div>

    <div class="flex flex-col p-4">
      <h1 class="font-title text-title text-gold w-1/3 ml-14">The smallest of beginnings</h1>
    </div>

    <div class="flex flex-col justify-end grow">
      <Footer />
    </div>
  </div>
</template>

<script setup lang="ts">
import NavBar from '../components/NavBar.vue'
import Footer from '../components/Footer.vue'
import LightButton from '../components/LightButton.vue'
</script>

<template>
  <div class="flex flex-col bg-slate">
    <NavBar />

    <div class="pt-2 flex flex-col items-center justify-center min-h-screen bg-[#1E1E1E]">
      <h1 class="font-title text-title">Embrace the Nano Frontier</h1>
      <h2 class="text-subtitle w-1/2 text-center">Unleash the Nano Frontier, where a new era of technology begins. Pioneering advancements redefine possibilities. Embrace the future with us.</h2>
      <button class="btn mt-20">Explore</button>
    </div>


    <div class="flex flex-col bg">
      <span class="w-full h-40 rounded-b-[50%] bg-[#1E1E1E]"></span>
      <div class="p-4 w-1/3 ml-28 mt-10">
        <h1 class="font-title text-title text-gold">The smallest of beginnings</h1>

        <div class="flex items-center mt-2 gap-32">
          <svg width="127" height="4" viewBox="0 0 127 4" fill="none" xmlns="http://www.w3.org/2000/svg">
            <line y1="2" x2="127" y2="2" stroke="#E2B764" stroke-width="3"/>
          </svg>
          <LightButton>Learn More</LightButton>
        </div>
      </div>

      <div class="mt-20 flex justify-evenly items-center bg-slate p-8">
        <div class="w-96 h-96 bg-white"></div>
        <div class="w-96 h-96 bg-white"></div>
        <div class="w-96 h-96 bg-white"></div>
      </div>
    </div>

    <div class="flex flex-col justify-end grow">
      <Footer />
    </div>
  </div>
</template>

<style>
  .bg {
    @apply w-full bg-no-repeat;
    background-image: url('../assets/homepage_bg_rot.png'), url('../assets/homepage_bg.png');
    background-position: -5% top, right 40%;
  }
</style>

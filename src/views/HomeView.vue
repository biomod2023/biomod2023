<script setup lang="ts">
import NavBar from '../components/NavBar.vue'
import Footer from '../components/Footer.vue'
import LightButton from '../components/LightButton.vue'
</script>

<template>
  <div class="flex flex-col bg-slate">
    <NavBar />

    <div class="pt-2 flex flex-col items-center justify-center min-h-screen bg-dark">
      <h1 class="font-title text-title">Embrace the Nano Frontier</h1>
      <h2 class="text-subtitle w-1/2 text-center">Unleash the Nano Frontier, where a new era of technology begins. Pioneering advancements redefine possibilities. Embrace the future with us.</h2>
      <button class="btn mt-20">Explore</button>
    </div>


    <div class="flex flex-col bg">
      <span class="w-full h-40 rounded-b-[50%] bg-dark"></span>
      <div class="p-4 w-1/3 ml-28 mt-10">
        <h1 class="font-title text-title text-gold">The smallest of beginnings</h1>

        <div class="flex items-center mt-2 gap-32">
          <svg width="127" height="4" viewBox="0 0 127 4" fill="none" xmlns="http://www.w3.org/2000/svg">
            <line y1="2" x2="127" y2="2" stroke="#E2B764" stroke-width="3"/>
          </svg>
          <LightButton>Learn More</LightButton>
        </div>
      </div>

      <div class="mt-20 flex justify-evenly items-center bg-dark p-8">
        <div class="w-96 h-96 bg-white"></div>
        <div class="w-96 h-96 bg-white"></div>
        <div class="w-96 h-96 bg-white"></div>
      </div>
    </div>

    <div class="flex justify-around py-36 px-10">
      <div class="w-[30rem] h-[30rem] bg-white"></div>
      <div class="flex flex-col max-w-[50%] gap-10">
        <h1 class="font-title text-[5rem] text-gold">Abstract</h1>
        <p class="text-subtitle">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
    </div>

    <div class="flex flex-col gap-2 items-center bg-dark pt-4 pb-8">
      <div class="font-title text-title -mb-4">Watch us Fold</div>
      <svg width="150" height="3" viewBox="0 0 150 3" fill="none" xmlns="http://www.w3.org/2000/svg">
        <line y1="1.5" x2="150" y2="1.5" stroke="#E2B764" stroke-width="3"/>
      </svg>

      <div class="bg-white w-3/4 h-[40rem] m-8"></div>
      
      <button class="btn !py-4 my-2">
        <svg width="24" height="36" viewBox="0 0 24 36" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M13.0607 0.939339C12.4749 0.353554 11.5251 0.353554 10.9393 0.939339L1.3934 10.4853C0.807611 11.0711 0.807611 12.0208 1.3934 12.6066C1.97919 13.1924 2.92893 13.1924 3.51472 12.6066L12 4.12132L20.4853 12.6066C21.0711 13.1924 22.0208 13.1924 22.6066 12.6066C23.1924 12.0208 23.1924 11.0711 22.6066 10.4853L13.0607 0.939339ZM13.5 36L13.5 2H10.5L10.5 36H13.5Z" fill="#C9A96C"/>
        </svg>
      </button>

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

<script setup lang="ts">
import { ref } from 'vue'
import { RouterLink } from 'vue-router'

const sidebar = ref(false)
let transitionAnimation = 'transition duration-100 ease-in'
</script>

<template>
  <!-- Desktop Navbar -->
  <div
    class="hidden lg:flex justify-center items-center bg-slate font-semibold text-gold py-3 gap-44 drop-shadow-lg"
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
      <RouterLink to="/elsi">ELSI</RouterLink>
      <RouterLink to="/team">Teams</RouterLink>
      <RouterLink to="#">Sponsors</RouterLink>
    </div>
  </div>

  <!-- Mobile Navbar -->
  <div
    class="lg:hidden fixed z-20 top-0 w-full flex justify-between items-center bg-slate py-3 drop-shadow-lg"
  >
    <RouterLink to="/" class="flex items-center">
      <img class="-mr-1" src="../assets/logo.svg" alt="Biomod Logo" />
      <span class="text-[#FFC000] font-bold text-xl">UBC Biomod</span>
    </RouterLink>
    <button class="mr-10" @click="sidebar = !sidebar">
      <svg
        class="active:opacity-70 transition-all duration-200 ease-in-out"
        viewBox="0 0 10 8"
        width="35"
      >
        <path
          d="M1 1h8M1 4h 8M1 7h8"
          class="stroke-gold"
          stroke-width="1.0"
          stroke-linecap="round"
        />
      </svg>
    </button>
  </div>

  <Transition
    enter-from-class="opacity-0"
    leave-to-class="opacity-0"
    :enter-active-class="transitionAnimation"
    :leave-active-class="transitionAnimation"
  >
    <template v-if="sidebar">
      <div
        class="lg:hidden fixed z-10 h-full w-full left-0 flex justify-end bg-black bg-opacity-90"
      >
        <!-- <Transition enter-from-class="translate-x-full" leave-to-class="-translate-x-full" :enter-active-class="transitionAnimation" :leave-active-class="transitionAnimation"> -->
        <div
          class="flex flex-col justify-center p-4 h-full w-[70vh] min-w-[35%] max-w-[70%] bg-slate"
        >
          <div
            class="flex flex-col h-full w-full py-20 ml-10 mb-20 gap-6 overflow-scroll justify-evenly text-gold text-2xl font-bold"
          >
            <RouterLink to="/">Home</RouterLink>
            <RouterLink to="/ideas">Ideas</RouterLink>
            <RouterLink to="#">Notebook</RouterLink>
            <RouterLink to="/elsi">ELSI</RouterLink>
            <RouterLink to="/team">Teams</RouterLink>
            <RouterLink to="#">Sponsors</RouterLink>
          </div>
        </div>
        <!-- </Transition> -->
      </div>
    </template>
  </Transition>
</template>

<style>
.v-enter-active,
.v-leave-active {
  transition: 100ms;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}

.v-enter-active .fly,
.v-leave-active .fly {
  transition: 100ms;
}

.v-enter-from .fly {
  transform: translateX(100%);
}

.v-leave-to .fly {
  transform: translateX(100%);
}
</style>
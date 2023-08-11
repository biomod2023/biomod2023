<script setup lang="ts">
import { ref } from 'vue'
import { RouterLink } from 'vue-router'

const sidebar = ref(false)
</script>

<template>
  <!-- <div
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
  </div> -->

  <div class="fixed z-10 top-0 w-full flex justify-between items-center bg-slate py-3 drop-shadow-lg">
    <RouterLink to="/" class="flex items-center">
      <img class="-mr-1" src="../assets/logo.svg" alt="Biomod Logo" />
      <span class="text-[#FFC000] font-bold text-xl">UBC Biomod</span>
    </RouterLink>
    <button class="mr-10" @click="sidebar = !sidebar">
      <svg class="active:opacity-70 transition-all duration-200 ease-in-out" viewBox="0 0 10 8" width="35">
        <path d="M1 1h8M1 4h 8M1 7h8" class="stroke-gold" stroke-width="1.0" stroke-linecap="round" />
      </svg>
    </button>
  </div>

  <Transition>
    <template v-if="sidebar">
        <div class="absolute w-full left-0 top-24 flex justify-end bg-black bg-opacity-90" style="height: calc(100% - 6rem);">

          <div class="fly flex flex-col items-center justify-center p-4 h-full w-[70%] bg-slate">
              <div class="flex flex-col h-3/4 w-full ml-10 mb-10 justify-around text-gold text-2xl font-bold">
                  <RouterLink to="/">Home</RouterLink>
                  <RouterLink to="/ideas">Ideas</RouterLink>
                  <RouterLink to="#">Notebook</RouterLink>
                  <RouterLink to="#">ELSI</RouterLink>
                  <RouterLink to="/team">Teams</RouterLink>
                  <RouterLink to="#">Sponsors</RouterLink>
              </div>
          </div>
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
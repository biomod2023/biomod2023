<script setup lang="ts">
const props = defineProps<{ to: string }>()

import { ref } from 'vue'

const dropdown = ref(false)
const toggle = ref(false)

const handleClickOutside = () => {
  toggle.value = false
  dropdown.value = false
}
</script>

<template>
  <div
    v-click-outside="handleClickOutside"
    class="flex flex-col items-center h-full"
    @mouseenter="() => {if (!toggle) dropdown = true}"
    @mouseleave="() => {if (!toggle) dropdown = false}"
  >
    <div class="relative z-10 flex gap-2 w-full py-4 px-12 cursor-pointer" :class="{ 'opacity-80': dropdown || toggle }" @click="toggle = !toggle">
      <slot name="text"></slot>
      <svg
        class="w-3 stroke-gold transition duration-100"
        :class="{ 'rotate-180 ': dropdown || toggle }"
        viewBox="0 0 30 17"
        fill="none"
      >
        <path d="M1.2074 1.25L14.7074 14.75L28.2074 1.25" stroke-width="3" />
      </svg>
    </div>

    <div v-if="dropdown || toggle" class="fixed pt-2 mt-10" @click="() => {if (!toggle) toggle = true}">
      <div class="bg-slate py-4 shadow-[0_25px_25px_rgba(0,0,0,0.4)] rounded-b-3xl">
        <slot name="content"></slot>
      </div>
    </div>
  </div>
</template>

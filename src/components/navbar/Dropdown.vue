<script setup lang="ts">
const props = defineProps<{ to: string }>()

import { ref } from 'vue'

const dropdown = ref(false)
</script>

<template>
  <div
    @mouseenter="dropdown = true"
    @mouseleave="dropdown = false"
    class="flex flex-col items-center"
  >
    <RouterLink :to="to" class="flex gap-2 w-full" :class="{ 'opacity-80': dropdown }">
      <slot name="text"></slot>
      <svg
        class="w-3 stroke-gold transition duration-100"
        :class="{ 'rotate-180 ': dropdown }"
        viewBox="0 0 30 17"
        fill="none"
      >
        <path d="M1.2074 1.25L14.7074 14.75L28.2074 1.25" stroke-width="3" />
      </svg>
    </RouterLink>

    <div v-if="dropdown" class="fixed pt-12">
      <div class="bg-slate py-4 shadow-[0_25px_25px_rgba(0,0,0,0.4)] rounded-b-3xl">
        <slot name="content"></slot>
      </div>
    </div>
  </div>
</template>

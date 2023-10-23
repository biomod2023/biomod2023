<script setup lang="ts">
const props = defineProps<{ to: string }>()

import { ref } from 'vue'

const dropdown = ref(false)
</script>

<template>
  <div class="flex items-center" @mouseenter="dropdown = true" @mouseleave="dropdown = false">
    <div class="flex gap-2 py-4 px-8 hover:opacity-80 transition duration-200">
      <slot name="text"></slot>
      <svg class="w-3 stroke-gold -rotate-90" viewBox="0 0 30 17" fill="none">
        <path d="M1.2074 1.25L14.7074 14.75L28.2074 1.25" stroke-width="3" />
      </svg>
    </div>

    <div v-if="dropdown" class="fixed ml-[12.25rem] mt-8">
      <div class="bg-slate p-4 shadow-[5px_0_35px_rgba(0,0,0,0.4)] rounded-3xl">
        <slot name="content"></slot>
      </div>
    </div>
  </div>
</template>

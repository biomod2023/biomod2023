<script setup lang="ts">
const props = defineProps<{ to: string }>()

import { ref } from 'vue'

const dropdown = ref(false)
</script>

<template>
  <div
    @mouseenter="dropdown = true"
    @mouseleave="dropdown = false"
    class="flex items-center py-2 px-4"
  >
    <RouterLink :to="to" class="flex gap-2">
      <slot name="text"></slot>
      <svg class="w-3 stroke-gold -rotate-90" viewBox="0 0 30 17" fill="none">
        <path d="M1.2074 1.25L14.7074 14.75L28.2074 1.25" stroke-width="3" />
      </svg>
    </RouterLink>

    <div v-if="dropdown" class="fixed ml-[8.7rem] mt-8">
      <div class="bg-slate p-4 shadow-2xl rounded-3xl">
        <slot name="content"></slot>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import Bubble from './Bubble.vue'

const title = ref()
const id = ref('')

onMounted(() => {
  if (title.value) {
    id.value = title.value.textContent.trim()
  }
})
</script>

<template>
  <Bubble :always-dropdown="false">
    <template #title>
      <slot name="title"></slot>
    </template>
    <template #body>
      <div class="flex gap-8 w-full overflow-x-scroll snap-x snap-mandatory lg:overflow-x-auto">
        <div
          class="min-w-full lg:min-w-0 lg:w-1/2 text-notebookText bg-slate p-6 rounded-[3.2em] snap-center"
        >
          <h3 class="text-subtitle-sm lg:text-subtitle text-white mb-4">
            <slot name="left-title"></slot>
          </h3>
          <slot name="left-body"></slot>
        </div>
        <div
          class="min-w-full lg:min-w-0 lg:w-1/2 text-notebookText bg-slate p-6 rounded-[3.2em] snap-center"
        >
          <h3 class="text-subtitle-sm lg:text-subtitle text-white mb-4">
            <slot name="right-title"></slot>
          </h3>
          <slot name="right-body"></slot>
        </div>
      </div>
    </template>
  </Bubble>
</template>

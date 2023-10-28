<script setup lang="ts">
defineProps<{
  modifier?: string
}>()
</script>

<template>
  <div :class="'text-center flex flex-col items-center gap-2 text-notebookText ' + modifier">
    <div class="flex flex-col items-center gap-2 text-sm">
      <slot name="graphics">
        <div class="w-48 h-48 bg-gray-300"></div>
        <!-- empty image -->
      </slot>
      <slot name="caption"></slot>
    </div>
  </div>
</template>

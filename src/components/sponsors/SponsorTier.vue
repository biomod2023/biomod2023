<script setup lang="ts">
  const props = defineProps<{
    color: string
  }>()
</script>

<template>
  <div class="relative z-10 w-11/12 rounded-full px-4 py-2 my-4" :class="color">
    <h2 class="text-black text-title-sm lg:text-title font-title text-center">
      <slot></slot>
    </h2>
  </div>
</template>
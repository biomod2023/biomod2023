<script setup lang="ts">
import TableOfContents from '@/components/lab-notebook/TableOfContents.vue'
</script>

<template>
  <div class="flex p-4 gap-3">
    <div v-if="$windowWidth >= 1024" class="basis-1/5 py-8 ml-8 sticky h-1/3 top-0">
      <TableOfContents />
    </div>
    <div class="flex flex-col items-center gap-10 w-full lg:basis-4/5 p-8 leading-relaxed">
      <slot></slot>
    </div>
  </div>
</template>

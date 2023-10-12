<script setup lang="ts">
import NotebookBody from '@/components/lab-notebook/NotebookBody.vue'
</script>

<template>
  <div>
    <div class="m-auto">
      <h1 class="font-title text-center text-title-sm lg:text-title text-gold mt-4">
        <slot name="title"></slot>
      </h1>
    </div>
    <NotebookBody>
      <slot name="body"></slot>
    </NotebookBody>
  </div>
</template>

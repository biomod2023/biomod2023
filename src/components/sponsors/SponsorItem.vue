<script setup lang="ts">
</script>

<template>
  <div class="flex flex-col lg:flex-row items-center gap-8 lg:gap-4 lg:w-5/6 my-6 lg:my-28 text-center lg:text-start">
    <div class="lg:basis-1/2">
      <div class="m-auto px-8 md:px-20 lg:px-8 xl:px-10 relative hover:scale-105 cursor-pointer transition-transform duration-200">
        <slot name="img"></slot>
      </div>
    </div>
    <div class="basis-1/2">
      <h2 class="text-3xl font-semibold mb-2">
        <slot name="title"></slot>
      </h2>
      <p class="text-lg">
        <slot name="description"></slot>
      </p>
    </div>
  </div>
</template>
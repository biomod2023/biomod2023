<script setup lang="ts">
const props = defineProps({
  currentlySelected: Boolean
})
</script>

<template>
  <div
    class="group active:bg-gold active:opacity-70 transition-all duration-200 rounded-3xl font-semibold text-center text-sm lg:text-md py-5 px-3 min-h-[7rem] md:min-h-[10rem] xl:min-h-[10rem] min-w-[7rem] md:min-w-[10rem] xl:min-w-[10rem] my-4 flex flex-col items-center justify-center"
    :class="{
      'bg-dark hover:bg-gold text-[#d9d9d9] hover:text-[#1e1e1e]': !currentlySelected,
      'bg-gold text-[#1e1e1e]': currentlySelected
    }"
  >
    <slot name="svg"></slot>

    <div class="hidden md:block md:mt-3">
      <slot name="text"></slot>
    </div>
  </div>
</template>

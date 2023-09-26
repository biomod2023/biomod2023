<script setup lang="ts">
const props = defineProps({
  currentSelection: Number
})
</script>

<template>
  <svg
    class="group-hover:stroke-white w-20 h-20 stroke-[0.9px] transition-all duration-200"
    :class="{ 'stroke-gold': currentSelection != 3, 'stroke-white': currentSelection == 3 }"
    width="121"
    height="99"
    viewBox="0 0 121 99"
    fill="none"
  >
    <path
      d="M72.9094 96.5888L72.9093 61.6842C72.9093 61.6842 72.9778 60.5816 72.2542 59.939C71.5306 59.2964 70.2889 59.3573 70.2889 59.3573H49.981C49.981 59.3573 48.7392 59.2964 48.0156 59.939C47.292 60.5816 47.3606 61.6842 47.3606 61.6842V96.5888"
      stroke-miterlimit="10"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M15.6028 33.4387V94.6229C15.6028 94.6229 15.5341 96.0725 16.2581 96.9173C16.9821 97.7621 18.2245 97.6821 18.2245 97.6821H102.775C102.775 97.6821 104.017 97.7622 104.741 96.9173C105.465 96.0725 105.397 94.6229 105.397 94.6229L105.397 33.4387"
      stroke-linejoin="round"
    />
    <path
      d="M1 38.549L58.224 1.96268C58.224 1.96268 59.2483 1.32029 60.1749 1.31592C61.1083 1.31152 62.1471 1.96268 62.1471 1.96268L120 38.549"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
</template>

<script setup lang="ts">
const props = defineProps({
  currentSelection: Number
})
</script>

<template>
  <svg
    class="group-hover:stroke-white w-20 h-20 stroke-[0.9px] transition-all duration-200"
    :class="{ 'stroke-gold': currentSelection != 4, 'stroke-white': currentSelection == 4 }"
    width="93"
    height="95"
    viewBox="0 0 93 95"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M39.5859 24.9617L49.3469 39.9872L39.5859 55.0127H24.9445L15.1836 39.9872L24.9445 24.9617H39.5859Z"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M63.7851 9.93628L73.5461 24.9618L63.7851 39.9873H49.1437L39.3828 24.9618L49.1437 9.93628H63.7851Z"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path d="M64.0562 70.0382L73.5459 85.0637" stroke-linecap="round" stroke-linejoin="round" />
    <path d="M15.1836 9.93616L24.6734 24.9617" stroke-linecap="round" stroke-linejoin="round" />
    <path d="M49.3468 70.0383L44.1274 77.3087" stroke-linecap="round" stroke-linejoin="round" />
    <path d="M24.6736 55.0127L19.9287 62.2831" stroke-linecap="round" stroke-linejoin="round" />
    <path d="M15.1837 39.9873H9.96436" stroke-linecap="round" stroke-linejoin="round" />
    <path d="M73.5459 55.0127H88.2551" stroke-linecap="round" stroke-linejoin="round" />
    <path
      d="M63.7851 39.9873L73.5461 55.0128L63.7851 70.0383H49.1437L39.3828 55.0128L49.1437 39.9873H63.7851Z"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <ellipse cx="4.03327" cy="40.2296" rx="1.66071" ry="1.69643" class="fill-gold" />
    <ellipse cx="16.6071" cy="67.6147" rx="1.42347" ry="1.45408" class="fill-gold" />
    <ellipse cx="41.0435" cy="82.1555" rx="1.66071" ry="1.45408" class="fill-gold" />
  </svg>
</template>

<script setup lang="ts">
const props = defineProps({
    currentSelection: Number
})
</script>

<template>
    <svg class="group-hover:stroke-white w-20 h-20 stroke-[0.9px] transition-all duration-200"
        :class="{ 'stroke-gold': currentSelection != 1, 'stroke-white': currentSelection == 1 }" width="135" height="95"
        viewBox="0 0 135 95" fill="none">
        <path d="M67.7079 0.839844L133.996 36.4187L67.8825 72.8743L1 36.1275L67.7079 0.839844Z" stroke-miterlimit="10"
            stroke-linecap="round" stroke-linejoin="round" />
        <path
            d="M61.8394 36.6942C61.8394 35.2505 64.503 34.0796 67.7887 34.0796C71.0744 34.0796 73.738 35.2505 73.738 36.6942C73.738 38.1386 71.0744 39.3088 67.7887 39.3088C64.503 39.3088 61.8394 38.1386 61.8394 36.6942Z"
            stroke-miterlimit="10" />
        <path d="M30.7124 82.9211C39.7382 97.0635 95.1742 98.6165 104.992 83.2332" stroke-miterlimit="10"
            stroke-linecap="round" stroke-linejoin="round" />
        <path d="M133.998 39.073L134 66.5373" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M104.993 55.9265V83.3909" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M30.7139 55.9265V83.3909" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
    </svg>
</template>
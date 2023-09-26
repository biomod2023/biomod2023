<script setup lang="ts">
const props = defineProps({
    currentSelection: Number
})
</script>

<template>
    <svg class="group-hover:stroke-white w-20 h-20 stroke-[0.9px] transition-all duration-200"
        :class="{ 'stroke-gold': currentSelection != 6, 'stroke-white': currentSelection == 6 }" width="109" height="109"
        viewBox="0 0 109 109" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M95.375 27.25L68.8321 53.7929C68.4416 54.1834 67.8084 54.1834 67.4179 53.7929L55.2071 41.5821C54.8166 41.1916 54.1834 41.1916 53.7929 41.5821L31.7917 63.5833"
            stroke-linecap="round" stroke-linejoin="round" />
        <path
            d="M13.625 13.625V92.175C13.625 93.2951 13.625 93.8552 13.843 94.283C14.0347 94.6593 14.3407 94.9653 14.717 95.157C15.1448 95.375 15.7049 95.375 16.825 95.375H95.375"
            stroke-linecap="round" />
    </svg>
</template>
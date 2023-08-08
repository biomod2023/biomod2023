<script setup lang="ts">
    const props = defineProps({
        isDisabled: Boolean,
    })
</script>
<template>
    <button class="w-[8.1rem] h-[2.5rem] rounded-[1.1rem] border-[1.5px] border-white 
        enabled:hover:border-gold enabled:hover:text-gold
        disabled:bg-[#343E3D]/70 disabled:border-gold disabled:text-gold" :disabled="isDisabled">
        <slot></slot>
    </button>
</template>
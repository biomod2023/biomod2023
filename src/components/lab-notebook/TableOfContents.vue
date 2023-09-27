<script setup lang="ts">
    const props = defineProps<{elements: string[]}>()
</script>

<template>
    <div class="bg-notebookBg rounded-[3.2em] p-8 w-full flex flex-col items-center">
        <a v-for="(element, index) in elements" :key="index" :href="'#' + element"
        class="w-full text-subtitle rounded-[3.2em] my-1 py-2 px-6 hover:bg-gold hover:text-dark transition duration-200" :class="{ 'bg-gold text-dark': index == 0}">
            {{ element }}
        </a>
    </div>
</template>
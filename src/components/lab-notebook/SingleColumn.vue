<script setup lang="ts">
import Bubble from '@/components/lab-notebook/Bubble.vue'

withDefaults(defineProps<{alwaysDropdown?: boolean}>(), {
    alwaysDropdown: false
})
</script>

<template>
    <Bubble :always-dropdown="alwaysDropdown">
        <template #title>
            <slot name="title"></slot>
        </template>
        <template #body>
            <div class="text-notebookText mb-6">
                <slot name="body"></slot>
            </div>
            <div class="m-auto text-center flex flex-col items-center gap-2 text-notebookText">
                <slot name="graphic"></slot>
            </div>
        </template>
    </Bubble>
</template>
<script setup lang="ts">
import Bubble from '@/components/lab-notebook/Bubble.vue'
</script>

<template>
    <Bubble>
        <template #title>
            <slot name="title"></slot>
        </template>
        <template #body>
            <div class="text-notebookText mb-6">
                <slot name="body"></slot>
            </div>
            <div class="m-auto text-center flex flex-col align-center gap-2 text-notebookText">
                <slot name="graphic"></slot>
            </div>
        </template>
    </Bubble>
</template>
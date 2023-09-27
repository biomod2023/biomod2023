<script setup lang="ts">
import { ref, onMounted } from 'vue'
import Bubble from './Bubble.vue';

const title = ref()
const id = ref("")

onMounted(() => {
    if (title.value) {
        id.value = title.value.textContent.trim()
    }
})
</script>

<template>
    <Bubble>
        <template #title>
            <slot name="title"></slot>
        </template>
        <template #body>
            <div class="flex gap-8 w-full">
                <div class="w-1/2 text-notebookText bg-slate p-6 rounded-[3.2em]">
                    <slot name="left">
                </slot>
                </div>
                <div class="w-1/2 text-notebookText bg-slate p-6 rounded-[3.2em]">
                    <slot name="right"></slot>
                </div>
            </div>
        </template>
    </Bubble>
</template>
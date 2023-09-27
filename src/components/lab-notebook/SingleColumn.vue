<script setup lang="ts">
import { ref, onMounted } from 'vue'

const title = ref()
const id = ref("")
const activated = ref(false)

onMounted(() => {
    if (title.value) {
        id.value = title.value.textContent.trim()
    }
})

const activeAnim = 'transition duration-200 ease-in-out'
</script>

<template>
    <div
        class="flex flex-col bg-notebookBg p-8 rounded-[3.2em] transition-[max-height] duration-200 ease-in-out"
        :class="{'active:opacity-60': $windowWidth < 1024, 'max-h-28': !activated, 'max-h-full': activated}"
        @click="() => activated = !activated"
    >
        <div :class="{'flex justify-between items-center align-middle mr-4': $windowWidth < 1024}">
            <h2 :id="id" ref="title" :class="{'mb-4': $windowWidth >= 1024 || activated}" class="font-title font-medium text-2xl">
                <slot name="title"></slot>
            </h2>
            <svg v-if="$windowWidth < 1024" class="w-8" :class="{'rotate-180 mb-4': activated}" viewBox="0 0 30 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1.2074 1.25L14.7074 14.75L28.2074 1.25" stroke="#CDCDCD" stroke-width="3"/>
            </svg>
        </div>
        <template v-if="$windowWidth >= 1024 || activated">
            <div class="text-notebookText mb-6">
                <slot name="body"></slot>
            </div>
            <div class="m-auto text-center flex flex-col align-center gap-2 text-notebookText">
                <slot name="graphic"></slot>
            </div>
        </template>
    </div>
</template>
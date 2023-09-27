<script setup lang="ts">
import TableOfContents from '@/components/lab-notebook/TableOfContents.vue'
import { onMounted, ref } from "vue";

const elements = ref([])

onMounted(() => {
    const headerElems = Array.from(document.querySelectorAll("h2"))
        .map((elem) => elem.innerText)
    elements.value = headerElems
})
</script>

<template>
    <div class="flex p-4 gap-4 bg-slate">
        <div class="w-1/6 py-8">
            <TableOfContents :elements="elements" />
        </div>
        <div class="flex flex-col gap-10 w-5/6 p-8">
            <slot name="content"></slot>
            </div>
    </div>
</template>
<script setup lang="ts">
import TableOfContents from '@/components/lab-notebook/TableOfContents.vue'
</script>

<template>
    <div class="flex p-4 gap-3 bg-slate">
        <div class="basis-1/5 py-8 sticky h-1/3 top-0 hidden lg:block">
            <TableOfContents />
        </div>
        <div class="flex flex-col gap-10 lg:basis-4/5 p-8 leading-relaxed">
            <slot name="content"></slot>
        </div>
    </div>
</template>
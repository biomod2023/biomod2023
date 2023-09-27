<script setup lang="ts">

</script>

<template>
    <div class="flex p-4 gap-4 bg-slate">
        <div class="flex w-1/6 h-40 bg-gray-300">
        
        </div>
        <div class="flex flex-col gap-10 w-5/6 p-8">
            <slot name="content"></slot>
        </div>
    </div>
</template>
<template>
    <div class="flex flex-col bg-notebookBg p-8 rounded-[3.2em]">
        <h2 class="font-title font-medium text-2xl mb-4">
            <slot name="title"></slot>
        </h2>
        <div class="flex gap-8 w-full">
            <div class="w-1/2 text-notebookText bg-slate p-6 rounded-[3.2em]">
                <slot name="left">
            </slot>
            </div>
            <div class="w-1/2 text-notebookText bg-slate p-6 rounded-[3.2em]">
                <slot name="right"></slot>
            </div>
        </div>
        
    </div>
</template>
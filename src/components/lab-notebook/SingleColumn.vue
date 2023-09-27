<template>
    <div class="flex flex-col bg-notebookBg p-8 rounded-[3.2em]">
        <div class="font-title font-medium text-2xl mb-4">
            <slot name="title"></slot>
        </div>
        <div class="text-notebookText mb-6">
            <slot name="body"></slot>
        </div>
        <div class="m-auto text-center flex flex-col align-center gap-2 text-notebookText">
            <slot name="graphic"></slot>
        </div>
    </div>
</template>
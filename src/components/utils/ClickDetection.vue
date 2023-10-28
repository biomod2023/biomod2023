<script setup lang="ts">
    import { type Ref, ref, onMounted } from 'vue'
    const props = defineProps<{
        callback : () => void
    }>()  

    const containerRef = ref(null) as unknown as Ref<HTMLElement>
    const setRef = (slotRef: HTMLElement) => containerRef.value = slotRef
    onMounted(() => {
        document.addEventListener("click", (event : Event) => {
            if (!containerRef.value.contains(event.target as Node))
                props.callback()
        })
    })
</script>

<template>
    <slot :set-ref="setRef"></slot>
</template>
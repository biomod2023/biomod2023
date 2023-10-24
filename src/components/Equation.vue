<script setup lang="ts">
import katex from 'katex'
import { type Ref, ref, onMounted } from 'vue'
const props = defineProps<{
  formula: string
}>()
const containerRef = ref(null) as unknown as Ref<HTMLElement>

onMounted(() => {
  katex.render(props.formula, containerRef.value, { throwOnError: false })
})
</script>
<template>
  <div
    class="w-full overflow-x-scroll whitespace-nowrap bg-transparent invisible-scroller text-center"
    ref="containerRef"
  ></div>
</template>
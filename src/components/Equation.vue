<script setup lang="ts">
    import katex from 'katex'
    import { type Ref, ref, onMounted} from 'vue'
    const props = defineProps<{
        formula : string
    }>()
    const containerRef = ref(null) as unknown as Ref<HTMLElement>
    
    onMounted(() => {
      katex.render(props.formula, containerRef.value, { throwOnError: false})
      console.log("blehhhh")
    })
</script>
<template>
    <div class="equation-container" ref="containerRef">

    </div>
</template>
<!-- 
<template>
    hello
    <vue-mathjax :formula="formula"></vue-mathjax>
</template>

<script lang="ts">
import { VueMathjax } from 'vue-mathjax'
export default {
  components: {
    'vue-mathjax': VueMathjax
  }}
</script> -->
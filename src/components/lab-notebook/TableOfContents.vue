<script setup lang="ts">
    import { ref, onMounted, onUnmounted } from 'vue'
    import makeObserver from '@/components/lab-notebook/observe'

    const elements = ref<HTMLHeadingElement[]>()
    const observer = ref<IntersectionObserver>()
    const activeElementId = ref('')

    onMounted(() => {
        elements.value = Array.from(document.querySelectorAll("h2"))

        const handleIntersection = (entries: IntersectionObserverEntry[]) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    activeElementId.value = entry.target.innerHTML.trim()
                    console.log(activeElementId.value)
                }
            })
        }
        observer.value = makeObserver(elements.value, handleIntersection)
    })
    
    onUnmounted(() => {
        observer.value?.disconnect()
    })
    

</script>

<template>
    <div class="bg-notebookBg rounded-[3.2em] p-8 w-full flex flex-col items-center">
        <a v-for="(element, index) in elements" :key="index" :href="'#' + element.innerText"
            class="w-full text-subtitle-sm xl:text-subtitle rounded-[3.2em] my-1 py-2 px-6 hover:bg-gold hover:text-dark transition duration-200"
            :class="{ 'bg-gold text-dark': element.innerText.trim() == activeElementId}">
            {{ element.innerText }}
        </a>
    </div>
</template>
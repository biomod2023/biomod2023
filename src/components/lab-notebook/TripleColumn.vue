<script setup lang="ts">
import { ref, onMounted, watch } from 'vue'
import Bubble from './Bubble.vue'

const title = ref()
const id = ref('')
const scrollWindow = ref<HTMLElement>()
const scrollPos = ref(0)
const maxWidth = ref(0)

onMounted(() => {
  if (title.value) {
    id.value = title.value.textContent.trim()
  }
})

const handleToggleActivated = (state: boolean) => {
  if (state) {
    maxWidth.value = scrollWindow.value ? (scrollWindow.value?.scrollWidth - scrollWindow.value?.clientWidth) : 0
  }
}

const onScroll = () => {
  maxWidth.value = scrollWindow.value ? (scrollWindow.value?.scrollWidth - scrollWindow.value?.clientWidth) : 0
  if (scrollWindow.value?.scrollLeft == 0) scrollPos.value = 0
  if (scrollWindow.value?.scrollLeft == maxWidth.value/2) scrollPos.value = maxWidth.value/2
  if (scrollWindow.value?.scrollLeft == maxWidth.value) scrollPos.value = maxWidth.value
}
</script>

<template>
  <Bubble :always-dropdown="false" @toggle-activated="handleToggleActivated">
    <template #title>
      <slot name="title"></slot>
    </template>
    <template #body>
      <div class="flex flex-col items-center gap-4">
        <div
          ref="scrollWindow"          
          class="flex gap-8 w-full overflow-x-scroll snap-x snap-mandatory lg:overflow-x-auto"
          @scroll="onScroll"
        >
          <div
            class="min-w-full lg:min-w-0 lg:w-1/3 text-notebookText bg-slate p-6 rounded-[3.2em] snap-center"
          >
            <h3 class="text-subtitle-sm lg:text-subtitle text-white mb-4">
              <slot name="left-title"></slot>
            </h3>
            <slot name="left-body"></slot>
          </div>
          <div
              class="min-w-full lg:min-w-0 lg:w-1/3 text-notebookText bg-slate p-6 rounded-[3.2em] snap-center"
            >
              <h3 class="text-subtitle-sm lg:text-subtitle text-white mb-4">
                <slot name="mid-title"></slot>
              </h3>
              <slot name="mid-body"></slot>
            </div>
          <div
            class="min-w-full lg:min-w-0 lg:w-1/3 text-notebookText bg-slate p-6 rounded-[3.2em] snap-center"
          >
            <h3 class="text-subtitle-sm lg:text-subtitle text-white mb-4">
              <slot name="right-title"></slot>
            </h3>
            <slot name="right-body"></slot>
          </div>
        </div>
        <div v-if="$windowWidth < 1024" class="flex justify-center gap-4">
          <span
            :class="{
              'bg-notebookText': scrollPos == 0,
              'border border-notebookText': scrollPos != 0
            }"
            class="w-2 h-2 rounded-full transition duration-500"
          ></span>
          <span
            :class="{
              'bg-notebookText': scrollPos == maxWidth/2,
              'border border-notebookText': scrollPos != maxWidth/2
            }"
            class="w-2 h-2 rounded-full transition duration-500"
          ></span>
          <span
            :class="{
              'bg-notebookText': scrollPos == maxWidth,
              'border border-notebookText': scrollPos != maxWidth
            }"
            class="w-2 h-2 rounded-full transition duration-500"
            ></span>
        </div>
      </div>
    </template>
  </Bubble>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'

defineProps<{ alwaysDropdown: boolean }>()
defineEmits<{ (e: 'toggleActivated', state: boolean): void }>()

const title = ref()
const id = ref('')
const activated = ref(false)

onMounted(() => {
  if (title.value) {
    id.value = title.value.textContent.trim()
  }
})
</script>

<template>
  <div
    class="flex flex-col w-full bg-notebookBg p-4 rounded-[3.2em] transition-[max-height] duration-200 ease-in-out"
    :class="{
      'max-h-24': !activated && ($windowWidth < 1024 || alwaysDropdown),
      'max-h-full': activated || ($windowWidth >= 1024 && !alwaysDropdown)
    }"
  >
    <div
      class="p-4"
      :class="{
        'flex justify-between items-center align-middle mr-4 active:opacity-60':
          $windowWidth < 1024 || alwaysDropdown
      }"
      @click="
        () => {
          activated = !activated
          $emit('toggleActivated', activated)
        }
      "
    >
      <h2 :id="id" ref="title" class="font-title font-medium text-xl lg:text-2xl">
        <slot name="title"></slot>
      </h2>
      <svg
        v-if="$windowWidth < 1024 || alwaysDropdown"
        class="w-8"
        :class="{ 'rotate-180 ': activated }"
        viewBox="0 0 30 17"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M1.2074 1.25L14.7074 14.75L28.2074 1.25" stroke="#CDCDCD" stroke-width="3" />
      </svg>
    </div>
    <div
      class="overflow-hidden lg:overflow-auto"
      :class="{
        'height-0 pb-0 pt-4 px-4': ($windowWidth < 1024 || alwaysDropdown) && !activated,
        'p-4': ($windowWidth >= 1024 && !alwaysDropdown) || activated
      }"
    >
      <slot name="body"></slot>
    </div>
  </div>
</template>

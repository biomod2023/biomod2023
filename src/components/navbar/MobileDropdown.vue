<script setup lang="ts">
import { ref } from 'vue'

const activated = ref(false)

const activeAnim = 'transition-all duration-200 ease-in-out'
const flyIn = '-translate-y-4 opacity-0'
const flyOut = 'translate-y-4 opacity-0'
</script>

<template>
  <div>
    <span class="active:opacity-80" @click="activated = !activated">
      <span>
        <slot name="title"></slot>
        {{ activated ? '-' : '+' }}
      </span>
    </span>
    <Transition
      :enter-from-class="activated ? flyIn : flyOut"
      :leave-to-class="activated ? flyOut : flyIn"
      :enter-active-class="activeAnim"
      :leave-active-class="activeAnim + 'absolute'"
    >
      <div v-if="activated" class="mt-1 ml-4 pr-4 flex flex-col gap-2 font-semibold">
        <slot name="children"></slot>
      </div>
    </Transition>
  </div>
</template>

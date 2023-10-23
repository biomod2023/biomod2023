<script setup lang="ts">
import { ref } from 'vue'
import type { Ref } from 'vue'
import type { PropType } from 'vue'
import emptyPic from '@/assets/empty_profile.png'

import type { Member } from '@/components/Member'
const props = defineProps<{
  member: Member,
  wrapperStyle?: string,
}>()  
const cardConfig: string =
  'absolute w-full h-full rounded-[1.25rem] flex flex-col items-center gap-1 '
const isHovering: Ref<boolean> = ref(false)

const handleImgErr = (e: Event) => {
  const target = e.target as HTMLImageElement
  target.src = emptyPic
}
</script>

<template>
  <div :class="'relative  ' +  (props.wrapperStyle !== undefined ? props.wrapperStyle : '')">
    <TransitionGroup
      enter-active-class="transition-opacity duration-200 ease-in-out"
      leave-active-class="transition-opacity duration-200 ease-in"
      enter-from-class="opacity-0"
      enter-to-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <div
        v-show="!isHovering"
        key="main"
        :class="cardConfig + ' justify-center bg-gold/40'"
        @mouseenter="isHovering = true"
      >
        <img
          :src="member?.image"
          class="w-[8.2rem] h-[8.2rem] rounded-[5.7rem]"
          @error="handleImgErr"
        />
        <div class="flex flex-col items-center gap-0">
          <div class="text-base font-bold text-white">{{ member?.name }}</div>
          <div class="text-base font-normal text-gold">{{ member?.position }}</div>
        </div>
      </div>

      <div
        v-show="isHovering"
        key="alt"
        :class="cardConfig + ' bg-gold'"
        @mouseleave="isHovering = false"
      >
        <div class="flex flex-col items-center content-start gap-0 p-[0.5rem] max-h-full">
          <div class="text-lg font-bold text-white">{{ member?.name }}</div>
          <div class="text-xs font-normal relative bottom-1">
            {{ member?.major }} · {{ member?.year }}th
          </div>
          <p class="text-justify px-[1.6rem] overflow-y-scroll invisible-scroller">
            {{ member?.description }}
          </p>
        </div>
      </div>
    </TransitionGroup>
  </div>
</template>

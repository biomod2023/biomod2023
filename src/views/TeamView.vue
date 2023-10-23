<script setup lang="ts">
import { ref } from 'vue'
import type { Ref } from 'vue'
import { useSwipe } from '@vueuse/core'
import type { UseSwipeDirection } from '@vueuse/core'

import ProfileCard from '@/components/ProfileCard.vue'
import TransparentButton from '@/components/TransparentButton.vue'
import { teams, members } from '@/components/Member'

import ClickDetection from '@/components/utils/ClickDetection.vue'
import type { StyleValue } from 'vue'

let currIdx: Ref<number> = ref(0)
const maxMember = window.innerWidth >= 768 ? 6 : 3

const handleClick = (inc: number) => {
  let temp = (currIdx.value + inc) * maxMember
  if ((inc > 0 && temp < (members?.get(currTeam.value)?.length ?? 0)) || (inc < 0 && temp >= 0)) {
    currIdx.value += inc
    initialState.value = inc < 0 ? '-translate-x-full opacity-0' : 'translate-x-full opacity-0'
    finalState.value = inc < 0 ? 'translate-x-full opacity-0' : '-translate-x-full opacity-0'
    changingTeam.value = false
  }
  console.log(initialState)
}

let currTeam: Ref<string> = ref('Leads')
const handleTeamChange = (team: string) => {
  currTeam.value = team
  changingTeam.value = true
  currIdx.value = 0
  mobileTeamDropDown.value = false
}
let changingTeam: Ref<boolean> = ref(false)

let activeAnimation: string = 'transition duration-[1000ms] ease-in-out absolute'
let initialState: Ref<string> = ref('translate-x-full opacity-0')
let finalState: Ref<string> = ref('-translate-x-full opacity-0')

// Mobile
let mobileTeamDropDown: Ref<boolean> = ref(false)
let dropDownStyle = () => (mobileTeamDropDown.value ? 'rounded-t-[1.45rem]' : 'rounded-[1.45rem]')
const swipeableContainer = ref<HTMLElement | null>(null) as unknown as Ref<HTMLElement>
const swipedStyle = ref({
  left: '0px',
  opacity: 1,
  position: 'relative'
})
const { isSwiping, direction, lengthX, lengthY } = useSwipe(swipeableContainer, {
  passive: false,
  onSwipeStart(e: TouchEvent) {},
  onSwipe(e: TouchEvent) {
    const length = Math.abs(lengthX.value)
    swipedStyle.value.left = `${-lengthX.value}px`
    if (swipeableContainer.value?.offsetWidth) {
      swipedStyle.value.opacity = 1.1 - length / swipeableContainer.value?.offsetWidth
    }
  },
  onSwipeEnd(e: TouchEvent, dir: UseSwipeDirection) {
    const length = Math.abs(lengthX.value)
    if (length >= swipeableContainer.value?.offsetWidth * 0.5) {
      handleClick(length / lengthX.value)
    }
    swipedStyle.value.opacity = 1
    swipedStyle.value.left = '0px'
  }
})
</script>

<template>
  <div class="flex flex-col h-max bg-slate">
    <div class="flex flex-col items-center w-full h-full">
      <!-- Header -->
      <div class="flex flex-col w-full items-center">
        <h1 class="md:text-title text-title-sm text-center text-gold">Our Team</h1>
        <h2 class="text-subtitle/2 text-center text-gold">Behold the Amazing Folders!</h2>
      </div>

      <!-- Mobile -->
      <ClickDetection v-slot="{ setRef }" :callback="() => (mobileTeamDropDown = false)">
        <div class="w-full px-[3.3rem] py-[2rem] z-10">
          <div :ref="(currRef) => setRef(currRef as HTMLElement)" class="min-[866px]:hidden">
            <div
              :class="
                'w-full h-[3.4rem] bg-gold/60 flex flex-row items-center px-4 cursor-pointer ' +
                dropDownStyle()
              "
              @click="() => (mobileTeamDropDown = !mobileTeamDropDown)"
            >
              <v-icon class="grow-0" name="ri-team-fill" scale="2" />
              <h1 class="text-[1.1rem] font-semibold grow text-center pr-[25.3px]">Choose Team</h1>
              <span class="w-[0.82rem] h-[0.82rem] bg-white rounded-full"></span>
            </div>
            <div class="relative">
              <div
                v-if="mobileTeamDropDown"
                class="w-full h-fit bg-gold/60 absolute pb-4 flex flex-col items-center gap-y-[1rem] rounded-b-[1.45rem]"
              >
                <TransparentButton
                  v-for="(team, i) in teams"
                  :key="'mobile_' + i"
                  :is-disabled="team == currTeam"
                  @click="handleTeamChange(team)"
                  >{{ team }}</TransparentButton
                >
              </div>
            </div>
          </div>
        </div>
      </ClickDetection>

      <!-- Desktop -->
      <div
        class="hidden min-[866px]:gap-x-[1rem] min-[866px]:py-[2rem] min-[866px]:flex min-[866px]:flex-row lg:gap-x-[3rem]"
      >
        <TransparentButton
          v-for="(team, i) in teams"
          :key="i"
          :is-disabled="team == currTeam"
          @click="handleTeamChange(team)"
          >{{ team }}</TransparentButton
        >
      </div>

      <div class="flex flex-row gap-x-[1rem] pb-[1rem]">
        <div
          v-for="i in Math.ceil((members?.get(currTeam)?.length ?? 0) / maxMember)"
          :key="i"
          :class="
            'w-[0.5rem] h-[0.5rem] rounded-full border-[#8f8d8b] border-2 ' +
            (i - 1 == currIdx ? 'bg-[#8f8d8b]' : 'bg-transparent')
          "
        ></div>
      </div>

      <!-- Team Carousel -->
      <div
        class="flex justify-center items-center w-full h-[49.6rem] relative z-0 lg:px-[2rem] lg:gap-x-[1rem] xl:px-[8rem] xl:gap-x-[1rem]"
      >
        <v-icon
          v-if="$windowWidth >= 450"
          :class="
            'cursor-pointer relative bottom-[3rem] bg-transparent grow ' +
            (currIdx == 0 ? 'invisible' : '')
          "
          name="ri-arrow-drop-left-line"
          scale="3.5"
          fill="#8f8d8b"
          @click="handleClick(-1)"
        />

        <!-- Content -->
        <div class="relative h-full w-full overflow-hidden grow-0">
          <TransitionGroup
            :enter-from-class="initialState"
            :leave-to-class="finalState"
            :enter-active-class="activeAnimation"
            :leave-active-class="activeAnimation"
            :css="!changingTeam && $windowWidth >= 450"
          >
            <div
              :key="currIdx + 'wrapper'"
              ref="swipeableContainer"
              class="w-full h-full overflow-hidden"
              :style="$windowWidth >= 450 ? {} : (swipedStyle as StyleValue)"
            >
              <div
                class="grid grid-cols-1 place-items-center w-full h-fit gap-y-[2.47rem] md:grid-cols-2"
              >
                <ProfileCard
                  v-for="member in members
                    ?.get(currTeam)
                    ?.slice(currIdx * maxMember, (currIdx + 1) * maxMember)"
                  :key="member.name + currTeam"
                  :member="member"
                  wrapper-style="w-[19.5rem] lg:w-[24rem] h-[13rem]"
                />
              </div>
            </div>
          </TransitionGroup>
        </div>

        <v-icon
          v-if="$windowWidth >= 450"
          :class="
            'cursor-pointer relative bottom-[3rem] bg-transparent grow ' +
            (currIdx == Math.ceil((members?.get(currTeam)?.length ?? 0) / maxMember) - 1
              ? 'invisible'
              : '')
          "
          name="ri-arrow-drop-right-line"
          scale="3.5"
          fill="#8f8d8b"
          @click="handleClick(1)"
        />
      </div>
    </div>
  </div>
</template>

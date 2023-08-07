<script setup lang="ts">
import type { Member } from "@/components/Member"
import type { PropType } from "vue";
import { ref } from "vue";
import type { Ref } from "vue";
const props = defineProps({
    member: Object as PropType<Member>,
})
const cardConfig: string = "absolute w-full h-full rounded-[1.25rem] flex flex-col items-center gap-1"
const isHovering: Ref<boolean> = ref(false)
</script>

<template>
    <div class="relative w-[24rem] h-[13rem]">
        <TransitionGroup enter-active-class="transition-opacity duration-200 ease-in-out" 
            leave-active-class="transition-opacity duration-500 ease-in" 
            enter-from-class="opacity-0" enter-to-class="opacity-100" leave-to-class="opacity-0">

            <div :class="cardConfig + ' justify-center bg-gold/40'" @mouseenter="isHovering = true" 
                v-show="!isHovering" key="main">
                <img :src="member?.image" class="w-[8.2rem] h-[8.2rem] rounded-[5.7rem]" />
                <div class="flex flex-col items-center gap-0">
                    <div class="text-base font-bold text-white">{{ member?.name }}</div>
                    <div class="text-base font-normal text-gold">{{ member?.position }}</div>
                </div>
            </div>

            <div :class="cardConfig + ' bg-gold'" 
                @mouseleave="isHovering = false" v-show="isHovering" key="alt">
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
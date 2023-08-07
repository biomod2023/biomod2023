<script setup lang="ts">
    import { ref, watch } from "vue"
    import type { Ref } from "vue"
    import { HiSolidArrowSmRight, HiSolidArrowSmLeft  }from "oh-vue-icons/icons"
    import OhVueIcon from "oh-vue-icons"

    import NavBar from "@/components/NavBar.vue"
    import Footer from "@/components/Footer.vue"
    import ProfileCard from "@/components/ProfileCard.vue"
    import {Kshemaka, Miguel, members} from "@/components/Member"
    import type {Member} from "@/components/Member"

    let currIdx: Ref<number> = ref(0)
    const maxMembers = 6
    const handleClick = (inc: number) => {
        let temp = (currIdx.value + inc) * maxMembers
        if (inc > 0 && temp < members.length || inc < 0 && temp >= 0) {
            currIdx.value += inc
            initialState.value = inc < 0 ? "-translate-x-full opacity-0" : "translate-x-full opacity-0" 
            finalState.value = inc < 0 ? "translate-x-full opacity-0" : "-translate-x-full opacity-0" 
        }
    console.log(initialState)
    }

    let activeAnimation: string = "transition duration-[1000ms] ease-in-out absolute"
    let initialState: Ref<string> = ref("translate-x-full opacity-0")
    let finalState: Ref<string> = ref("-translate-x-full opacity-0")
</script>

<template>
    <div class="flex flex-col h-max bg-slate">
        <NavBar/>

        <div class="flex flex-col items-center w-full h-full">
            <!-- Header -->
            <div class="flex flex-col w-full items-center">
                <h1 class="text-title text-gold">
                    Our Team
                </h1> 
                <h2 class="text-subtitle text-gold">
                    Behold the Amazing Folders!
                </h2>
            </div>

            <!-- Team Carousel -->
            <div class="flex justify-center items-center w-[68.5rem] h-[49.6rem]">
                <v-icon name="hi-solid-arrow-sm-left" scale="3" @click="handleClick(-1)"/>
                
                <!-- Content -->
                <div class="relative h-full w-full overflow-hidden">
                    <TransitionGroup :enter-from-class="initialState" :leave-to-class="finalState"
                        :enter-active-class="activeAnimation" 
                        :leave-active-class="activeAnimation">

                        <div class="flex flex-wrap content-start justify-center h-full gap-x-[6.6rem] gap-y-[2.47rem]" 
                            v-for="i in [currIdx]" :key="i">
                            <ProfileCard v-for="member in members.slice(currIdx * maxMembers, (currIdx + 1) * maxMembers)" 
                                :member="member" :key="member.name"/>
                        </div>
                    </TransitionGroup>
                </div>

                <v-icon name="hi-solid-arrow-sm-right" scale="3" @click="handleClick(1)"/>
            </div>

        </div>
        
        <div class="flex flex-col justify-end grow w-full">
            <Footer />
        </div>
    </div>
</template>
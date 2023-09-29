<script setup lang="ts">
import { ref } from 'vue'
import ELSICardGallery from '@/components/ELSI/ELSICardGallery.vue'
import Hospitals from '@/components/ELSI/categories/Hospitals.vue'
import Universities from '@/components/ELSI/categories/Universities.vue'
import Agriculture from '@/components/ELSI/categories/Agriculture.vue'
import Home from '@/components/ELSI/categories/Home.vue'
import ResearchFacilities from '@/components/ELSI/categories/ResearchFacilities.vue'
import HospitalLab from '@/components/ELSI/categories/HospitalLab.vue'
import Businesses from '@/components/ELSI/categories/Businesses.vue'

const categories = [
  {
    name: 'Hospitals',
    component: Hospitals
  },
  {
    name: 'Universities',
    component: Universities
  },
  {
    name: 'Agriculture',
    component: Agriculture
  },
  {
    name: 'Home',
    component: Home
  },
  {
    name: 'Research Facilities',
    component: ResearchFacilities
  },
  {
    name: 'Hospital Lab',
    component: HospitalLab
  },
  {
    name: 'Businesses',
    component: Businesses
  }
]

let currentSelection = ref(0)
let increasing = ref(true)

const fromRightAnim = 'translate-x-1/4 opacity-0'
const fromLeftAnim = '-translate-x-1/4 opacity-0'
const activeAnim = 'transition duration-150 ease-in-out'

const setSelection = (num: number) => {
  if (num >= currentSelection.value) increasing.value = true
  else increasing.value = false
  currentSelection.value = num
}
</script>

<template>
  <div class="flex flex-col bg-slate">
    <div class="w-full flex flex-col items-center px-6">
      <h1 class="font-title text-title-sm lg:text-title text-gold text-center mb-4">
        Ethical, Legal, and Social Issues
      </h1>

      <ELSICardGallery @current-selection="setSelection" />

      <div class="w-full flex flex-col py-8 px-2 md:px-10 xl:px-32 overflow-hidden">
        <Transition
          mode="out-in"
          :enter-from-class="increasing ? fromRightAnim : fromLeftAnim"
          :leave-to-class="increasing ? fromLeftAnim : fromRightAnim"
          :enter-active-class="activeAnim"
          :leave-active-class="activeAnim"
        >
          <span :key="currentSelection" class="ml-[-100%] mr-[-100%] md:mx-0">
            <h1
              class="text-title-sm lg:text-title text-gray-300 w-full text-center md:text-start md:pl-8 pb-2"
            >
              {{ categories[currentSelection].name }}
            </h1>
          </span>
        </Transition>

        <div
          class="flex flex-col justify-center w-full text-black bg-gray-300 rounded-[3em] p-8 m-auto"
        >
          <Transition
            mode="out-in"
            :enter-from-class="increasing ? fromRightAnim : fromLeftAnim"
            :leave-to-class="increasing ? fromLeftAnim : fromRightAnim"
            :enter-active-class="activeAnim"
            :leave-active-class="activeAnim"
          >
            <component :is="categories[currentSelection].component"></component>
          </Transition>
        </div>
      </div>
    </div>
  </div>
</template>

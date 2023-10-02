<script setup lang="ts">
import ELSICard from '@/components/ELSI/ELSICard.vue'
import HospitalsGraphic from '@/components/ELSI/graphics/HospitalsGraphic.vue'
import UniversitiesGraphic from '@/components/ELSI/graphics/UniversitiesGraphic.vue'
import AgricultureGraphic from '@/components/ELSI/graphics/AgricultureGraphic.vue'
import HomesGraphic from '@/components/ELSI/graphics/HomesGraphic.vue'
import ResearchFacilitiesGraphic from '@/components/ELSI/graphics/ResearchFacilitiesGraphic.vue'
import HospitalLabsGraphic from '@/components/ELSI/graphics/HospitalLabsGraphic.vue'
import BusinessesGraphic from '@/components/ELSI/graphics/BusinessesGraphic.vue'
import { ref } from 'vue'

const emit = defineEmits(['currentSelection'])

const graphics = [
  {
    name: 'Hospitals',
    graphic: HospitalsGraphic
  },
  {
    name: 'Universities',
    graphic: UniversitiesGraphic
  },
  {
    name: 'Agriculture',
    graphic: AgricultureGraphic
  },
  {
    name: 'Homes',
    graphic: HomesGraphic
  },
  {
    name: 'Research Facilities',
    graphic: ResearchFacilitiesGraphic
  },
  {
    name: 'Hospital Labs',
    graphic: HospitalLabsGraphic
  },
  {
    name: 'Businesses',
    graphic: BusinessesGraphic
  }
]

let currentSelection = ref(0)

const setSelection = (num: number) => {
  currentSelection.value = num
  emit('currentSelection', num)
}
</script>

<template>
  <div class="w-full flex items-center gap-8 overflow-x-scroll">
    <ELSICard
      v-for="(graphic, i) in graphics"
      :key="i"
      :class="{ 'ml-auto': i == 0, 'mr-auto': i == graphics.length - 1 }"
      :currently-selected="currentSelection == i"
      @click="setSelection(i)"
    >
      <template #svg>
        <component :is="graphic.graphic" :current-selection="currentSelection"></component>
      </template>

      <template #text>{{ graphic.name }}</template>
    </ELSICard>
  </div>
</template>

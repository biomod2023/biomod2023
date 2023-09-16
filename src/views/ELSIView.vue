<script setup lang="ts">
import { ref } from 'vue'
import ELSICardGallery from '@/components/ELSI/ELSICardGallery.vue'
import Doctors from '@/components/ELSI/Doctors.vue'

let currentSelection = ref(0);
</script>

<template>
  <div class="flex flex-col bg-slate">
    <div class="w-full flex flex-col items-center px-6">
      <h1 class="font-title text-title-sm lg:text-title text-gold text-center mb-4">
        Ethical, Legal, and Social Issues
      </h1>

      <ELSICardGallery @current-selection="(num) => currentSelection = num"/>

      <div class="w-5/6 text-black bg-gray-300 rounded-[3em] p-8 m-4">
        <Doctors v-if="currentSelection == 0" />
      </div>
    </div>
  </div>
</template>

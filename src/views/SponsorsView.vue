<script setup lang="ts">
import SponsorItem from '@/components/sponsors/SponsorItem.vue';
import SponsorTier from '@/components/sponsors/SponsorTier.vue';
import SilverImgBackground from '@/components/sponsors/SilverImgBackground.vue';
</script>

<template>
  <div class="flex flex-col items-center p-8 gap-12 bg-[url('../assets/sponsors/dna.png')] bg-no-repeat bg-contain bg-[center_top_58%] lg:bg-[center_top_65%]">
    <h1 class="text-title-sm lg:text-title text-gold mb-6 lg:mb-20 text-center">Special Thanks to our Sponsors</h1>

    <SponsorTier color="bg-gold">
      Gold Tier
    </SponsorTier>
    <SponsorItem>
      <template #img>
        <span class="absolute overflow-hidden -top-[20vw] md:-top-[15vw] lg:-top-[12vw] xl:-top-[9vw] -ml-[43vw] md:-ml-[35vw] lg:-ml-[8vw] xl:-ml-[4vw]">
          <SilverImgBackground />
        </span>
        <a href="https://abcellera.com/" target="_blank" class="relative z-10 hover:opacity-100">
          <img src="../assets/sponsors/abcellera.jpg" alt="AbCellera Logo">
        </a>       
      </template>
      <template #title>
        AbCellera
      </template>
      <template #description>
        AbCellera is breaking the barriers of conventional antibody drug discovery to bring better medicines to patients,
        sooner. AbCellera’s engine integrates expert teams, technology, and facilities with the data science and
        automation needed to propel antibody-based medicines from target to clinic in nearly every therapeutic area with
        precision and speed. AbCellera provides innovative biotechs and leading pharmaceutical companies with a
        competitive advantage that empowers them to move quickly, reduce cost, and tackle the toughest problems in drug
        development.
      </template>
    </SponsorItem>

    <SponsorTier color="bg-gray-300">
      Silver Tier
    </SponsorTier>
    <SponsorItem>
      <template #img>
        <a href="https://vpstudents.ubc.ca/walter-gage/" target="_blank" class="hover:opacity-100">
          <img src="../assets/sponsors/walter_gage.png" alt="UBC Walter H. Gage Memorial Fund Logo">
        </a>
      </template>
      <template #title>
          Walter H. Gage Memorial Fund
        </template>
      <template #description>
        The Walter H. Gage Memorial Fund provides financial support for non-curricular student projects and activities that enhance the University’s reputation and have broad interest to students at UBC.
      </template>
    </SponsorItem>

    <SponsorTier color="bg-yellow-600">
      Bronze Tier
    </SponsorTier>
    <div class="grid md:grid-cols-2 gap-20 px-6 lg:px-36 my-6 lg:my-28 place-content-center">
      <a href="https://ecoscope.microbiology.ubc.ca/" target="_blank">
        <img src="../assets/sponsors/ecoscope.png" alt="ECOSCOPE Logo" class="w-full">
      </a>
      <a href="https://bme.ubc.ca/" target="_blank">
        <img src="../assets/sponsors/sbme.jpg" alt="UBC School of Biomedical Engineering Logo" class="w-full">
      </a>
      <a href="https://biochem.ubc.ca/" target="_blank">
        <img src="../assets/sponsors/fom.png" alt="UBC Faculty of Medicine Logo" class="w-full">
      </a>
      <a href="https://chbe.ubc.ca/" target="_blank">
        <img src="../assets/sponsors/cbe.jpg" alt="UBC Department of Chemical and Biological Engineering Logo" class="w-full">
      </a>
    </div>

    
  </div>
</template>
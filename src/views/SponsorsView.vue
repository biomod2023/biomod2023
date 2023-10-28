<script setup lang="ts">
import { ref, watch } from 'vue'
import { useScroll } from '@vueuse/core'
import SponsorItem from '@/components/sponsors/SponsorItem.vue'
import SponsorTier from '@/components/sponsors/SponsorTier.vue'
import SilverImgBackground from '@/components/sponsors/SilverImgBackground.vue'
import StevenHallam from '@/assets/sponsors/Steven.jpg'
import HanCock from '@/assets/sponsors/Dr_Hancock.jpg'
import BrandonKieft from '@/assets/sponsors/Brandon_Kieft-e1662700315238.jpeg'
import AbishekWadhwa from '@/assets/sponsors/Abishek_Wadhwa.jpg'
import AdrianJanGredwosk from '@/assets/sponsors/Adrian_Jan_Grezedowski.jpg'
import DanBizzotto from '@/assets/sponsors/Dan_Bizzotto.jpg'
import ResmiRadhamony from '@/assets/sponsors/Resmi-Radhamony-min.jpg'
import MarleneChow from '@/assets/sponsors/Marlene_Chow.png'
import { onMounted } from 'vue'

const advisorCarousel = ref<HTMLElement | null>(null)
const currIdx = ref<Number>(0)
const maxCarouselPage = ref(0)
const widthPerCarouselPage = ref(0)
const { x } = useScroll(advisorCarousel)
watch(x, (newX) => {
  currIdx.value = Math.ceil(newX / widthPerCarouselPage.value)
})
onMounted(() => {
  if (advisorCarousel.value && advisorCarousel.value?.children[0]) {
    widthPerCarouselPage.value = advisorCarousel.value?.children[0].clientWidth
    let numCols = Math.ceil(advisorCarousel.value?.children.length / 2)
    let numColsPerPage = Math.floor(advisorCarousel.value.clientWidth / widthPerCarouselPage.value)
    maxCarouselPage.value = Math.ceil(numCols / numColsPerPage) + (numColsPerPage % 2 == 0 ? 1 : 0)
  }
})

const acknowledgements = [
  'Dr. Hancock',
  'Dr. Miffy Cheng',
  'Dr. Steven D. Perrault',
  'Dr. William Shih',
  'Dr. Thorsten-Lars Schmidt',
  'Eashan Halbe'
]
const advisors = [
  {
    name: 'Dr. Steven Hallam',
    profile: StevenHallam,
    position: 'Associate Professor',
    location: 'University of British Columbia'
  },
  {
    name: 'Resmi Radhamony',
    profile: ResmiRadhamony,
    position: 'Hallam Lab manager',
    location: 'University of British Columbia'
  },
  {
    name: 'Brandon Kieft',
    profile: BrandonKieft,
    position: 'Postdoctoral Research Fellow',
    location: 'University of British Columbia'
  },
  {
    name: 'Abishek Wadhwa',
    profile: AbishekWadhwa,
    position: 'Graduate Student Research Assistant',
    location: 'University of British Columbia'
  },
  {
    name: 'Marlene Chow',
    profile: MarleneChow,
    position: 'Director of Academic Programs, Administration and Resources',
    location: 'University of British Columbia'
  },
  {
    name: 'Adrian Jan Gredwosk',
    profile: AdrianJanGredwosk,
    position: 'Graduate Student',
    location: 'University of British Columbia'
  },
  {
    name: 'Dan Bizzotto',
    profile: DanBizzotto,
    position: 'Associate Professor',
    location: 'University of British Columbia'
  }
]
</script>

<template>
  <div
    class="flex flex-col items-center p-8 gap-12 bg-[url('../assets/sponsors/dna.png')] bg-no-repeat bg-contain bg-[center_top_58%] lg:bg-[center_top_65%]"
  >
    <h1 class="text-title-sm lg:text-title text-gold mb-6 lg:mb-20 text-center">
      Special Thanks to our Sponsors
    </h1>

    <SponsorTier color="bg-gold"> Gold Tier </SponsorTier>
    <SponsorItem>
      <template #img>
        <span
          class="absolute overflow-hidden -top-[20vw] md:-top-[15vw] lg:-top-[12vw] xl:-top-[9vw] -ml-[43vw] md:-ml-[35vw] lg:-ml-[8vw] xl:-ml-[4vw]"
        >
          <SilverImgBackground />
        </span>
        <a href="https://abcellera.com/" target="_blank" class="relative z-10 hover:opacity-100">
          <img src="../assets/sponsors/abcellera.jpg" alt="AbCellera Logo" />
        </a>
      </template>
      <template #title> AbCellera </template>
      <template #description>
        AbCellera is breaking the barriers of conventional antibody drug discovery to bring better
        medicines to patients, sooner. AbCellera’s engine integrates expert teams, technology, and
        facilities with the data science and automation needed to propel antibody-based medicines
        from target to clinic in nearly every therapeutic area with precision and speed. AbCellera
        provides innovative biotechs and leading pharmaceutical companies with a competitive
        advantage that empowers them to move quickly, reduce cost, and tackle the toughest problems
        in drug development.
      </template>
    </SponsorItem>

    <SponsorTier color="bg-gray-300"> Silver Tier </SponsorTier>
    <SponsorItem>
      <template #img>
        <a href="https://vpstudents.ubc.ca/walter-gage/" target="_blank" class="hover:opacity-100">
          <img
            src="../assets/sponsors/walter_gage.png"
            alt="UBC Walter H. Gage Memorial Fund Logo"
          />
        </a>
      </template>
      <template #title> Walter H. Gage Memorial Fund </template>
      <template #description>
        The Walter H. Gage Memorial Fund provides financial support for non-curricular student
        projects and activities that enhance the University’s reputation and have broad interest to
        students at UBC.
      </template>
    </SponsorItem>

    <SponsorTier color="bg-yellow-600"> Bronze Tier </SponsorTier>
    <div class="grid md:grid-cols-2 gap-20 px-6 lg:px-36 my-6 lg:my-28 place-content-center">
      <a href="https://ecoscope.microbiology.ubc.ca/" target="_blank">
        <img src="../assets/sponsors/ecoscope.png" alt="ECOSCOPE Logo" class="w-full" />
      </a>
      <a href="https://bme.ubc.ca/" target="_blank">
        <img
          src="../assets/sponsors/sbme.jpg"
          alt="UBC School of Biomedical Engineering Logo"
          class="w-full"
        />
      </a>
      <a href="https://biochem.ubc.ca/" target="_blank">
        <img src="../assets/sponsors/fom.png" alt="UBC Faculty of Medicine Logo" class="w-full" />
      </a>
      <a href="https://chbe.ubc.ca/" target="_blank">
        <img
          src="../assets/sponsors/cbe.jpg"
          alt="UBC Department of Chemical and Biological Engineering Logo"
          class="w-full"
        />
      </a>
    </div>

    <div class="w-full flex flex-col items-center">
      <h1 class="text-title-sm lg:text-title text-gold text-center">Advisors</h1>
      <div
        ref="advisorCarousel"
        class="flex flex-col flex-wrap flex-none w-full h-[36rem] gap-x-2 gap-y-5 overflow-x-scroll snap-x snap-mandatory place-content-stretch md:gap-x-7 md:grid md:grid-cols-3 md:w-fit md:h-fit md:place-content-stretch md:overflow-x-clip"
      >
        <div
          v-for="(advisor, i) in advisors"
          :key="advisor.name + i"
          class="w-[15rem] h-[17rem] bg-gold/40 gap-y-4 snap-center snap-always flex flex-col justify-center items-center md:w-auto lg:w-[20rem] lg:h-[22rem]"
        >
          <img
            class="w-[8rem] h-[8rem] rounded-full object-top object-cover lg:w-[12rem] lg:h-[12rem]"
            :src="advisor.profile"
          />
          <div class="text-center">
            <div class="">
              <b> {{ advisor.name }} </b>
            </div>
            <div class="text-sm">
              <p>{{ advisor.position }}</p>
              <p>{{ advisor.location }}</p>
            </div>
          </div>
        </div>
      </div>
      <!-- <div class="flex justify-center gap-4"
        v-if="$windowWidth < 768">
        <span
          :class="{
            'bg-notebookText' : currIdx == (i - 1),
            'border border-notebookText': currIdx != (i - 1)
          }"
          class="w-2 h-2 rounded-full transition duration-500"
          v-for="i in maxCarouselPage"
          :key="i"
        ></span>
      </div> -->
    </div>

    <div>
      <h1 class="text-[1.8rem] font-medium text-gold text-center lg:text-[3rem]">
        Acknowledgements
      </h1>
      <section class="text-center">
        <h3 class="text-subtitle-sm" v-for="p in acknowledgements" :key="p">{{ p }}</h3>
      </section>
    </div>
  </div>
</template>

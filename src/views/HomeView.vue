<script setup lang="ts">
import LightButton from '@/components/LightButton.vue'

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}
</script>

<template>
  <div class="flex flex-col bg-slate">
    <div class="px-6 flex flex-col justify-center min-h-[100dvh] bg-gradient-to-b from-dark via-dark via-90% to-slate">
      <div class="flex relative justify-center lg:justify-start lg:items-center h-full lg:mt-16 lg:mb-28">
        <img src="../assets/homepage/title_graphic.png" alt="" class="absolute top-[5dvw] md:top-[3dvw] lg:top-0 right-[4dvw] md:right-[7dvw] lg:right-0 w-[80dvw] lg:w-auto lg:h-full animate-breathe">
        <div class="z-10 lg:basis-4/6 h-full flex flex-col justify-center items-center mt-[2dvh] md:mt-20 lg:mt-0 bg-[url('../assets/homepage/title_background.svg')] bg-no-repeat bg-[50%_80dvh] lg:bg-[30%_50%]">
          <h1 class="font-title text-title-sm lg:text-title text-center mb-4">
            Embrace the Nano Frontier
          </h1>
          <h2 class="text-subtitle-sm lg:text-subtitle w-3/4 lg:w-1/2 text-center">
            Unleash the Nano Frontier, where a new era of technology begins. Pioneering advancements
            redefine possibilities. Embrace the future with us.
          </h2>
          <button class="btn mt-8 lg:mt-16">Explore</button>
        </div>
      </div>
    </div>

    <div class="flex flex-col bg mb-8">
      <!-- <span class="w-full h-28 lg:h-40 bg-gradient-to-b from-dark to-slate"></span> -->
      <div class="p-4 flex flex-col gap-4 lg:gap-0 lg:flex-row mx-4 lg:mx-28 lg:mt-10">
        <div class="lg:w-1/2">
          <h1 class="font-title font-semibold text-[2.5rem] lg:text-title text-gold">
            The smallest of beginnings
          </h1>
          <div class="flex items-center mt-2 gap-4 lg:gap-28">
            <svg
              class="w-16 lg:w-32 stroke-[6] lg:stroke-[3]"
              viewBox="0 0 127 4"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <line y1="2" x2="127" y2="2" stroke="#E2B764" />
            </svg>
            <LightButton>Learn More</LightButton>
          </div>
        </div>
        <div class="lg:w-1/2">
          <p class="lg:mt-5 lg:text-subtitle lg:text-right">
            Our submission to the biomolecular design competition is a testament to our team's
            unwavering commitment to pushing the boundaries of what's possible in the field of
            biomolecular engineering. Our project not only addresses a pressing global health
            concern but also showcases the immense potential of biomolecular design to provide
            innovative solutions to real-world problems.
          </p>
        </div>
      </div>
    </div>

    <div
      class="flex flex-col lg:flex-row items-center justify-around lg:py-20 px-10 lg:mt-10 lg:bg-[url('../assets/homepage/abstract_bg.png')] bg-no-repeat bg-[23%_3%]"
    >
      <div
        class="lg:basis-1/2 pb-12 lg:pb-32 md:mt-12 lg:mt-10 pt-32 lg:pt-36 h-full px-10 md:px-32 lg:px-20 bg-[url('../assets/homepage/abstract_image_bg.png')] bg-no-repeat bg-cover bg-[50%_50%] lg:bg-[45%_50%]"
      >
        <div
          class="m-auto w-64 h-64 lg:w-[30rem] lg:h-[30rem] bg-white rounded-full drop-shadow-[-40px_-10px_20px_rgba(0,0,0,1)]"
        ></div>
      </div>

      <div
        class="flex flex-col items-center lg:items-start lg:justify-center text-center lg:text-left w-full lg:max-w-[50%] lg:h-full gap-4 lg:gap-10 lg:mt-0 lg:pr-4 lg:bg-[url('../assets/homepage/abstract_title_bg.png')] bg-no-repeat bg-[10%_0%]"
      >
        <h1 class="font-title text-[4rem] lg:text-[5rem] text-gold">Abstract</h1>
        <p class="text-subtitle-sm lg:text-subtitle">
          Biofilms are layers of bacterial communities that can adhere to one another within a
          self-produced matrix. They can attach to a variety of surfaces including human tissue,
          causing severe healthcare and environmental issues. Traditional strategies for combating
          biofilms include the use of antibiotics and interference of bacterial layer formation.
          However, removing biofilms using these methods can be challenging due to antibiotic
          resistance and unexpected pathogenic features arising from interference strategies. To
          address this issue, we aim to create a modular enzyme delivery vehicle. This structure
          consists of a DNA-templated liposome, conjugated with variable enzymes, referred to as an
          “enzymosome”. By forming our liposomes around DNA-origami structures, which can be altered
          to modify their size and shape, we can create a customizable platform. Among the DNA
          structures developed – a trihedron, pentahedron, and octahedron – all three demonstrated
          high stability in CanDo©. Future investigations include testing enzyme synergy with
          liposomes and validation of the platform in vitro. The modularity of the enzymosome can
          address biofilms present in various environments such as in cystic fibrosis patients, food
          facilities, and water systems. By changing the cargo type and liposome size, this delivery
          vehicle provides potential to be used across a wide range of applications.
        </p>
      </div>
    </div>

    <div
      class="mask flex flex-col gap-2 pt-16 items-center bg-[url:url(../assets/homepage/video_bg.png),theme('backgroundImage.gradient-to-b')] from-slate via-dark via-10% to-dark bg-cover bg-no-repeat bg-center"
    >
      <div class="font-title text-title-sm lg:text-title text-center lg:-mb-4">Watch us Fold</div>
      <svg
        width="150"
        height="3"
        viewBox="0 0 150 3"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <line y1="1.5" x2="150" y2="1.5" stroke="#E2B764" stroke-width="3" />
      </svg>

      <div class="bg-white w-5/6 lg:w-3/4 h-52 lg:h-[40rem] m-8"></div>

      <button class="btn !py-4 mt-2 mb-8 group" @click="scrollToTop">
        <svg
          class="w-5 lg:w-6 fill-gold group-hover:fill-black transition-all duration-200"
          viewBox="0 0 24 36"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M13.0607 0.939339C12.4749 0.353554 11.5251 0.353554 10.9393 0.939339L1.3934 10.4853C0.807611 11.0711 0.807611 12.0208 1.3934 12.6066C1.97919 13.1924 2.92893 13.1924 3.51472 12.6066L12 4.12132L20.4853 12.6066C21.0711 13.1924 22.0208 13.1924 22.6066 12.6066C23.1924 12.0208 23.1924 11.0711 22.6066 10.4853L13.0607 0.939339ZM13.5 36L13.5 2H10.5L10.5 36H13.5Z"
          />
        </svg>
      </button>
    </div>
  </div>
</template>

<style>
.bg {
  @apply w-full bg-no-repeat;
  background-image: url('../assets/homepage/bg_rot_mobile_fade.png'),
    url('../assets/homepage/bg_top_mobile_fade.png');
  background-position: left 3em, 100% 5.5em;
}

@media only screen and (min-width: 1024px) {
  .bg {
    @apply w-full bg-no-repeat;
    background-image: url('../assets/homepage/bg_rot_fade.png'),
      url('../assets/homepage/bg_top_fade.png');
    background-position: -2% 5%, right 5%;
  }
}

.mask {
  mask: linear-gradient(to bottom, transparent, black 5%);
}
</style>

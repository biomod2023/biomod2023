<script setup lang="ts">
import LightButton from '@/components/LightButton.vue'

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}
</script>

<template>
  <div class="flex flex-col bg-slate">
    <div class="px-6 flex flex-col justify-center min-h-[80vh] bg-dark">
      <div class="w-full flex flex-col items-center">
        <h1 class="font-title text-title-sm lg:text-title text-center mb-4">
          Embrace the Nano Frontier
        </h1>
        <h2 class="text-subtitle-sm lg:text-subtitle w-3/4 lg:w-1/2 text-center">
          Unleash the Nano Frontier, where a new era of technology begins. Pioneering advancements
          redefine possibilities. Embrace the future with us.
        </h2>
        <button class="btn mt-20">Explore</button>
      </div>
    </div>

    <div class="flex flex-col bg">
      <span class="w-full h-40 bg-gradient-to-b from-dark to-slate"></span>
      <div class="p-4 lg:w-1/2 ml-4 lg:ml-28 mt-4 lg:mt-10 grad">
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
        <h1 class="font-title text-[5rem] text-gold">Abstract</h1>
        <p class="text-subtitle-sm lg:text-subtitle">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
          ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
          sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
          est laborum.
        </p>
      </div>
    </div>

    <div
      class="mask flex flex-col gap-2 pt-16 items-center bg-[url:theme('backgroundImage.video'),theme('backgroundImage.gradient-to-b')] from-slate via-dark via-10% to-dark bg-cover bg-no-repeat bg-center"
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
  background-position:
    -2% 5%,
    right 6%;
}

@media only screen and (min-width: 1024px) {
  .bg {
    @apply w-full bg-no-repeat;
    background-image: url('../assets/homepage/bg_rot_fade.png'),
      url('../assets/homepage/bg_top_fade.png'), url('../assets/homepage/bg.png');
    background-position:
      -2% 5%,
      right 5%,
      right 25%;
  }
}

.mask {
  mask: linear-gradient(to bottom, transparent, black 5%);
}
</style>

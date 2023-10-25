<script setup lang="ts">
import IdeaCard from '@/components/IdeaCard.vue'
import Timeline from '@/components/Timeline.vue'
</script>

<template>
  <div class="flex flex-col h-screen overflow-y-auto">
    <NavBar />

    <main class="pt-2 flex flex-col items-center mt-20">
      <h1 class="text-gold font-title text-title">Project Ideas</h1>
      <p class="text-subtitle-sm lg:text-subtitle w-3/4 lg:w-1/2 text-center">
        Our project is always of our team's interest. Follow along to see how we incorperated our
        intersts into this year's project.
      </p>
    </main>

    <div class="flex flex-col items-center justify-center h-screen">
      <div class="flex space-x-10 mt-10">
        <IdeaCard class="flex-grow">
          <template #svg>
            <svg
              class="stroke-gold group-hover:stroke-white w-[100px] h-[100px] stroke-[0.9px] transition-all duration-200"
              width="62"
              height="101"
              viewBox="0 0 62 101"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M43.8279 94.6792L44.0263 95.1382L43.8279 94.6792ZM32.0084 99.7897L32.2068 100.249L32.0084 99.7897ZM29.9916 99.7897L29.7931 100.249H29.7931L29.9916 99.7897ZM18.1721 94.6792L17.9737 95.1382L18.1721 94.6792ZM43.9878 74.9467L43.6731 75.3352L43.9878 74.9467ZM26.2641 80.3578C25.988 80.3578 25.7641 80.5817 25.7641 80.8578C25.7641 81.134 25.988 81.3578 26.2641 81.3578V80.3578ZM22.771 85.5367C23.0472 85.5367 23.271 85.3129 23.271 85.0367C23.271 84.7606 23.0472 84.5367 22.771 84.5367V85.5367ZM31.2127 88.7119C30.9366 88.7119 30.7127 88.9357 30.7127 89.2119C30.7127 89.488 30.9366 89.7119 31.2127 89.7119V88.7119ZM32.7066 23.1172C32.9828 23.1172 33.2066 22.8933 33.2066 22.6172C33.2066 22.341 32.9828 22.1172 32.7066 22.1172V23.1172ZM32.5148 72.8379C32.5148 73.114 32.7387 73.3379 33.0148 73.3379C33.2909 73.3379 33.5148 73.114 33.5148 72.8379H32.5148ZM33.0148 50.5786L33.0124 50.0786L33.0148 50.5786ZM33.0148 44.752L33.0124 45.252L33.0148 44.752ZM33.0148 39.5112L33.0182 40.0112L33.0148 39.5112ZM33.0148 61.6463H33.5148C33.5148 61.3702 33.2909 61.1463 33.0148 61.1463V61.6463ZM1.5 29.6987C1.5 14.1457 14.6865 1.5 31 1.5V0.5C14.1764 0.5 0.5 13.552 0.5 29.6987H1.5ZM31 1.5C47.3135 1.5 60.5 14.1457 60.5 29.6987H61.5C61.5 13.552 47.8236 0.5 31 0.5V1.5ZM12.3557 55.8526C12.3557 50.8969 9.53307 46.896 6.84193 42.9193C4.11998 38.8971 1.5 34.8646 1.5 29.6987H0.5C0.5 35.2105 3.30786 39.4813 6.01375 43.4798C8.75045 47.5238 11.3557 51.261 11.3557 55.8526H12.3557ZM60.5 29.6987C60.5 34.8665 57.8779 38.9856 55.1566 43.0497C52.4692 47.0633 49.6442 51.0674 49.6442 55.8526H50.6442C50.6442 51.4327 53.2472 47.6987 55.9876 43.6061C58.6942 39.5639 61.5 35.2086 61.5 29.6987H60.5ZM43.6294 94.2203L31.81 99.3308L32.2068 100.249L44.0263 95.1382L43.6294 94.2203ZM30.19 99.3308L18.3705 94.2203L17.9737 95.1382L29.7931 100.249L30.19 99.3308ZM31.81 99.3308C31.2881 99.5564 30.7118 99.5564 30.19 99.3308L29.7931 100.249C30.5682 100.584 31.4317 100.584 32.2068 100.249L31.81 99.3308ZM15.9064 91.8155C15.9064 93.2579 16.7052 94.5897 17.9737 95.1382L18.3705 94.2203C17.5095 93.848 16.9064 92.9061 16.9064 91.8155H15.9064ZM45.0936 91.8155C45.0936 92.9061 44.4905 93.848 43.6294 94.2203L44.0263 95.1382C45.2948 94.5897 46.0936 93.2579 46.0936 91.8155H45.0936ZM41.0604 73.4213H20.9396V74.4213H41.0604V73.4213ZM41.0604 74.4213C42.0597 74.4213 42.9708 74.7664 43.6731 75.3352L44.3025 74.5581C43.4252 73.8476 42.2928 73.4213 41.0604 73.4213V74.4213ZM43.6731 75.3352C44.5469 76.0429 45.0936 77.0921 45.0936 78.2579H46.0936C46.0936 76.7686 45.3932 75.4415 44.3025 74.5581L43.6731 75.3352ZM49.6442 55.8526C49.6442 65.1145 47.1972 71.0223 43.6339 74.5935L44.3417 75.2998C48.1503 71.4829 50.6442 65.2838 50.6442 55.8526H49.6442ZM16.9064 78.2579C16.9064 77.0923 17.4529 76.0432 18.3264 75.3356L17.6969 74.5586C16.6065 75.4419 15.9064 76.7689 15.9064 78.2579H16.9064ZM18.3264 75.3356C19.0288 74.7666 19.94 74.4213 20.9396 74.4213V73.4213C19.7069 73.4213 18.5743 73.8478 17.6969 74.5586L18.3264 75.3356ZM18.3656 74.5939C14.8025 71.0228 12.3557 65.1149 12.3557 55.8526H11.3557C11.3557 65.2842 13.8494 71.4834 17.6577 75.3002L18.3656 74.5939ZM45.0936 78.2579V80.8578H46.0936V78.2579H45.0936ZM45.5936 80.3578H26.2641V81.3578H45.5936V80.3578ZM16.9064 91.8155V85.0367H15.9064V91.8155H16.9064ZM16.9064 85.0367V78.2579H15.9064V85.0367H16.9064ZM16.4064 85.5367H22.771V84.5367H16.4064V85.5367ZM45.0936 80.8578V89.2119H46.0936V80.8578H45.0936ZM45.0936 89.2119V91.8155H46.0936V89.2119H45.0936ZM45.5936 88.7119H31.2127V89.7119H45.5936V88.7119ZM19.2399 31.0647C19.2399 28.9746 20.643 26.9989 23.0895 25.5192C25.5266 24.0451 28.9256 23.1172 32.7066 23.1172V22.1172C28.7741 22.1172 25.1897 23.0802 22.5719 24.6636C19.9635 26.2412 18.2399 28.4893 18.2399 31.0647H19.2399ZM32.7066 61.1463C28.9256 61.1463 25.5266 60.2183 23.0895 58.7443C20.643 57.2645 19.2399 55.2889 19.2399 53.1988H18.2399C18.2399 55.7741 19.9635 58.0222 22.5719 59.5999C25.1897 61.1832 28.7741 62.1463 32.7066 62.1463V61.1463ZM32.7066 34.1842C34.7986 34.1842 37.3984 34.3316 39.4621 34.7598C40.4984 34.9749 41.3615 35.2534 41.9532 35.5958C42.5532 35.9431 42.76 36.2832 42.76 36.5982H43.76C43.76 35.752 43.1745 35.1472 42.4541 34.7303C41.7256 34.3087 40.7405 34.0038 39.6653 33.7807C37.5058 33.3326 34.829 33.1842 32.7066 33.1842V34.1842ZM19.2399 42.1317C19.2399 40.2347 20.3933 38.4345 22.4392 37.0084L21.8673 36.188C19.6604 37.7265 18.2399 39.7958 18.2399 42.1317H19.2399ZM22.4392 37.0084C24.9 35.293 28.5731 34.1842 32.7066 34.1842V33.1842C28.4117 33.1842 24.5281 34.3333 21.8673 36.188L22.4392 37.0084ZM32.7066 39.0122C28.5731 39.0122 24.9 37.9035 22.4392 36.188L21.8673 37.0084C24.5281 38.8632 28.4117 40.0122 32.7066 40.0122V39.0122ZM22.4392 36.188C20.3933 34.7619 19.2399 32.9618 19.2399 31.0647H18.2399C18.2399 33.4007 19.6604 35.47 21.8673 37.0084L22.4392 36.188ZM19.2399 53.1988C19.2399 51.3017 20.3933 49.5016 22.4392 48.0754L21.8673 47.2551C19.6604 48.7935 18.2399 50.8628 18.2399 53.1988H19.2399ZM22.4392 48.0754C24.9 46.36 28.5731 45.2512 32.7066 45.2512V44.2512C28.4117 44.2512 24.5281 45.4003 21.8673 47.2551L22.4392 48.0754ZM32.7066 50.0793C28.5731 50.0793 24.9 48.9705 22.4392 47.2551L21.8673 48.0754C24.5281 49.9302 28.4117 51.0793 32.7066 51.0793V50.0793ZM22.4392 47.2551C20.3933 45.8289 19.2399 44.0288 19.2399 42.1317H18.2399C18.2399 44.4677 19.6604 46.537 21.8673 48.0754L22.4392 47.2551ZM42.76 47.6653C42.76 48.0336 42.5452 48.3857 41.99 48.7254C41.4311 49.0673 40.6111 49.3387 39.6144 49.544C37.6295 49.9531 35.1089 50.0687 33.0124 50.0786L33.0172 51.0785C35.1286 51.0686 37.7305 50.9533 39.8163 50.5235C40.8549 50.3094 41.8072 50.0095 42.5119 49.5784C43.2201 49.1451 43.76 48.5226 43.76 47.6653H42.76ZM33.0124 50.0786C32.9094 50.079 32.8074 50.0793 32.7066 50.0793V51.0793C32.8089 51.0793 32.9125 51.079 33.0172 51.0785L33.0124 50.0786ZM32.7066 45.2512C32.8074 45.2512 32.9094 45.2515 33.0124 45.252L33.0172 44.252C32.9125 44.2515 32.8089 44.2512 32.7066 44.2512V45.2512ZM33.0124 45.252C35.1089 45.2619 37.6295 45.3774 39.6144 45.7865C40.6111 45.9918 41.4311 46.2633 41.99 46.6052C42.5452 46.9448 42.76 47.2969 42.76 47.6653H43.76C43.76 46.8079 43.2201 46.1854 42.5119 45.7521C41.8072 45.321 40.8549 45.0211 39.8163 44.807C37.7305 44.3773 35.1286 44.2619 33.0172 44.252L33.0124 45.252ZM42.76 36.5982C42.76 36.9059 42.5635 37.2367 41.9947 37.5762C41.4316 37.9124 40.607 38.189 39.6094 38.4053C37.6228 38.8361 35.1007 38.9971 33.0114 39.0112L33.0182 40.0112C35.1368 39.9968 37.7373 39.8346 39.8213 39.3826C40.859 39.1576 41.8068 38.853 42.5072 38.4349C43.2019 38.0202 43.76 37.4238 43.76 36.5982H42.76ZM33.0114 39.0112C32.9087 39.0119 32.807 39.0122 32.7066 39.0122V40.0122C32.8093 40.0122 32.9132 40.0119 33.0182 40.0112L33.0114 39.0112ZM33.5148 72.8379V61.6463H32.5148V72.8379H33.5148ZM32.7066 62.1463H33.0148V61.1463H32.7066V62.1463Z"
              />
            </svg>
          </template>

          <template #text> Relevance </template>
        </IdeaCard>

        <IdeaCard class="flex-grow">
          <template #svg>
            <svg
              class="stroke-gold group-hover:stroke-white w-[100px] h-[100px] stroke-[2.5px] transition-all duration-200"
              width="130"
              height="138"
              viewBox="0 0 130 138"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M54.9454 38.1086C59.2062 26.8328 61.3365 21.195 65 21.195C68.6634 21.195 70.7938 26.8328 75.0546 38.1086L75.253 38.6336C77.6601 45.0039 78.8637 48.189 81.3166 50.125C83.7695 52.0609 86.9895 52.367 93.4295 52.9793L94.5937 53.09C105.134 54.092 110.403 54.593 111.531 58.1521C112.659 61.7113 108.745 65.491 100.918 73.0505L98.3054 75.5734C94.3431 79.4002 92.3619 81.3135 91.4385 83.8213C91.2663 84.289 91.1231 84.7683 91.0098 85.256C90.4029 87.8703 90.983 90.646 92.1433 96.1974L92.5045 97.9254C94.6369 108.128 95.7031 113.229 93.8415 115.429C93.1459 116.252 92.2418 116.844 91.2374 117.134C88.5497 117.913 84.7337 114.612 77.1019 108.011C72.0906 103.676 69.5849 101.508 66.7081 101.021C65.5765 100.829 64.4234 100.829 63.2919 101.021C60.4151 101.508 57.9094 103.676 52.898 108.011C45.2662 114.612 41.4503 117.913 38.7625 117.134C37.7582 116.844 36.8541 116.252 36.1585 115.429C34.2969 113.229 35.3631 108.128 37.4955 97.9254L37.8566 96.1974C39.0169 90.646 39.5971 87.8703 38.9901 85.256C38.8769 84.7683 38.7337 84.289 38.5615 83.8213C37.638 81.3135 35.6569 79.4002 31.6946 75.5734L29.0822 73.0505C21.2549 65.491 17.3412 61.7113 18.4689 58.1521C19.5965 54.593 24.8664 54.092 35.4062 53.09L36.5705 52.9793C43.0104 52.367 46.2304 52.0609 48.6833 50.125C51.1363 48.189 52.3399 45.0039 54.747 38.6336L54.9454 38.1086Z"
              />
            </svg>
          </template>

          <template #text> Merit </template>
        </IdeaCard>

        <IdeaCard class="flex grow">
          <template #svg>
            <svg
              class="w-[100px] h-[100px] stroke-gold group-hover:stroke-white stroke-[2.5px] transition-all duration-200"
              width="119"
              height="122"
              viewBox="0 0 119 122"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M44.625 35.5833L64.4583 35.5833" stroke-linecap="round" />
              <path d="M44.625 76.25L59.5 76.25" stroke-linecap="round" />
              <path d="M44.625 55.9167L74.375 55.9167" stroke-linecap="round" />
              <path
                d="M94.2083 55.9167V21.25C94.2083 18.4216 94.2083 17.0074 93.3296 16.1287C92.4509 15.25 91.0367 15.25 88.2083 15.25H30.7916C27.9632 15.25 26.549 15.25 25.6703 16.1287C24.7916 17.0074 24.7916 18.4216 24.7916 21.25V100.75C24.7916 103.578 24.7916 104.993 25.6703 105.871C26.549 106.75 27.9632 106.75 30.7916 106.75H59.5"
                stroke-linecap="round"
              />
              <ellipse cx="86.7708" cy="88.9583" rx="12.3958" ry="12.7083" stroke-linecap="round" />
              <path d="M104.125 106.75L96.6875 99.125" stroke-linecap="round" />
            </svg>
          </template>

          <template #text> Specifications </template>
        </IdeaCard>

        <IdeaCard class="flex-grow">
          <template #svg>
            <svg
              class="stroke-gold group-hover:stroke-white w-[100px] h-[100px] stroke-[1.2px] transition-all duration-200"
              width="113"
              height="113"
              viewBox="0 0 113 113"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M28.5181 54.4973C27.5631 53.651 26.5753 52.773 25.5517 51.8631L14.4572 42.0013C14.2508 41.8178 13.9348 41.8364 13.7513 42.0428C13.5678 42.2492 13.5864 42.5653 13.7928 42.7487L24.8874 52.6105L24.9158 52.6358L24.9158 52.6358C25.8956 53.5067 26.8436 54.3494 27.7624 55.1638C28.0164 54.9395 28.2683 54.7173 28.5181 54.4973ZM31.5449 58.4951C35.8615 62.262 39.5018 65.2796 42.8037 67.5362C47.6884 70.8746 51.8855 72.5856 56.5 72.5856C61.1145 72.5856 65.3116 70.8746 70.1963 67.5362C75.0631 64.2101 80.665 59.2307 88.0844 52.6357L88.1127 52.6105L99.2072 42.7487C99.4136 42.5653 99.4322 42.2492 99.2487 42.0428C99.0653 41.8364 98.7492 41.8178 98.5428 42.0013L87.4483 51.8631C79.9951 58.4882 74.4401 63.4247 69.6321 66.7106C64.8358 69.9886 60.836 71.5856 56.5 71.5856C52.164 71.5856 48.1642 69.9886 43.3679 66.7106C40.1341 64.5005 36.5622 61.5437 32.3022 57.8285C32.0523 58.0481 31.7999 58.2703 31.5449 58.4951Z"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M81.4551 54.5034C77.1385 50.7365 73.4982 47.7189 70.1963 45.4622C65.3116 42.1239 61.1145 40.4128 56.5 40.4128C51.8855 40.4128 47.6884 42.1239 42.8037 45.4622C37.9369 48.7883 32.3351 53.7678 24.9158 60.3627L24.9158 60.3627L24.8874 60.388L13.7928 70.2498C13.5864 70.4332 13.5678 70.7493 13.7513 70.9557C13.9348 71.1621 14.2508 71.1806 14.4572 70.9972L25.5517 61.1354C33.0049 54.5103 38.56 49.5738 43.3679 46.2879C48.1642 43.0099 52.164 41.4128 56.5 41.4128C60.836 41.4128 64.8358 43.0099 69.6321 46.2879C72.8659 48.498 76.4378 51.4548 80.6978 55.1699C80.9477 54.9504 81.2001 54.7282 81.4551 54.5034ZM85.2376 57.8347C84.9836 58.059 84.7318 58.2812 84.4819 58.5012C85.4369 59.3475 86.4247 60.2255 87.4483 61.1354L98.5428 70.9972C98.7492 71.1806 99.0653 71.1621 99.2487 70.9557C99.4322 70.7493 99.4136 70.4332 99.2072 70.2498L88.1127 60.388L88.0843 60.3628C87.1046 59.4919 86.1565 58.6492 85.2376 57.8347Z"
              />
            </svg>
          </template>

          <template #text> Design </template>
        </IdeaCard>
      </div>
    </div>


<div>   
 <div class="mb-10"></div>
  <div class="flex flex-col items-center mt-6">
  <div class="font-title text-title text-white text-5xl">Relevance</div>


  <div>

    <div class="bg-[#1e1e1e] p-4 max-w-6xl rounded-3xl mt-4">
    <h2 class="text-gold p-4 mt-4 text-subtitle font-semibold">Bacterial Biofilms</h2>
    <p class="p-4">
      A bacterial biofilm is a structure of bacteria embedded within a self-produced matrix of proteins, 
      polysaccharides, and eDNA that often play roles in the pathogenicity of infectious diseases due to 
      increased resistance to immune responses and antimicrobial therapy (Vetsby et al., 2020). The presence 
      of bacterial biofilms has been associated with several severe health complications for humans. For example,
      cystic fibrosis is a genetic condition in which mucus builds up in the body and can induce the growth of 
      pathogenic bacterial biofilms. Bacterial biofilms of Pseudomonas aeruginosa (P. aeruginosa) and 
      Staphylococcus aureus (S. aureus) are two common bacterial biofilms that have also been isolated in 
      patients diagnosed with cystic fibrosis and are credited for damaging lung tissue by causing chronic
      inflammation (Høiby et al., 2010) and pulmonary infections (Esposito et al., 2019). Bacterial biofilms, 
      particularly of various Staphylococci, have also been frequently discovered on medical devices and in 
      hospital environments, and can be detrimentally transferred to patients as they are resistant to both 
      chemical and physical antibacterial sterilization measures, highlighting the need for more efficient 
      and effective therapeutic treatments for bacterial biofilm infections (Zheng et al., 2018). 
    </p>
    <h2 class="text-gold p-4 mt-4 text-subtitle font-semibold">Conventional Therapies</h2>
    <p class="p-4">
      Antibiotic treatments for bacterial biofilm infections in humans involve introducing drugs that will inhibit
      the life processes of bacteria. Currently, biofilm infections in patients are primarily treated by antibiotics
      either inhaled, ingested, or injected into the body via the bloodstream (Manos, 2021). However, there are several
      concerns with current practices including:
        <ul class="list-disc pl-10">
          <li> inability of antibiotics to penetrate biofilms and organ tissues, such as requiring specific particle or 
          droplet sizes to reach certain airways of the lungs (Høiby, 2011)</li>
          <li> historically, biofilms such as S. aureus and P. aeruginosa infections often occur concurrently, so patients
          receive multiple antibiotic treatments simultaneously that may adversely react and potentially pose toxicity hazards
          in the bloodstream (Esposito et al., 2019)</li>
          <li> concerns about biofilm antibiotic tolerance and mutational resistance undermining the ability of antibiotic
          treatments to eradicate biofilms on their own</li>
        </ul>

      <p class="p-4">
        Physical therapy to remove bacterial colonies in patients by expelling mucus from airways, which is commonly infected by
        biofilms, is often used conjointly with antibiotics. Treatments include postural drainage, percussion therapy, forced
        expiratory methods, and breathing techniques (Manos, 2021). Limitations include:
        <ul class="list-disc pl-10">
          <li> inconclusive findings of the effectiveness of physical therapy, particularly if not performed correctly
          (Manos, 2021)</li>
          <li> not recommended for use on children, and some methods are physically intensive (Manos, 2021) </li>
          <li> does not directly address bacterial infections so are not suitable as the sole treatment (Manos, 2021) </li>
        </ul>
      </p>
    </p>

    <h2 class="text-gold p-4 mt-4 text-subtitle font-semibold">Scientific Interests</h2>
    <p class="p-4">
      To circumnavigate the challenges of antibiotics penetrating biofilms, some emerging research focuses on 
      the prospective use of materials, such as enzymes, capable of disrupting biofilm matrices in conjunction 
      with antibiotics (Yin et al., 2022). These enzymes work by disrupting biofilm matrices to reduce the resistance 
      of bacteria, allowing antibiotics to take effect. Our project attempts to test the efficacy of the enzyme DNase 
      I as part of a liposome platform to degrade biofilms in the hopes of developing a possible practical treatment for 
      bacterial biofilm infections. DNase I is an endonuclease that is currently being studied to disrupt P. aeruginosa 
      biofilms due to its ability to hydrolyze phosphodiester linkages present in eDNA in biofilms (Yin et al., 2022). A 
      critical component of our project involves testing the ability and efficiency of DNase I to degrade DNA after it has 
      been treated to conjugate with liposomes, thereby demonstrating the proof of concept and feasibility of enzymosomes 
      for use in treatment. 
    </p>

    <h2 class="text-gold p-4 mt-4 text-subtitle font-semibold">Technological Interest</h2>
    <p class="p-4">
      This project endeavors to create a method that consistently produces a delivery device capable of transporting controlled 
      payloads of potentially useful drugs and enzymes for biofilm degradation for the treatment of bacterial infections. The ability 
      of liposomes to be conjugated to enzymes to create a delivery vehicle capable of destabilizing biofilms was investigated. Synergistic
      properties of several combinations of enzymes with different functions and properties were researched to actualize a future extension
      of assembling a modular platform of liposomes conjugated to several enzymes capable of treating biofilm infection in a more comprehensive
      manner. The production method of bipyramidal DNA structures (known as “n-gonal bipyramids”) made by DNA Origami technology, and its usage
      as a precise template that could catalyze the formation of uniform-sized liposomes at the nanoscale was also evaluated.
    </p>

    <h2 class="text-gold p-4 mt-4 text-subtitle font-semibold">Aims</h2>
      <p class="p-4">
        To address the current limitations of treatments against antibiotic-resistant bacteria, our project aims to create conjugated enzymosome
        systems of DNase I enzymes and liposomes that are:
          <ul class="list-disc pl-10">
            <li> able to reach regions not typically accessible to previous treatments</li>
            <li> capable of targeting and degrading biofilms </li>
            <li> more uniform in size for precise and consistent drug dosages when created by a DNA n-gonal bipyramid template in the future </li>
          </ul>
      </p>

    <h2 class="text-gold p-4 mt-4 text-subtitle font-semibold">Future Extensions</h2>
    <p class="p-4">
      In the future, after we have seen positive results of the viability of our experiments with DNase I, a possible extension of our project
      is to test our liposome with different combinations of enzymes to design a modular enzymosome platform that could simultaneously disrupt
      various biofilm components. Current treatments involving DNase I face challenges of eDNA in mature biofilms resisting DNase I, possibly
      by binding to polysaccharides and proteins that protect from enzymatic degradation or due to reduced dependency on eDNA in aged biofilms
      (Yin et al., 2022). This indicates a need for various enzyme activities that not only target eDNA but also other components of biofilm
      matrices (Jiang et al., 2020). A modular platform composed of various enzyme constituents could allow for a more efficient destabilization
      of biofilms by combining the activity of different enzymes to target not only eDNA but also other key components of the extracellular matrix,
      such as polysaccharides and proteins. We would hypothesize that the efficacy of our enzymosomes would compound, enhancing their capability to
      disrupt biofilms. Two other enzymes we have researched that have been shown in past studies to have synergistic effects, and thus could be
      viable to work together as a unit with DNase I, are Alginate Lyase and Alpha Amylase.
        <ul class="list-disc pl-10">
          <li> Alginate Lyase is an enzyme that degrades alginate by cleaving the β-1,4 glycosidic bond (Zhu & Yin, 2015). In mucoid strains of P. aeruginosa
               biofilms, alginate has been found to be a major polysaccharide overproduced in biofilm matrices (Colvin et al., 2011). Thus, alginate lyase could
              be useful in reducing eDNA resistance to DNase I and assist in dispersing biofilms by weakening bonded polysaccharides. Several studies have already
              demonstrated a significant decrease in the survival of P. aeruginosa colonies treated with alginate lyase (Cotton et al., 2009).</li>
          <li> Alpha Amylase is an enzyme capable of cleaving α-1,4-glycosidic bonds of various starches (Lahiri et al., 2021). This property may address the
              need to target polysaccharides bound to eDNA to increase the effectiveness of DNase I treatment in mature biofilms (Lahiri et al., 2021). Alpha
              amylase has also been shown to be effective at inhibiting biofilms in isolation (Craigen et al., 2011)</li>
        </ul>
        <p class="p-4">
          Presently alginate lyase has been tested in combination with both DNase I and alpha amylase. Antimicrobial treatments co-administered with both DNase I
          and alginate lyase have been proven to induce improved activity in reducing biofilm growth (Alipour et al., 2009). Previous experiments employing alginate
          lyase and alpha amylase in enzyme cocktails have indicated positive efficacy when the enzymes are used together (Kaur et al., 2021). While alpha amylase 
          treatments in conjunction with DNase I had not been tested, a report did find that alpha amylase enzymes treated with DNase I prior to being exposed to
          biofilms retained their activity to destabilize biofilms (while several other enzyme treatments degraded the alpha amylase) (Kalpana et al., 2012). So,
          while it is unclear if they will increase the activity of one another, it is known that enzyme activity will not be impaired. Further investigation on
          DNase I and alpha amylase combinations would be necessary to quantify if the tandem usage yields more effective biofilm degradation as part of the
          enzymosome co-delivery platform.
        </p>
      </p>
  </div>
  </div>
  </div>
  </div>

  <div class="mb-10"></div>
  <div class="flex flex-col items-center mt-6">
    <div class="font-title text-title text-white text-5xl">Merit</div>

    <div>
      <div class="bg-[#1e1e1e] p-4 max-w-6xl rounded-3xl mt-4">
        <h2 class="text-gold p-4 mt-4 text-subtitle font-semibold">What Sets Our Poroject Apart from Others?</h2>
        <p class="p-4">
          This project is a novel combination of past research into using DNA nanotemplates to create uniform liposomes (Yang et al., 2016) and attaching enzymes to the outside
          of liposomes for effective delivery (Corvo et al., 2015) in order to degrade biofilms. This can be applied to a wide variety of situations where biofilms are involved,
          such as medical conditions like cystic fibrosis. The advantages of our project are as follows:
            <ul class="list-disc pl-10">
              <li>
                <h2 class="text-white p-4 my-4 text-subtitle font-semibold">Uniform Liposomes with Controlled Enzyme Dosage</h2>
                <p>
                  Using the DNA ring nanotemplate, we are able to create controlled uniform sizes of liposomes (Yang et al., 2016). Each liposome is saturated with a controlled
                  dose of enzymes that will degrade biofilms, allowing for effective and predictable use. This is important because it allows for more consistency and predictability
                  when the enzymosomes are used to treat biofilms, with a given number of liposomes always degrading the same amount of biofilm. For medical usage, such as for
                  patients diagnosed with cystic fibrosis, this allows treatment to be accurately tailored to the amount of biofilm found in patients to completely degrade them,
                  eliminating uncertainty about whether the biofilms have been degraded.
                </p>
              </li>
              <li>
                <h2 class="text-white p-4 my-4 text-subtitle font-semibold">Liposomal Delivery to Regions not Reachable by Cleaning Agents</h2>
                <p>
                  Biofilms pose a recurring problem in the area of health and medicine. From the formation of biofilms on medical devices, notably by Staphylococci bacteria
                  (Zheng et al., 2018), to biofilm growth in the lungs of patients diagnosed with Cystic Fibrosis, they possess a diverse array of targets (Høiby et al., 2010).
                  However, these areas may not be easily reachable, making drug delivery difficult. With the aid of a smaller form of transportation such as a liposome saturated
                  with enzymes, these regions can become accessible to drug delivery.
                </p>
              </li>
            </ul>
          </p>
      </div>
    </div>
  </div>

  <div class="mb-10"></div>
  <div class="flex flex-col items-center mt-6">
    <div class="font-title text-title text-white text-5xl">Specifications</div>

    <div>
      <div class="bg-[#1e1e1e] p-4 max-w-6xl rounded-3xl mt-4">
        <h2 class="text-gold p-4 mt-4 text-subtitle font-semibold">Placeholder text for now</h2>
        <p class="p-4">
          Our project aims to create an enzymosome structure that can serve as a platform for attaching enzymes and cargo. This platform is intended to enhance the efficiency of
          biofilm degradation in patient-related scenarios, such as cystic fibrosis, as well as in the context of environmental biofilms found on medical equipment.


          <p class="p-4 mt-2">
          The following diagram outlines the project’s proposed wet-lab timeline, with key milestones and goals marked for each month. 
          </p>

          <Timeline />
        </p>
      </div>
    </div>


  </div>

</div>


</template>


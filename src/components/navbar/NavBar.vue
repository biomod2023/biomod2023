<script setup lang="ts">
import { ref } from 'vue'
import { RouterLink } from 'vue-router'
import Dropdown from '@/components/navbar/Dropdown.vue'
import Dropside from '@/components/navbar/Dropside.vue'
import MobileDropdown from './MobileDropdown.vue'

const sidebar = ref(false)
let transitionAnimation = 'transition duration-100 ease-in'

interface Tree {
  name: string
  url?: string
  children?: Tree[]
}

const tree: Tree[] = [
  {
    name: 'Home',
    url: '/'
  },
  {
    name: 'Ideas',
    url: '/ideas'
  },
  {
    name: 'Notebook',
    children: [
      {
        name: 'Computational Simulation',
        children: [
          {
            name: 'Structure Design',
            url: '#'
          },
          {
            name: 'Docking of Dnase I',
            url: '/computational-simulation/docking-of-dnase-i'
          }
        ]
      },
      {
        name: 'Lab Validation',
        children: [
          {
            name: 'Dnase I',
            url: '/lab-validation/dnase-i'
          },
          {
            name: 'Liposome Formation',
            url: '/lab-validation/liposome-formation'
          },
          {
            name: 'Octahedron Formation',
            url: '/lab-validation/octahedron-formation'
          },
          {
            name: 'Thiolation and Conjugation',
            url: '/lab-validation/thiolation-and-conjugation'
          }
        ]
      },
      {
        name: 'Future Directions',
        children: [
          {
            name: 'Docking of Alginate Lyase and Alpha-Amylase',
            url: '/future-directions/aa-docking'
          },
          {
            name: 'Structure Imaging',
            url: '/future-directions/structure-imaging'
          },
          {
            name: 'Liposome Formation Using Octahedron',
            url: '/future-directions/octahedron-liposome-formation'
          }
        ]
      }
    ]
  },
  {
    name: 'ELSI',
    url: '/elsi'
  },
  {
    name: 'Team',
    url: '/team'
  },
  {
    name: 'Sponsors',
    url: '/sponsors'
  }
]
</script>

<template>
  <!-- Desktop Navbar -->
  <template v-if="$windowWidth >= 1024">
    <div
      class="z-20 flex justify-center items-center bg-slate font-semibold text-gold py-4 gap-44 drop-shadow-lg"
    >
      <div class="flex justify-center">
        <template v-for="(entry, i) in tree.slice(0, tree.length / 2)" :key="i">
          <RouterLink
            v-show="entry.url"
            :to="entry.url ? entry.url : '#'"
            class="h-full py-4 px-12"
          >
            {{ entry.name }}
          </RouterLink>
          <Dropdown v-show="entry.children" to="#">
            <template #text>{{ entry.name }}</template>
            <template #content>
              <ul>
                <li v-for="(child, j) in entry.children" :key="j">
                  <Dropside to="#">
                    <template #text>{{ child.name }}</template>
                    <template #content>
                      <ul>
                        <li v-for="(subchild, k) in child.children" :key="k" class="mx-2 my-3">
                          <RouterLink :to="subchild.url ? subchild.url : '#'">{{
                            subchild.name
                          }}</RouterLink>
                        </li>
                      </ul>
                    </template>
                  </Dropside>
                </li>
              </ul>
            </template>
          </Dropdown>
        </template>
      </div>
      <a href="/" class="shrink-0 w-14">
        <img src="../../assets/logo.svg" alt="Biomod Logo" class="w-14" />
      </a>
      <div class="flex justify-center">
        <RouterLink
          v-for="(entry, i) in tree.slice(tree.length / 2, tree.length)"
          :key="i"
          :to="entry.url ? entry.url : '#'"
          class="h-full py-4 px-12"
        >
          {{ entry.name }}
        </RouterLink>
      </div>
    </div>
  </template>

  <!-- Mobile Navbar -->
  <template v-else>
    <div
      class="fixed z-30 top-0 w-full flex justify-between items-center bg-slate py-7 drop-shadow-lg"
    >
      <RouterLink to="/" class="flex items-center">
        <img class="ml-4 mr-4 w-12" src="../../assets/logo.svg" alt="Biomod Logo" />
        <span class="text-gold font-bold text-xl">UBC Biomod</span>
      </RouterLink>
      <button class="mr-10" @click="sidebar = !sidebar">
        <svg
          class="active:opacity-70 transition-all duration-200 ease-in-out"
          viewBox="0 0 10 8"
          width="35"
        >
          <path
            d="M1 1h8M1 4h 8M1 7h8"
            class="stroke-gold"
            stroke-width="1.0"
            stroke-linecap="round"
          />
        </svg>
      </button>
    </div>
    <Transition
      enter-from-class="opacity-0"
      leave-to-class="opacity-0"
      :enter-active-class="transitionAnimation"
      :leave-active-class="transitionAnimation"
    >
      <template v-if="sidebar">
        <div
          class="fixed z-10 h-full w-full left-0 flex justify-end bg-black bg-opacity-90"
          @click.self="sidebar = !sidebar"
        >
          <!-- <Transition enter-from-class="translate-x-full" leave-to-class="-translate-x-full" :enter-active-class="transitionAnimation" :leave-active-class="transitionAnimation"> -->
          <div
            class="flex flex-col justify-center p-4 h-full w-[70vh] min-w-[35%] max-w-[70%] bg-slate"
          >
            <div
              class="flex flex-col h-full w-full py-20 ml-10 mt-10 gap-6 overflow-scroll justify-evenly text-gold text-2xl font-bold"
            >
              <template v-for="(entry, i) in tree" :key="i">
                <RouterLink v-show="entry.url" :to="entry.url ? entry.url : '#'">{{
                  entry.name
                }}</RouterLink>
                <div v-show="entry.children" class="flex flex-col">
                  <MobileDropdown>
                    <template #title>{{ entry.name }}</template>
                    <template #children>
                      <div v-for="(child, j) in entry.children" :key="j">
                        <MobileDropdown>
                          <template #title
                            ><span class="text-lg md:text-xl">{{ child.name }}</span></template
                          >
                          <template #children>
                            <RouterLink
                              v-for="(subchild, k) in child.children"
                              :key="k"
                              :to="subchild.url ? subchild.url : '#'"
                              class="text-lg md:text-xl font-normal"
                            >
                              {{ subchild.name }}
                            </RouterLink>
                          </template>
                        </MobileDropdown>
                      </div>
                    </template>
                  </MobileDropdown>
                </div>
              </template>
            </div>
          </div>
          <!-- </Transition> -->
        </div>
      </template>
    </Transition>
  </template>
</template>

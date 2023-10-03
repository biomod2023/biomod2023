import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import IdeasView from '@/views/IdeasView.vue'
import TeamView from '@/views/TeamView.vue'
import ELSIView from '@/views/ELSIView.vue'
import GroupAView from '@/views/enzymosome/GroupAView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },

    {
      path: '/ideas',
      name: 'ideas',
      component: IdeasView
    },

    {
      path: '/elsi',
      name: 'elsi',
      component: ELSIView
    },

    {
      path: '/team',
      name: 'team',
      component: TeamView
    },
    {
      path: '/enzymosome/enzyme-activity-assays',
      name: 'enzyme-activity-assays',
      component: GroupAView
    }
  ]
})

export default router

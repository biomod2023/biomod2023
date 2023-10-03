import { createRouter, createWebHistory } from 'vue-router'
const HomeView = () => import('@/views/HomeView.vue')
const IdeasView = () => import('@/views/IdeasView.vue')
const TeamView = () => import('@/views/TeamView.vue')
const ELSIView = () => import('@/views/ELSIView.vue')
const GroupAView = () => import('@/views/enzymosome/GroupAView.vue')

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

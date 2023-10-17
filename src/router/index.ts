import { createRouter, createWebHistory } from 'vue-router'
const HomeView = () => import('@/views/HomeView.vue')
const IdeasView = () => import('@/views/IdeasView.vue')
const TeamView = () => import('@/views/TeamView.vue')
const ELSIView = () => import('@/views/ELSIView.vue')
const GroupAView = () => import('@/views/lab-validation/GroupAView.vue')
const GroupBView = () => import('@/views/lab-validation/GroupBView.vue')
const GroupCView = () => import('@/views/lab-validation/GroupCView.vue')
const OctadedronFormation = () => import('@/views/lab-validation/OctahedronFormation.vue')

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
      path: '/lab-validation/enzyme-activity-assays',
      name: 'enzyme-activity-assays',
      component: GroupAView
    },
    {
      path: '/lab-validation/liposome-formation',
      name: 'liposome-formation',
      component: GroupBView
    },
    {
      path: '/lab-validation/enzyme-conjugation',
      name: 'enzyme-conjugation',
      component: GroupCView
    },
    {
      path: '/lab-validation/octahedron-formation',
      name: 'octahedron-formation',
      component: OctadedronFormation
    }
  ]
})

export default router

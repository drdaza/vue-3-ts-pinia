import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/clients',
      name: 'client',
      component: () => import('@/clients/layout/ClientsLayouts.vue'),
      redirect: {name: 'clientsList'},
      children: [
        {
          path: '/clients/:id',
          name: 'clientById',
          component: () => import('@/clients/views/ClientView.vue')
        },
        {
          path: '/clients/list',
          name: 'clientsList',
          component: () => import('@/clients/views/ListView.vue')
        }
      ]
    }
  ]
})

export default router

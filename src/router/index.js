import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/details',
    name: 'details',
    component: () => import('../views/DetailView.vue')
  },
  {
    path: '/list',
    name: 'list',
    component: () => import('../views/MovieList.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router

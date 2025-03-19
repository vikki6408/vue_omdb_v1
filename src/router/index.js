import { createRouter, createWebHashHistory } from 'vue-router'
//import HomeView from '@/views/HomeView.vue'
import MovieList from '@/views/MovieList.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: MovieList
  },
  {
    path: '/details',
    name: 'details',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/DetailView.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router

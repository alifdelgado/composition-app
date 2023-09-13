import { createRouter, createWebHistory } from 'vue-router'
import { pokemonRoute } from '@/pokemons/router/index'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/HomeView.vue')
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('@/views/AboutView.vue')
    },
    {
      ...pokemonRoute,
      path: '/pokemons'
    },
    {
      path: '/:pathMatch(.*)*',
      redirect: () => {
        return { name: 'home' }
      }
    }
  ]
})

export default router

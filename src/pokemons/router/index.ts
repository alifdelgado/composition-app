import type { RouteRecordRaw } from 'vue-router'

const ROUTE_NAME = 'pokemons'

export const pokemonRoute: RouteRecordRaw = {
  path: `/${ROUTE_NAME}`,
  name: ROUTE_NAME,
  redirect: `/${ROUTE_NAME}/list`,
  component: () => import('@/pokemons/layouts/PokemonLayout.vue'),
  children: [
    {
      path: `/${ROUTE_NAME}/:id`,
      name: 'single-pokemon',
      props: { title: 'Pokemon by id' },
      component: () => import('@/pokemons/views/SinglePokemon.vue')
    },
    {
      path: `/${ROUTE_NAME}/list`,
      name: 'list-pokemon',
      props: { title: 'Pokemon List' },
      component: () => import('@/pokemons/views/PokemonList.vue')
    },
    {
      path: `/${ROUTE_NAME}/search`,
      name: 'search-pokemon',
      props: { title: 'Search Pokemon' },
      component: () => import('@/pokemons/views/PokemonSearch.vue')
    }
  ]
}

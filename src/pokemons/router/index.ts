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
      props: { title: 'Pokemon by id', visible: false },
      name: 'single-pokemon',
      component: () => import('@/pokemons/views/SinglePokemon.vue')
    },
    {
      path: `/${ROUTE_NAME}/list`,
      props: { title: 'Pokemon List' },
      name: 'list-pokemon',
      component: () => import('@/pokemons/views/PokemonList.vue')
    },
    {
      path: `/${ROUTE_NAME}/list-native`,
      props: { title: 'Pokemon List Nativo' },
      name: 'list-pokemon-native',
      component: () => import('@/pokemons/views/PokemonListNative.vue')
    },
    {
      path: `/${ROUTE_NAME}/search`,
      props: { title: 'Search Pokemon' },
      name: 'search-pokemon',
      component: () => import('@/pokemons/views/PokemonSearch.vue')
    }
  ]
}

<script setup lang="ts">
import { useQuery } from '@tanstack/vue-query'
import store from '@/store/pokemon.store'
import PokemonCardList from '../components/PokemonCardList.vue'
import { getPokemons } from '../helpers/get-pokemons'

useQuery(['pokemons'], getPokemons, {
  select(data) {
    store.loadedPokemons(data)
  }
})
</script>
<template>
  <h3 class="text-xl" v-if="store.pokemons.isLoading">Loading...</h3>
  <div v-else-if="store.pokemons.hasError">{{ store.pokemons.errorMessage }}</div>
  <div v-else>
    <h1 class="py-5 text-3xl font-semibold text-center text-gray-600">
      Pokemon list nativo - {{ store.pokemons.count }}
    </h1>
    <PokemonCardList :pokemons="store.pokemons.list" />
  </div>
</template>

<script setup lang="ts">
import PokemonCardList from '../components/PokemonCardList.vue'
import usePokemons from '../composables/usePokemons'

const { isLoading, count, pokemons, isError, error } = usePokemons()
</script>
<template>
  <h3 class="text-xl" v-if="isLoading">Loading...</h3>
  <div v-else-if="isError">{{ error }}</div>
  <div v-else>
    <h1 class="py-5 text-3xl font-semibold text-center text-gray-600">
      Pokemon list - {{ count }}
    </h1>
    <PokemonCardList :pokemons="pokemons!" />
  </div>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'
import usePokemon from '../composables/usePokemon'
import PokemonCard from '../components/PokemonCard.vue'

const route = useRoute()

const { id } = route.params

const { isLoading, isError, error, pokemon } = usePokemon(id.toString())
console.log(pokemon)
</script>
<template>
  <h1 v-if="isLoading">Loading...</h1>
  <h1 v-else-if="isError">{{ error }}</h1>
  <div class="max-w-sm mx-auto mt-10" v-else-if="pokemon">
    <PokemonCard :pokemon="pokemon" />
  </div>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'
import usePokemon from '../composables/usePokemon'
import PokemonCard from '../components/PokemonCard.vue'
import { useQueryClient } from '@tanstack/vue-query'

const route = useRoute()
const queryClient = useQueryClient()

const { id } = route.params

const { isLoading, isError, error, pokemon } = usePokemon(id.toString())

const invalidateQueries = () => {
  // queryClient.invalidateQueries(['pokemon', id])
}
</script>
<template>
  <button @click="invalidateQueries">Invalidate query</button>
  <h1 v-if="isLoading">Loading...</h1>
  <h1 v-else-if="isError">{{ error }}</h1>
  <div class="max-w-sm mx-auto mt-10" v-else-if="pokemon">
    <PokemonCard :pokemon="pokemon" />
  </div>
</template>

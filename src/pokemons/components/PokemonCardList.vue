<script setup lang="ts">
import type { Pokemon } from '../interfaces'
import PokemonCard from './PokemonCard.vue'

interface Props {
  pokemons: Pokemon[]
}

const props = defineProps<Props>()
</script>
<template>
  <div class="grid grid-cols-3 gap-4">
    <PokemonCard v-for="pokemon in props.pokemons" :key="pokemon.id" :pokemon="pokemon" />
  </div>
</template>

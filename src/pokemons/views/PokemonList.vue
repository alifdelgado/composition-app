<script setup lang="ts">
import { ref } from 'vue'
import { getPokemons } from '../helpers/get-pokemons'
import type { Pokemon } from '../interfaces/pokemon.interface'

const data = await getPokemons()
const pokemons = ref<Pokemon[]>(data)
// getPokemons().then((data) => (pokemons.value = data))
</script>
<template>
  <div>Pokemon list</div>
  <ul>
    <li v-for="pokemon in pokemons" :key="pokemon.id">{{ pokemon.name }}</li>
  </ul>
</template>

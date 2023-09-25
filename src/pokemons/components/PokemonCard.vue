<script setup lang="ts">
import { useRouter } from 'vue-router'
import type { Pokemon } from '../interfaces'

interface Props {
  pokemon: Pokemon
}

const { pokemon } = defineProps<Props>()

const router = useRouter()

const goto = () => {
  router.push({ name: 'single-pokemon', params: { id: pokemon.id } })
}
</script>
<template>
  <div
    class="flex flex-col items-center justify-center p-2 text-2xl border border-gray-200 rounded shadow bg-slate-100 hover:bg-sky-500 text-sky-700 hover:text-white hover:cursor-pointer"
    @click="goto()"
  >
    {{ pokemon.name }}
    <img :src="pokemon.frontSprite" :alt="pokemon.name" class="w-30 h-30" />
  </div>
</template>

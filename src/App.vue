<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <nav class="bg-white border-gray-200 dark:bg-gray-900">
      <div class="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
        <RouterLink to="/" class="flex items-center">
          <img src="@/assets/logo.svg" class="h-8 mr-3" alt="Vue Logo" />
          <span class="self-center text-2xl font-semibold whitespace-nowrap text-gray-500"
            >PokemonApp</span
          >
        </RouterLink>
        <div class="flex items-center">
          <ul class="flex flex-row font-medium mt-0 mr-6 space-x-8 text-sm">
            <li>
              <RouterLink to="/" class="text-green-700 font-semibold hover:underline"
                >Home</RouterLink
              >
            </li>
            <li>
              <RouterLink to="/about" class="text-green-700 font-semibold hover:underline"
                >About</RouterLink
              >
            </li>
            <li>
              <RouterLink to="/pokemons" class="text-green-700 font-semibold hover:underline"
                >Pokemons</RouterLink
              >
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>

  <RouterView />
</template>

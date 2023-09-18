<script setup lang="ts">
import type { RouterLink } from '@/router/list-routes'

interface Props {
  title?: string
  links: RouterLink[]
  isSecondary?: boolean
}
const { title, isSecondary } = withDefaults(defineProps<Props>(), {
  title: 'PokemonApp',
  isSecondary: false
})
</script>
<template>
  <nav class="bg-gray-800">
    <div class="flex justify-between max-w-screen-xl px-4 py-3 mx-auto">
      <RouterLink to="/" class="flex items-center" v-if="!isSecondary">
        <img src="@/assets/logo.svg" class="h-8 mr-3" alt="Vue Logo" />
        <span class="self-center text-2xl font-semibold text-gray-500 whitespace-nowrap">{{
          title
        }}</span>
      </RouterLink>
      <div class="flex items-center">
        <ul class="flex flex-row mt-0 mr-6 space-x-8 text-sm font-medium">
          <li v-for="link in $props.links" :key="link.path">
            <RouterLink :to="link.path" class="font-bold text-green-800 hover:underline">{{
              link.title
            }}</RouterLink>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

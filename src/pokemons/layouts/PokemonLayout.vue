<script setup lang="ts">
import { RouterView } from 'vue-router'
import NavBar from '@/shared/components/NavBar.vue'
import { pokemonRoute } from '@/pokemons/router/index'
import type { RouterLink } from '@/router/list-routes'

const routeLinks: RouterLink[] =
  pokemonRoute.children?.map(({ name, path, props }) => {
    const { title, visible = true } = props as { title: string; visible: boolean }
    return {
      name: name?.toString() ?? '',
      path: path,
      title,
      visible
    }
  }) || []
</script>
<template>
  <NavBar :links="routeLinks" is-secondary />
  <div class="h-screen max-w-5xl mx-auto">
    <Suspense>
      <RouterView />
      <template #fallback>Loading...</template>
    </Suspense>
  </div>
</template>

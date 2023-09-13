<script setup lang="ts">
import type { RouterLink } from '@/router/list-routes'

interface Props {
  title?: string
  links: RouterLink[]
  isSecondary?: boolean
}

withDefaults(defineProps<Props>(), {
  title: 'CompoApp',
  isSecondary: false
})
</script>
<template>
  <nav class="bg-gray-800">
    <div class="max-w-screen-xl px-4 py-3 mx-auto">
      <div class="flex items-center">
        <ul class="flex flex-row font-medium mt-0 mr-6 space-x-8 text-sm">
          <li v-for="link in $props.links" :key="link.path">
            <RouterLink :to="link.path" class="text-green-800 font-bold hover:underline">{{
              link.title
            }}</RouterLink>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

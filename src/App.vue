<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import NavBarVue from './shared/components/NavBar.vue'
import { routerLinks } from './router/list-routes'
</script>

<template>
  <header>
    <NavBarVue :links="routerLinks" />
  </header>

  <RouterView />
</template>

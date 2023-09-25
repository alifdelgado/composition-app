import { useQuery } from '@tanstack/vue-query'
import { computed, watchEffect } from 'vue'
import { getPokemons } from '../helpers/get-pokemons'

const usePokemons = () => {
  const {
    isLoading,
    data: pokemons,
    isError,
    error
  } = useQuery(['pokemons'], getPokemons, { retry: 0 })

  // watchEffect(() => {
  // })

  return {
    isError,
    isLoading,
    error,
    pokemons,
    count: computed(() => pokemons.value?.length ?? 0)
  }
}

export default usePokemons

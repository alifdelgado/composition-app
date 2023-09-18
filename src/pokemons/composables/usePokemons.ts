import { useQuery } from '@tanstack/vue-query'
import { getPokemons } from '../helpers/get-pokemons'
import { computed } from 'vue'

const usePokemons = () => {
  const { isLoading, data: pokemons, isError, error } = useQuery(['pokemons'], getPokemons)
  return {
    isError,
    isLoading,
    error,
    pokemons,
    count: computed(() => pokemons.value?.length ?? 0)
  }
}

export default usePokemons

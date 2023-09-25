import { useQuery } from '@tanstack/vue-query'
import { getPokemon } from '../helpers/get-pokemons'

const usePokemon = (id: string) => {
  const {
    isLoading,
    isError,
    error,
    data: pokemon
  } = useQuery(['pokemon', id], () => getPokemon(id))

  return {
    isLoading,
    isError,
    error,
    pokemon
  }
}

export default usePokemon

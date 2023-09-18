import type { Pokemon } from '@/pokemons/interfaces'
import { reactive } from 'vue'

interface Store {
  pokemons: {
    list: Pokemon[]
    count: number
    isLoading: boolean
    hasError: boolean
    errorMessage: string
  }
  startLoadingPokemons: () => void
  loadedPokemons: (pokemons: Pokemon[]) => void
  loadPokemonsFailed: (errorMessage: string) => void
}

const store = reactive<Store>({
  pokemons: {
    list: [],
    count: 0,
    isLoading: false,
    hasError: false,
    errorMessage: ''
  },
  startLoadingPokemons: (): void => {},
  loadedPokemons: (pokemons: Pokemon[]): void => {},
  loadPokemonsFailed: (errorMessage: string): void => {}
})

export default store

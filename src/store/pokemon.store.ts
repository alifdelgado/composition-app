import { reactive } from 'vue'
import { getPokemons } from '@/pokemons/helpers/get-pokemons'
import type { Pokemon } from '@/pokemons/interfaces'

interface Store {
  pokemons: {
    list: Pokemon[]
    count: number
    isLoading: boolean
    hasError: boolean
    errorMessage: string
  }
  startLoadingPokemons: () => Promise<void>
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
  startLoadingPokemons: async function (): Promise<void> {
    this.pokemons = {
      ...this.pokemons,
      isLoading: true,
      hasError: false,
      errorMessage: ''
    }
  },
  loadedPokemons: function (data: Pokemon[]): void {
    this.pokemons = {
      list: data,
      count: data.length,
      isLoading: false,
      hasError: false,
      errorMessage: ''
    }
  },
  loadPokemonsFailed: function (errorMessage: string): void {
    this.pokemons = {
      ...this.pokemons,
      isLoading: false,
      hasError: true,
      errorMessage
    }
  }
})

export default store

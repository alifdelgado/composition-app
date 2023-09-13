import axios from 'axios'
import pokemonApi from '../api/pokemonApi'
import type { Pokemon, PokemonResponse, PokemonsResponse } from '../interfaces'

export const getPokemons = async (): Promise<Pokemon[]> => {
  const { data } = await pokemonApi.get<PokemonsResponse>('/pokemon?limit=45')
  let pokemonPromises: Promise<Pokemon>[] = []
  pokemonPromises = data.results.map(({ url }) => {
    return axios.get<PokemonResponse>(url).then(({ data }) => {
      return {
        id: data.id,
        name: data.name,
        frontSprite: data.sprites.front_default
      }
    })
  })

  return await Promise.all(pokemonPromises)
}

export interface RouterLink {
  name: string
  path: string
  title: string
}

export const routerLinks: RouterLink[] = [
  { path: '/', name: 'home', title: 'Home' },
  { path: '/about', name: 'about', title: 'About' },
  { path: '/pokemons', name: 'pokemons', title: 'Pokemons' }
]

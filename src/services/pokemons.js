// const URL = 'https://pokeapi.co/api/v2/pokemon';
const URL = 'https://pokeapi.co/api/v2/pokemon?limit=100&offset=200';

export const getPokemons = () => {
  return fetch(URL).then((response) => response.json());
}
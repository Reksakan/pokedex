import React, { useState, useEffect } from 'react';
import PokemonCard from '../components/PokemonCard';
import { getPokemons } from '../services/pokemons';
import { useLocation } from 'react-router-dom';

const AllPokemon = () => {
  
  const location = useLocation();

  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    getPokemons().then((data) => {
      setPokemons(data.results)
    });
  },[]);
  
  return (
    <div>
      {(pokemons) && pokemons.map((pokemon, index) => {
        return <PokemonCard key={index} {...pokemon} />
      })}
    </div>
  );
};

export default AllPokemon;
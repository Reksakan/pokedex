import React, { useEffect, useState } from "react";

const PokemonCard = (props) => {
  const { url } = props;

  const [value, setValue] = useState(null);

  useEffect(() => {
    fetch(url, {
      method: 'GET',
      mode: 'cors',
      json: true,
      headers: {
        'Content-Type': 'application/json'
      },
    }).then((response) => response.json()).then((data) => {
      setValue(data);
    });
  },[url]);

  return (
    value ?
    <>
      <div>
      <h3>{props.name}</h3>
      <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${value.id}.png`} alt={`${props.name}`} />
    </div>
    </> : <div>Loading...</div>
  )
}

export default PokemonCard;  
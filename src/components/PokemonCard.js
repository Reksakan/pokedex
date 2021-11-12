import React from "react";

const PokemonCard = (props) => {
  return (
    <div>
      <h3>{props.name}</h3>
      <img src={`${props.url}`} alt={`${props.name}`} />
    </div>
  );
};

export default PokemonCard;

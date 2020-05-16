import React from 'react';
import Species from './Species';
import StarShips from './StarShips';

const Character = ({ character }) => {
  return (
    <div className="character">
      <span>
        <span className="filmInfo"> Character Name: </span> {character.name}
      </span>
      <br />
      <Species species={character.species} />
      <StarShips starShips={character.starships} />
    </div>
  );
};

export default Character;

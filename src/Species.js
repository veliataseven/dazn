import React, { useState } from 'react';
import axios from 'axios';

const Species = ({ species }) => {
  const [speciesItems, setSpeciesItems] = useState([]);
  React.useEffect(() => {
    const getSpecies = async () => {
      return Promise.all(species.map(async (url) => await axios(url)));
    };
    getSpecies().then((data) => setSpeciesItems(data));
  }, [species]);

  const displaySpecies = speciesItems.map((item) => (
    <div key={item.data.name}>
      <span>
        <span className="filmInfo"> Species Name: </span> {item.data.name}
      </span>
      <br />
    </div>
  ));

  return <div className="Species">{displaySpecies}</div>;
};

export default Species;

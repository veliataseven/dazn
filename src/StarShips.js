import React, { useState } from 'react';
import axios from 'axios';

const StarShips = ({ starShips }) => {
  const [starShipsArr, setStarShipsArr] = useState([]);
  React.useEffect(() => {
    const getData = async () => {
      return Promise.all(
        starShips.map(async (url) => {
          const { data } = await axios(url);
          return data;
        }),
      );
    };
    getData().then((data) => setStarShipsArr(data));
  }, [starShips]);
  const displayStarShips = starShipsArr.map((item, index) => (
    <div key={index}>
      <span>
        <span className="filmInfo"> Starship Name: </span> {item.name}
      </span>
      <br />
    </div>
  ));
  return <div className="starShips"> {displayStarShips}</div>;
};

export default StarShips;

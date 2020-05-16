import React, { useState } from 'react';
import SearchBar from './SearchBar';
import axios from 'axios';

const Search = () => {
  const [actors, setActors] = useState([]);

  React.useEffect(() => {
    const getData = async () => {
      const URL = 'https://swapi.dev/api/people/';
      const { data } = await axios(URL);
      setActors(data.results);
    };
    getData();
  }, []);

  return (
    <div className="searchContainer">
      <SearchBar actors={actors} />
    </div>
  );
};

export default Search;

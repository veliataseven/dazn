import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import Loader from 'react-loader-spinner';

const Films = () => {
  const [films, setFilms] = useState([]);
  const [loading, setLoading] = useState(false);

  React.useEffect(() => {
    const fetchData = async () => {
      const URL = 'https://swapi.dev/api/films/';
      const { data } = await axios(URL);
      setFilms(data.results);
      setLoading(true);
    };
    fetchData();
  }, []);

  let filmIndex;

  const displayingFilms = films.map((film, index) => {
    filmIndex = index + 1;
    return (
      <div className="filmCart" key={index}>
        <Link to={'/' + filmIndex} className="link">
          <h3>{film.title} </h3>
        </Link>{' '}
        <span className="filmInfo">Release_date: </span> {film.release_date}
        <br />
        <span className="filmInfo">Opening_crawl: </span>{' '}
        <span style={{ lineHeight: 1.2 }}>{film.opening_crawl}</span>
      </div>
    );
  });

  return (
    <>
      {loading ? (
        <div className="container">{displayingFilms}</div>
      ) : (
        <span style={{ textAlign: 'center' }}>
          {' '}
          <Loader type="Circles" color="#d34141" height={80} width={80} />
        </span>
      )}{' '}
    </>
  );
};

export default Films;

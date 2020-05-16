import React from 'react';
import axios from 'axios';
import { useState } from 'react';
import Character from './Character';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import Loader from 'react-loader-spinner';
import Pic_1 from './Images/a-new-hope.jpg';
import Pic_2 from './Images/the-empire-strikes-back.jpg';
import Pic_3 from './Images/return-of-the-jedi.jpg';
import Pic_4 from './Images/the-phantom-menace.jpg';
import Pic_5 from './Images/attack-of-the-clones.jpg';
import Pic_6 from './Images/revenge-of-the-sith.jpg';

const Film = (props) => {
  const { filmIndex } = props.match.params;
  const [film, setFilm] = useState({});
  const [people, setPeople] = useState([]);
  const [loading, setLoading] = useState(false);

  React.useEffect(() => {
    const getFilm = async () => {
      const URL = 'https://swapi.dev/api/films/' + filmIndex;
      const { data } = await axios(URL);
      setFilm(data);
      const URL_PEOPLE = 'https://swapi.dev/api/people/';
      const response = await axios(URL_PEOPLE);
      setPeople(response.data.results);
      setLoading(true);
    };
    getFilm();
  }, [filmIndex]);

  const { title, opening_crawl, release_date, director, producer } = film;

  const characters = people.map((character, index) => {
    return character.films.map((filmUrl) => {
      if (filmUrl.split('/')[5] === filmIndex) {
        return <Character key={index} character={character} />;
      } else return '';
    });
  });

  let imgPath;

  switch (title) {
    case 'A New Hope':
      imgPath = Pic_1;
      break;
    case 'The Empire Strikes Back':
      imgPath = Pic_2;
      break;
    case 'Return of the Jedi':
      imgPath = Pic_3;
      break;
    case 'The Phantom Menace':
      imgPath = Pic_4;
      break;
    case 'Attack of the Clones':
      imgPath = Pic_5;
      break;
    case 'Revenge of the Sith':
      imgPath = Pic_6;
      break;
    default:
      imgPath = '';
      break;
  }
  return (
    <div className="filmContainer">
      {loading ? (
        <div className="film">
          <h3>{title} </h3>
          <div>
            <img
              src={imgPath}
              alt={title}
              style={{
                width: '220px',
                float: 'left',
                marginRight: '40px',
                marginLeft: '40px',
              }}
            />
          </div>
          <span>
            <span className="filmInfo">Director: </span> {director}
          </span>
          <br />
          <span>
            {' '}
            <span className="filmInfo">Producer: </span> {producer}
          </span>
          <br />
          <span>
            <span className="filmInfo"> Release_date: </span> {release_date}
          </span>
          <br />
          <span style={{ lineHeight: 1.6 }}>
            <span className="filmInfo">Opening_crawl: </span> {opening_crawl}
          </span>
          <br />
          <br />
          <h4 style={{ clear: 'both' }}>Characters</h4>
          <div className="characterContainer">{characters}</div>
        </div>
      ) : (
        <span style={{ textAlign: 'center' }}>
          {' '}
          <Loader type="Circles" color="#d34141" height={80} width={80} />
        </span>
      )}
    </div>
  );
};

export default Film;

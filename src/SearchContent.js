import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Profile from './Images/profile-avatar.png';
import convertURL from './utils/convertURL';

const SearchContent = ({ matchedActor }) => {
  const [movies, setMovies] = useState([]);

  React.useEffect(() => {
    const films = matchedActor.map((actor) => {
      return actor.films;
    });
    const getData = async () => {
      return Promise.all(
        films.map(async (film) => {
          return Promise.all(
            film.map(async (url) => await axios(convertURL(url))),
          );
        }),
      );
    };
    getData().then((data) => {
      setMovies(data);
    });
  }, [matchedActor, setMovies]);
  let filmIndex;
  const displayingActors = matchedActor.map((actor, index) => {
    return (
      <div className="actor" key={index}>
        <div className="actorInfo">
          <img
            src={Profile}
            style={{ width: '80px', height: '110px' }}
            alt="profile-avatar"
          />
          <div className="infoText">
            <span>
              <span className="filmInfo">{actor.name}</span>
            </span>
            <br />
            <span>
              <span className="textInfo">Born in: </span> {actor.birth_year}
            </span>
            <br />
            <span>
              <span className="textInfo">Height: </span> {actor.height}
            </span>
            <br />
            <span>
              <span className="textInfo">Gender: </span> {actor.gender}
            </span>
            <br />
          </div>
        </div>
        <div className="movies">
          <span>
            <span className="filmInfo">Movies </span>
          </span>
          <br />
          <span>
            {' '}
            {movies[index] &&
              movies[index].map((item, i) => {
                filmIndex = item.data.url.split('/')[5];
                return (
                  <div key={i}>
                    <span className="textInfo">
                      <Link
                        to={'/' + filmIndex}
                        style={{ textDecoration: 'none' }}
                      >
                        {item.data.title}
                      </Link>{' '}
                    </span>
                    <br />
                  </div>
                );
              })}
          </span>
          <br />
        </div>
      </div>
    );
  });
  return (
    <>
      <div className="searchContentContainer">{displayingActors}</div>
    </>
  );
};

export default SearchContent;

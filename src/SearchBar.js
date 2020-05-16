import React, { useState } from 'react';
import SearchContent from './SearchContent';
import Explore from './Images/start-exploring.png';

const SearchBar = ({ actors, loading }) => {
  const [text, setText] = useState('');
  const [matchedActor, setMatchedActor] = useState([]);
  const [check, setCheck] = useState(false);

  const handleChange = (e) => {
    setCheck(true);
    setText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.length > 0) {
      const matched = actors.filter(
        (actor) => actor.name.toLowerCase().indexOf(text.toLowerCase()) > -1,
      );
      setMatchedActor(matched);
    }
  };

  return (
    <>
      <div className="searchBarContainer">
        <form onSubmit={handleSubmit}>
          <input
            onChange={handleChange}
            className="searchInput"
            type="text"
            placeholder="Search for movie actors.."
            name="search"
          />
          <button className="searchButton" type="submit">
            <i className="fa fa-search"></i>
          </button>
        </form>
      </div>
      {check ? (
        <SearchContent matchedActor={matchedActor} />
      ) : (
        <>
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              paddingTop: '80px',
            }}
          >
            <img
              src={Explore}
              style={{ width: '200px', opacity: 0.8 }}
              alt="start exploring"
            />
          </div>
          <h3 style={{ textAlign: 'center', color: '#c62828' }}>
            Start exploring the information about your favorite actors{' '}
          </h3>{' '}
        </>
      )}
    </>
  );
};

export default SearchBar;

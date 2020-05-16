import React from 'react';
import { NavLink, withRouter } from 'react-router-dom';
const Navbar = () => {
  return (
    <div className="navContainer">
      <ul className="navList">
        <li className="navListA logo" style={{ marginLeft: '5%' }}>
          Star Wars
        </li>

        <li className="navLink">
          {/* <a className="navListA" href="#home">
            Search
          </a> */}
          <NavLink to="/search" className="navListA">
            Search
          </NavLink>
        </li>
        <li className="navLink">
          {/* <a className="navListA" href="#home">
            Films
          </a> */}
          <NavLink exact to="/" className="navListA">
            Films
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default withRouter(Navbar);

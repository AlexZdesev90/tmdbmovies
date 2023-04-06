import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import { SearchBar } from '../SearchBar/SearchBar';
// import logo from '../../assets/a5eb6ccbc2090208b027b36429a71c02.svg';
import logo from '../../assets/5595936_55552.jpg';

const Header = () => {
  return (
    <div className="header">
      <div className="headerLeft">
        <Link to="/">
        <img
            className="header__icon"
            src={logo}
          />
        </Link>
        {/* <Link to="/movies/popular" style={{ textDecoration: 'none' }}>
          <span>Popular</span>
        </Link> */}
        {/* <Link to="/movies/top_rated" style={{ textDecoration: 'none' }}>
          <span>Top Rated</span>
        </Link>
        <Link to="/movies/upcoming" style={{ textDecoration: 'none' }}>
          <span>Upcoming</span>
        </Link> */}
        <Link to="/person" style={{ textDecoration: 'none' }}>
          <span>Actors</span>
          
        </Link>
      </div>
      {/* <SearchBar/> */}
    </div>
  );
};

export default Header;

import React from 'react';
import { Link } from 'react-router-dom';
import './splash.css';
import { FaSearch } from 'react-icons/fa';

const Splash = () => (
  <section className="splash-container">
    <div className="searchIcon">
      <FaSearch />
    </div>
    <div className="hero-container">
      <Link to="/" className="logo">
        <span className="hero-name">House Renting Services</span>
      </Link>
    </div>
  </section>
);

export default Splash;

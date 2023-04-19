import React from 'react';
import { Link } from 'react-router-dom';
import './splash.css';
import { FaSearch } from 'react-icons/fa';

const Splash = () => (
  <section className="splash-container">
    <div className="searchIcon">
      <FaSearch />
    </div>
    <li className="nav-item logo-container">
      <Link to="/" className="logo">
        <span className="logo-name">House Renting Services</span>
      </Link>
    </li>
  </section>
);

export default Splash;

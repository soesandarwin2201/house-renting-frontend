import React from 'react';
import { Link } from 'react-router-dom';
import './splash.css';

const Splash = () => (
  <section className="splash-container">
    <li className="nav-item logo-container">
      <Link to="/" className="logo">
        <span className="logo-name">Logo</span>
      </Link>
    </li>
  </section>
);

export default Splash;

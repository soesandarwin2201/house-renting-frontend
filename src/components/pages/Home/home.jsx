import React from 'react';
import HouseCard from './house';
import { data } from './data';
import './home.css';

const Home = () => {
  return (
    <section className="home-container">
     <div className="home-title-container">
      <h1 className="home-title">LATEST Model Houses</h1>
      <p className='extra-text'>Chose your dream house!</p>
      <span>...........................</span>
      </div>
      <div className="card-container">
      {
        data.map(house => (
          <HouseCard  key={house.id} {...house} />
        ))
      }
      </div>
    </section>
  )
};

export default Home;

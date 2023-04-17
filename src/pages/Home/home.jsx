/* eslint-disable */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import HouseCard from './house';
import { fetchHouses } from '../../redux/house/houseSlice';
import { data } from './data';
import './home.css';

const Home = () => {
  const houses = useSelector((state) => state.houses.houses);
  console.log(houses);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchHouses());
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <section className="home-container">
     <div className="home-title-container">
      <h1 className="home-title">LATEST Model Houses</h1>
      <p className='extra-text'>Chose your dream house!</p>
      <p className='home-dot'>...........................</p>
      </div>
      <div className="card-container">
        {
          houses.length <= 0 ? (
            <div className='loading-container'>
              <h1>No home to show....</h1>
            </div>
          ) : (
            <div> {
              houses.map(house => (
              <HouseCard  key={house.id} {...house} />
            ))
          } </div> )
        }
      </div>
    </section>
  )
};

export default Home;

/* eslint-disable */
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import HouseCard from './house';
import { fatchHouses } from '../../redux/house/houseSlice';
import './home.css';

const Home = () => {
  const { houses } = useSelector((state) => state.houses);
  console.log(houses)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fatchHouses());
  }, [dispatch]);
  return (
    <section className="home-container">
     <div className="home-title-container">
      <h1 className="home-title">LATEST Model Houses</h1>
      <p className='extra-text'>Chose your dream house!</p>
      <p className='home-dot'>...........................</p>
      </div>
      <div className="card-container">
      {
        houses.map(house => (
          <HouseCard  key={house.id} {...house} />
        ))
      }
      </div>
    </section>
  )
};

export default Home;

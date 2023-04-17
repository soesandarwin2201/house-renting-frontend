/* eslint-disable */
import React from 'react';
import HouseCard from './house';
import { data } from './data';
import './home.css';

const Home = () => {

  const { houses } = useSelector((state) => state.houses);
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
          <HouseCard  {...house} />

        ))
      }
      </div>
    </section>
  )
};

export default Home;

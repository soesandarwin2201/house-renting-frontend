import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import HouseCard from './house';
import { fetchHouses } from '../../redux/house/houseSlice';
import './home.css';
import Swiper, { Navigation } from 'swiper';
import 'swiper/swiper-bundle.css';

Swiper.use([Navigation]); // add the Navigation module to Swiper

const Home = () => {
  const houses = useSelector((state) => state.houses.houses);
  const dispatch = useDispatch();
  const swiperRef = useRef(null);

  useEffect(() => {
    dispatch(fetchHouses());
  
    // Create Swiper instance when component mounts
    swiperRef.current = new Swiper('.swiper-container', {
      slidesPerView: 3,
      spaceBetween: 30,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });
  
    // Destroy Swiper instance when component unmounts
    return () => {
      if (swiperRef.current) {
        swiperRef.current.destroy();
      }
    };
  }, [dispatch]);
  
  return (
    <section className="home-container">
      <div className="home-title-container">
        <h1 className="home-title">LATEST Model Houses</h1>
        <p className='extra-text'>Choose your dream house!</p>
        <p className='home-dot'>...........................</p>
      </div>
      <div className="swiper-container">
        <div className="swiper-wrapper">
          {houses.map((house) => (
            <div key={house.id} className="swiper-slide">
              <HouseCard {...house} />
            </div>
          ))}
        </div>
        <div className="swiper-pagination"></div>
        <div className="swiper-button-next"></div>
        <div className="swiper-button-prev"></div>
      </div>
    </section>
  );
};

export default Home;

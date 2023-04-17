/* eslint-disable */
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { IconContext } from 'react-icons';
import * as FaIcon from 'react-icons/fa';
import './home.css';

const HouseCard = (props) => {
  const house = props;
  const navigate = useNavigate();

     return ( 
      <IconContext.Provider value={{ color: '#ddd' }}>
          <div className="house-container swiper-slide" onClick={() => navigate(`/houses/${house.id}`)}>
           <div className="img-container">
               <img src={house.image} alt="house img" className='house-img'/>
           </div>
           <div className="house-info">
               <h2 className='house-name'>{house.name}</h2>
               <p className='dot'>.......................</p>
               <p className="house-address">{house.location}</p>
               <div className="contact-icon">
               <li className="contact-link">
                <Link to="https://www.linkedin.com/in/soe-sandar-win-softwareengineer/" className="social link">
                  <FaIcon.FaLinkedin />
                </Link>
              </li>
              <li className="contact-link">
                <Link to="https://github.com/soesandarwin2201" className="social link">
                  <FaIcon.FaGithub />
                </Link>
              </li>
              <li className="contact-link">
                <Link to="https://medium.com/@soesandarwin2201" className="social link">
                  <FaIcon.FaMedium />
                </Link>
              </li>
               </div>
           </div>
          </div>
          </IconContext.Provider>
      );
}
 
export default HouseCard;
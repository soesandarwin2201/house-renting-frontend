import React, { useEffect } from "react";
// eslint-disable-next-line import/no-extraneous-dependencies
import { useNavigate, useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { IconContext } from 'react-icons';
import * as FcIcon from 'react-icons/fc';
import * as AiIcon from 'react-icons/ai';
import { showHouse } from "../../redux/house/houseSlice";
import "./house.css";

const HouseDetails = () => {
  const { id } = useParams();
  const { house } = useSelector((state) => state.house);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(showHouse(id));
  }, [dispatch, id]);
  return (
    <IconContext.Provider value={{ color: '#fff' }}>
      <section id="detail-container">
        <div key={id} id="card-container">
          <div id="img-container">
            <img
              src={house?.image}
              alt={house?.name}
              id="detail-img"
            />
          </div>
          <div id="detail-info">
            <div className="house-address">
              <h1 id="house-name">{house?.name}</h1>
              <p id="location">{house?.location}</p>
            </div>
            <div className="price-container">
              <li className="border">
                <p className="info-name">Price: </p>
                <p id="price">
                  $
                  {house?.price}
                </p>
              </li>
              <li className="border">
                <p className="info-name">Bedrooms: </p>
                <p id="bed-room">
                  {house?.bedroom_number}
                  {' '}
                  bds
                </p>
              </li>
            </div>
            <p id="description">
              <span className="detail">Detail:</span>
              {' '}
              {house?.description}
            </p>
            <button id="reserver-btn" type="button" onClick={() => { navigate(`/houses/${house?.id}/reservations`); }}>
              Reserve
              <FcIcon.FcOvertime id="reserve-icon" />
            </button>
          </div>
        </div>
        <button type="button" className="back" onClick={() => navigate(`/home`)}>
          <AiIcon.AiFillCaretLeft />
          {' '}
          back
          {' '}
        </button>
      </section>
    </IconContext.Provider>
  );
};

export default HouseDetails;

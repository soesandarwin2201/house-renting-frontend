import React, { useEffect, useState } from "react";
import { data } from "../Home/data";
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { showHouse } from "../../redux/house/houseSlice";


function HouseDetails() {
  const { id } = useParams();
 const dispatch = useDispatch()



 useEffect =  () => {
 dispatch(showHouse(id))
 }

  return (
    <div>
   
        <h1>House Details</h1>
          <>
            <div key={house.id}>
              <p>{house.name}</p>
              <img
                src={house.image}
                alt={house.name}
              />
              <p>{house.price}</p>
              <p>{house.location}</p>
              <p>{house.description}</p>
              <p>{house.bedroom_number}</p>
            </div>
            <button type="button">Reserve</button>
          </>
  
    </div>
  );
}

export default HouseDetails;

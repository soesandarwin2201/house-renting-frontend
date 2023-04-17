import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { showHouse } from "../../redux/house/houseSlice";

function HouseDetails() {
  const { id } = useParams()
  const { house } = useSelector((state) => state.house)
  console.log(house)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  useEffect(() => {
    dispatch(showHouse(id))
  }, [dispatch, id])
  return (
    <div key={id}>
      <>
        <h1>House Details</h1>
            <div key={house?.id}>
              <p>{house?.id}</p>
              <p>{house?.name}</p>
              <img
                src={house?.image}
                alt={house?.name}
              />
              <p>{house?.price}</p>
              <p>{house?.location}</p>
              <p>{house?.description}</p>
              <p>{house?.bedroom_number}</p>
            </div>
            <button type="button" onClick={() => { navigate(`/houses/${house?.id}/reservations`) }}>Reserve</button>
          </>
    </div>
  );
}

export default HouseDetails;

import React from "react";
import data from "../../../data";

function HouseDetails() {
  return (
    <div>
      <>
        <h1>House Details</h1>
        {data.map((house) => (
          <>
            <div key={house.id}>
              <p>{house.id}</p>
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
        ))}
      </>
    </div>
  );
}

export default HouseDetails;

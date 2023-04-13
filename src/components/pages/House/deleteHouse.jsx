import React, { useState } from 'react';
import data from '../../../data';

const DeleteHouse = () => {
  const [houses, setHouses] = useState(data);

  const handleDelete = (id) => {
    // Filter out the house with the given id
    const updatedHouses = houses.filter((house) => house.id !== id);
    // Update state with the filtered houses
    setHouses(updatedHouses);
  };

  return (
    <div>
      <h1>House List</h1>
      <ul>
        {houses.map((house) => (
          <li key={house.id}>
            {house.name}
            <button type="button" onClick={() => handleDelete(house.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DeleteHouse;

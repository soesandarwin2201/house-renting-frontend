import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { removeHouse } from "../../redux/house/houseSlice";

const DeleteHouse = () => {
  const [houses, setHouses] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    // Fetch API data and update the state of houses
    const token = localStorage.getItem("token"); // Replace with your actual authentication token
    fetch("http://localhost:3000/houses", {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => setHouses(data));
  }, []);

  const handleDelete = (id) => {
    // Dispatch the removeHouse action with the id
    dispatch(removeHouse(id));

    // Update the state by filtering out the deleted house
    const updatedHouses = houses.filter((house) => house.id !== id);
    setHouses(updatedHouses);
  };

  return (
    <div className="list">
      <h1>House List</h1>
      <ul className="house-list">
        {houses.map((house) => (
          <li key={house.id}>
            {house.name}
            <button type="button" onClick={() => handleDelete(house.id)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DeleteHouse;

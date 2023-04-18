/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addReservation } from "../../redux/reservation/reservationSlice";

const ReserveHouse = () => {
  const [house, setHouse] = useState({
    startDate: "",
    endDate: "",
  });

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
      .then((data) => setHouse(data));
  }, []);

  const handleStartDateChange = (event) => {
    setHouse({
      ...house,
      startDate: event.target.value,
    });
  };

  const handleEndDateChange = (event) => {
    setHouse({
      ...house,
      endDate: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Dispatch the addReservation action with the reservation data
    dispatch(addReservation(house));

    // Clear the form after submission
    setHouse({
      startDate: "",
      endDate: "",
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Start Date:
        <input
          type="date"
          value={house.startDate}
          onChange={handleStartDateChange}
          required
        />
      </label>
      <label>
        End Date:
        <input
          type="date"
          value={house.endDate}
          onChange={handleEndDateChange}
          required
        />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
};

export default ReserveHouse;

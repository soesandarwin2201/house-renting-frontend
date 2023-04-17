import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addReservation } from '../../redux/reservation/reservationSlice';

const ReserveHouse = () => {
  const [house, setHouse] = useState({
    start_date: '',
    end_date: '',
  });

  const dispatch = useDispatch();

  useEffect(() => {
  // Fetch API data and update the state of houses
    const token = localStorage.getItem('token'); // Replace with your actual authentication token
    fetch('http://localhost:3000/houses', {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => setHouse(data));
  }, []);

  const handleSubmit = (id) => {
  // Dispatch the removeHouse action with the id
    dispatch(addReservation(id));

    // Update the state by filtering out the deleted house
    const updatedHouses = house.filter((house) => house.id !== id);
    setHouse(updatedHouses);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Start Date:
        <input
          type="date"
          value={startDate}
          onChange={handleStartDateChange}
          required
        />
      </label>
      <label>
        End Date:
        <input
          type="date"
          value={endDate}
          onChange={handleEndDateChange}
          required
        />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
};

export default ReserveHouse;
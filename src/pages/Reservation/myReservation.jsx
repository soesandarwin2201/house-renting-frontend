import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addReservation } from '../../redux/reservation/reservationSlice';

const ReserveHouse = () => {
  const [house, setHouse] = useState({
    start_date: '',
    end_date: '',
  });
};
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

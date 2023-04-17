import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addReservation } from '../../redux/reservation/reservationSlice';

const ReserveHouse = () => {
  const [house, setHouse] = useState({
    start_date: '',
    end_date: '',
  });
};

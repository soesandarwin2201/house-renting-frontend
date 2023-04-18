/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchHouses } from '../../redux/house/houseSlice';
import { addReservation } from '../../redux/reservation/reservationSlice';

const ReserveForm = () => {
  const houses = useSelector((state) => state.houses.houses);
  const [reservation, setReservation] = useState({
    state_date: '',
    end_date: '',
    house_id: '',
  });
  const dispatch = useDispatch();

  useEffect(() => {
    const data = dispatch(fetchHouses());
  }, [dispatch]);
};

const inputValue = (e) => {
  setReservation({
    ...reservation,
    [e.target.name]: e.target.value,
  });
};

const handleSubmit = (e) => {
  e.preventDefault();
  console.log(reservation)
  dispatch(addReservation(reservation));
   navigate("/reservations");
};

export default ReserveForm;

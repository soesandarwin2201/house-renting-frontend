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
  console.log(reservation);
  dispatch(addReservation(reservation));
  navigate('/reservations');
};

return (
  <form onSubmit={handleSubmit}>
    <label>
      Start Date:
      <input
        type="date"
        name="start_date"
        onChange={inputValue}
       
        required
      />
    </label>
    <label>
      End Date:
      <input
        type="date"
        name="end_date"
        onChange={inputValue}
       
        required
      />
    </label>

    <label for="cars">Choose a house:</label>
<select id="cars" name="house_id" onChange={inputValue} form="carform">
{
   houses.map((house) => {
    return(
      <option key={house.id} value={house.id}>
        {house.name}
      </option>
    )
   })
}

export default ReserveForm;

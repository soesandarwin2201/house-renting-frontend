/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// eslint-disable-next-line import/no-extraneous-dependencies
import { useNavigate, useParams } from "react-router";
import { addReservedHouse } from "../../redux/reservation/reservationSlice";

const HomeReserve = () => {
  const error = useSelector((state) => state.reservation.error);
  console.log(error);
  const { id } = useParams();
  const [reservation, setReservation] = useState({
    start_date: "",
    end_date: "",
    house_id: id,
  });

  const inputValue = (e) => {
    console.log(e.target.value);
    setReservation({
      ...reservation,
      [e.target.name]: e.target.value,
    });
  };

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addReservedHouse(reservation));
    console.log('it is not showing');
    navigate("/reservations");
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
          className="form-input"
        />
      </label>
      <label>
        End Date:
        <input
          type="date"
          name="end_date"
          onChange={inputValue}
          required
          className="form-input"
        />
      </label>
      <button type="submit" className="submit-btn">Submit</button>
    </form>
  );
};

export default HomeReserve;

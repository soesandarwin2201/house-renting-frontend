/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from "react";
import { useDispatch } from "react-redux";
// eslint-disable-next-line import/no-extraneous-dependencies
import { useNavigate, useParams } from "react-router";
import { addReservedHouse } from "../../redux/reservation/reservationSlice";

const HomeReserve = () => {
  const { id } = useParams();
  const [reservation, setReservation] = useState({
    start_date: "",
    end_date: "",
    house_id: id,
  });

  const inputValue = (e) => {
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
      <button type="submit" className="submit-btn">Submit</button>
    </form>
  );
};

export default HomeReserve;

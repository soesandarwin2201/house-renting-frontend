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
    <section className="reservation-form-container">
      <h1 className="reservation-form-title">Reservation Form</h1>
      <form onSubmit={handleSubmit} className="reservation-form">
        <div className="reserved-item">
          <label className="form-label">
            Start Date:
          </label>
          <input
            type="date"
            name="start_date"
            onChange={inputValue}
            required
            className="form-input"
          />
        </div>
        <div className="reserved-item">
          <label className="form-label">
            End Date:
          </label>
          <input
            type="date"
            name="end_date"
            onChange={inputValue}
            required
            className="form-input"
          />
        </div>
        <button type="submit" className="reserverd-btn">Submit</button>
      </form>
    </section>
  );
};

export default HomeReserve;

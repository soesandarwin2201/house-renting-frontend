/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { fetchHouses } from "../../redux/house/houseSlice";
import { addReservation } from "../../redux/reservation/reservationSlice";

const ReserveForm = () => {
  const houses = useSelector((state) => state.houses.houses);
  const [reservation, setReservation] = useState({
    start_date: "",
    end_date: "",
    house_id: "",
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(fetchHouses());
  }, [dispatch]);

  const inputValue = (e) => {
    setReservation({
      ...reservation,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addReservation(reservation));
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
          className="date-input"
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
          className="date-input"
        />
      </div>
      <div className="select-house">
      <label htmlFor="reserved" className="form-label">Choose a house:</label>
      <select id="houses" name="house_id" onChange={inputValue} form="reserverdform" className="date-input">
        {
     houses.map((house) => (
       <option key={house.id} value={house.id}>
         {house.name}
       </option>
     ))
  }
      </select>
      </div>

      <button type="submit" className="reserverd-btn">Submit</button>
    </form>
    </section>
  );
};

export default ReserveForm;

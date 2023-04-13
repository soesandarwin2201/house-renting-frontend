/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from "react";

const ReserveForm = () => {
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const handleStartDateChange = (e) => {
    const { value } = e.target;
    setStartDate(value);
  };

  const handleEndDateChange = (e) => {
    const { value } = e.target;
    setEndDate(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can perform form submission logic here, using the startDate and endDate state values
    // console.log('Submitted start date:', startDate);
    // console.log('Submitted end date:', endDate);
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

export default ReserveForm;

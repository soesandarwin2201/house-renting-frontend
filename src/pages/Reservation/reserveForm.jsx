/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchHouses } from "../../redux/house/houseSlice";
import { addReservation } from "../../redux/reservation/reservationSlice";

const ReserveForm = () => {
  const houses = useSelector((state) => state.houses.houses)
  const [reservation, setReservation] = useState({
    state_date: "",
    end_date: "",
    house_id: ""
  })
  const dispatch = useDispatch()
}

export default ReserveForm;
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fatchReservation } from "../../redux/reservation/reservationSlice";
import './reservation.css';

const MyReservation = () => {
  const reservation = useSelector((state) => state.reservation.reservations);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fatchReservation());
  }, [dispatch]);

  return (
    <section className="reservation-container">
      <h1 className="reservation-title">My Reservations</h1>
      <ul className="reservation-card-container">
        {reservation.map((house) => (
          <div key={house.id} className="slide">
            <div className="reservation-img-container">
              <img src={house.image} alt="house" className="reservation-img" />
            </div>
            <div className="reservation-info">
              <h1 className="reservation-house-name">
                House name
                {house.name}
              </h1>
              <p>
                start date
                {house.reservation.start_date}
              </p>
              <p>
                End date
                {house.reservation.end_date}
              </p>
            </div>
            <br />
          </div>
        ))}
      </ul>
    </section>
  );
};
export default MyReservation;

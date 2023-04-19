
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fatchReservation } from "../../redux/reservation/reservationSlice"

const MyReservation = () => {
const reservation = useSelector((state) => state.reservation.reservations)
const dispatch = useDispatch()

useEffect( () => {
  dispatch(fatchReservation())
},[dispatch])
console.log(reservation)
  return (
    <div>
      <h1>My Reservations</h1>
      <ul>
      {reservation.map((house) => (
            <li key={house.id} className="slide">
              <h1>House name{house.name}</h1>
             <p>start date {house.reservation.start_date}</p>
              <p>End date {house.reservation.end_date}</p>
              <br/>
            </li>
          ))}
      </ul>
    </div>
  )
}

export default MyReservation

   
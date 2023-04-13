import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/navbar";
import Home from "./components/pages/Home/home";
import SignOut from "./components/pages/SignOut/signout";
import AddHouse from "./components/pages/House/addHouse";
import DeleteHouse from "./components/pages/House/deleteHouse";
import HouseDetails from "./components/pages/House/houseDetails";
import ReserveForm from "./components/pages/Reservation/reserveForm";

function App() {
  return (
    <>
      <header>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/signout" element={<SignOut />} />
            <Route path="/addHouse" element={<AddHouse />} />
            <Route path="/deleteHouse" element={<DeleteHouse />} />
            <Route path="/houseDetails" element={<HouseDetails />} />
            <Route path="/reserveform" element={<ReserveForm />} />
          </Routes>
        </Router>
      </header>
    </>
  );
}

export default App;

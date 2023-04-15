import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/navbar";
import Home from "./pages/Home/home";
import SignOut from "./pages/SignOut/signout";
import AddHouse from "./pages/House/addHouse";
import DeleteHouse from "./pages/House/deleteHouse";
import HouseDetails from "./pages/House/houseDetails";
import ReserveForm from "./pages/Reservation/reserveForm";
import Signup from "./pages/Signup/signup";
import Login from "./pages/login/login";

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
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
          </Routes>
        </Router>
      </header>
    </>
  );
}

export default App;

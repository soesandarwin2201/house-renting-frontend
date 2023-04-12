import { BrowserRouter as Router, Routes,Route} from "react-router-dom";
import Navbar from "./components/navbar/navbar";
import Home from "./components/pages/Home/home";
import SignOut from "./components/pages/SignOut/signout";

function App() {
  return (
    <>
    <header>
      <Router>
      <Navbar />
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/signout" element={<SignOut />} />
      </Routes>
      </Router>
    </header>
    </>
  );
}

export default App;

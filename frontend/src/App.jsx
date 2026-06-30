import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import findBlood from "./pages/findBlood";
import Hospitals from "./pages/Hospitals";
import BloodBanks from "./pages/BloodBanks";
import Camps from "./pages/Camps";
import About from "./pages/About";
import Contact from "./pages/Contact";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/find-blood" element={<findBlood />} />
      <Route path="/hospitals" element={<Hospitals />} />
      <Route path="/bloodbanks" element={<BloodBanks />} />
      <Route path="/camps" element={<Camps />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
}

export default App;
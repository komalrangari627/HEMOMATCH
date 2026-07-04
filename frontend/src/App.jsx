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
import ProtectedRoute from "./routes/ProtectedRoute";
import Dashboard from "./pages/Dashboard";
import DonorDashboard from "./pages/DonorDashboard";
import RecipientDashboard from "./pages/RecipientDashboard";
import HospitalDashboard from "./pages/HospitalDashboard";
import BloodBankDashboard from "./pages/BloodBankDashboard";
import Admin from "./pages/Admin";

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
      <Route path="/dashboard" element={ <ProtectedRoute> <Dashboard /> </ProtectedRoute>} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/donor-dashboard" element={<DonorDashboard />} />
      <Route path="/recipient-dashboard" element={<RecipientDashboard />} />
      <Route path="/hospital-dashboard" element={<HospitalDashboard />} />
      <Route path="/bloodbank-dashboard" element={<BloodBankDashboard />} />
      <Route path="/admin-dashboard" element={<Admin />} />
    </Routes>
  );
}

export default App;
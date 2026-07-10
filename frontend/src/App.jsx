import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import FindBlood from "./pages/FindBlood";
import Hospitals from "./pages/Hospitals";
import BloodBanks from "./pages/BloodBanks";
import Camps from "./pages/Camps";
import About from "./pages/About";
import Contact from "./pages/Contact";

import Dashboard from "./pages/Dashboard";
import DonorDashboard from "./pages/DonorDashboard";
import RecipientDashboard from "./pages/RecipientDashboard";
import HospitalDashboard from "./pages/HospitalDashboard";
import BloodBankDashboard from "./pages/BloodBankDashboard";
import Admin from "./pages/Admin";

import ProtectedRoute from "./routes/ProtectedRoute";

import MainLayout from "./layouts/MainLayout";
import AuthLayout from "./layouts/AuthLayout";
import DashboardLayout from "./layouts/DashboardLayout";
import Profile from "./pages/Profile";
import Requests from "./pages/Requests";
import History from "./pages/History";
import Settings from "./pages/Settings";

import Logout from "./pages/Logout";

function App() {
  return (
    <Routes>

      {/* Public Pages */}
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/find-blood" element={<FindBlood />} />
        <Route path="/hospitals" element={<Hospitals />} />
        <Route path="/bloodbanks" element={<BloodBanks />} />
        <Route path="/camps" element={<Camps />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Route>

      {/* Authentication */}
      <Route element={<AuthLayout />}>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Route>

      {/* Protected Dashboard */}
      <Route
        element={
          <ProtectedRoute>
            <DashboardLayout />
          </ProtectedRoute>
        }
      >
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/donor-dashboard" element={<DonorDashboard />} />
        <Route path="/recipient-dashboard" element={<RecipientDashboard />} />
        <Route path="/hospital-dashboard" element={<HospitalDashboard />} />
        <Route path="/bloodbank-dashboard" element={<BloodBankDashboard />} />
        <Route path="/admin-dashboard" element={<Admin />} />
      </Route>

  
    <Route 
path="/profile" 
element={<Profile/>}
/>


<Route 
path="/requests" 
element={<Requests/>}
/>


<Route 
path="/history" 
element={<History/>}
/>


<Route 
path="/settings" 
element={<Settings/>}
/>


<Route 
path="/logout" 
element={<Logout/>}
/>


</Routes>
  );
}

export default App;
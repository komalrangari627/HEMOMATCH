import "./Navbar.css";
import { Link, NavLink } from "react-router-dom";
import { FaHeart, FaBars, FaTimes } from "react-icons/fa";
import { useState } from "react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="navbar">

      <div className="container navbar-container">

        {/* Logo */}
        <Link to="/" className="logo">
          <FaHeart className="logo-icon" />
          <span>HemoMatch</span>
        </Link>

        {/* Navigation */}
        <nav className={menuOpen ? "nav-menu active" : "nav-menu"}>

          <NavLink to="/">Home</NavLink>

          <NavLink to="/find-blood">
            Find Blood
          </NavLink>

          <NavLink to="/bloodbanks">
            Blood Banks
          </NavLink>

          <NavLink to="/hospitals">
            Hospitals
          </NavLink>

          <NavLink to="/camps">
            Camps
          </NavLink>

          <NavLink to="/about">
            About
          </NavLink>

          <NavLink to="/contact">
            Contact
          </NavLink>

        </nav>

        {/* Buttons */}

        <div className="nav-buttons">

          <Link className="login-btn" to="/login">
            Login
          </Link>

          <Link className="register-btn" to="/register">
            Register
          </Link>

        </div>

        {/* Mobile */}

        <div
          className="mobile-menu"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </div>

      </div>

    </header>
  );
}

export default Navbar;
import "./Navbar.css";
import { Link, NavLink } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import { FaHeart, FaBars, FaTimes } from "react-icons/fa";
import { AuthContext } from "../../context/AuthContext";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [sticky, setSticky] = useState(false);

  const { user, logout } = useContext(AuthContext);

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLogout = () => {
    logout();
    setMenuOpen(false);
  };

  return (
    <header className={sticky ? "navbar sticky" : "navbar"}>
      <div className="container navbar-container">

        {/* Logo */}
        <Link to="/" className="logo">
          <FaHeart />
          <span>HemoMatch</span>
        </Link>

        {/* Navigation */}
        <nav className={menuOpen ? "nav active" : "nav"}>
          <NavLink to="/" onClick={() => setMenuOpen(false)}>Home</NavLink>
          <NavLink to="/find-blood" onClick={() => setMenuOpen(false)}>Find Blood</NavLink>
          <NavLink to="/hospitals" onClick={() => setMenuOpen(false)}>Hospitals</NavLink>
          <NavLink to="/bloodbanks" onClick={() => setMenuOpen(false)}>Blood Banks</NavLink>
          <NavLink to="/camps" onClick={() => setMenuOpen(false)}>Camps</NavLink>
          <NavLink to="/about" onClick={() => setMenuOpen(false)}>About</NavLink>
          <NavLink to="/contact" onClick={() => setMenuOpen(false)}>Contact</NavLink>

          {/* Mobile Buttons */}
          <div className="mobile-buttons">
            {user ? (
              <button className="login-btn" onClick={handleLogout}>
                Logout
              </button>
            ) : (
              <>
                <Link to="/login" onClick={() => setMenuOpen(false)} className="login-btn">
                  Login
                </Link>
                <Link to="/register" onClick={() => setMenuOpen(false)} className="register-btn">
                  Register
                </Link>
              </>
            )}
          </div>
        </nav>

        {/* Desktop Buttons */}
        <div className="nav-buttons">
          {user ? (
            <button className="login-btn" onClick={handleLogout}>
              Logout
            </button>
          ) : (
            <>
              <Link to="/login" className="login-btn">Login</Link>
              <Link to="/register" className="register-btn">Register</Link>
            </>
          )}
        </div>

        {/* Mobile Menu Toggle */}
        <button className="menu-btn" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>

      </div>
    </header>
  );
}

export default Navbar;
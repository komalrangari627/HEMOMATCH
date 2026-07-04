import "./Footer.css";

import {
  FaHeart,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">

      <div className="container footer-grid" data-aos="fade-up">

        {/* Company */}

        <div className="footer-col">

          <div className="footer-logo">

            <FaHeart />

            <h2>HemoMatch</h2>

          </div>

          <p>

            HemoMatch is a smart blood donation platform connecting
            blood donors, recipients, hospitals and blood banks during
            emergencies.

          </p>

          <div className="social-icons">

            <a href="#">
              <FaFacebookF />
            </a>

            <a href="#">
              <FaInstagram />
            </a>

            <a href="#">
              <FaLinkedinIn />
            </a>

            <a href="#">
              <FaTwitter />
            </a>

          </div>

        </div>

        {/* Quick Links */}

        <div className="footer-col">

          <h3>Quick Links</h3>

          <Link to="/">Home</Link>

          <Link to="/find-blood">Find Blood</Link>

          <Link to="/bloodbanks">Blood Banks</Link>

          <Link to="/hospitals">Hospitals</Link>

          <Link to="/camps">Donation Camps</Link>

          <Link to="/contact">Contact</Link>

        </div>

        {/* Services */}

        <div className="footer-col">

          <h3>Our Services</h3>

          <a href="#">Emergency Requests</a>

          <a href="#">Become Donor</a>

          <a href="#">Blood Availability</a>

          <a href="#">Donation Certificates</a>

          <a href="#">Volunteer Program</a>

        </div>

        {/* Contact */}

        <div className="footer-col">

          <h3>Contact Us</h3>

          <p>

            <FaPhoneAlt />

            +91 7057157502

          </p>

          <p>

            <FaEnvelope />

            support@hemomatch.in

          </p>

          <p>

            <FaMapMarkerAlt />

            Amravati, Maharashtra, India

          </p>

          <div className="newsletter">

            <input
              type="email"
              placeholder="Enter Email"
            />

            <button>

              Subscribe

            </button>

          </div>

        </div>

      </div>

      <div className="footer-bottom">

        © 2026 HemoMatch | Designed & Developed by Komal Rangari

      </div>

    </footer>
  );
}

export default Footer;
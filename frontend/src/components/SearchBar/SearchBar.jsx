import "./SearchBar.css";
import { FaSearch, FaPhoneAlt } from "react-icons/fa";

function SearchBar() {
  return (
    <section className="search-section">

      <div className="container">

        <div className="search-card">

          <div className="search-header">

            <h2>Find Blood Instantly</h2>

            <p>
              Search verified blood donors near your location in just a few
              seconds.
            </p>

          </div>

          <form className="search-form">

            <select>
              <option>Select Blood Group</option>
              <option>A+</option>
              <option>A-</option>
              <option>B+</option>
              <option>B-</option>
              <option>AB+</option>
              <option>AB-</option>
              <option>O+</option>
              <option>O-</option>
            </select>

            <select>
              <option>Select State</option>
            </select>

            <select>
              <option>Select District</option>
            </select>

            <select>
              <option>Select City</option>
            </select>

            <button type="submit">
              <FaSearch />
              Search Now
            </button>

          </form>

          <div className="emergency-box">

            <FaPhoneAlt />

            <div>

              <h3>Emergency Blood Helpline</h3>

              <p>Available 24 × 7 for urgent blood requests</p>

            </div>

            <a href="tel:+911234567890">
              Call Now
            </a>

          </div>

        </div>

      </div>

    </section>
  );
}

export default SearchBar;
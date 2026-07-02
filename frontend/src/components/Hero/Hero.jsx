import "./Hero.css";
import { Link } from "react-router-dom";
import heroImage from "./hero.png";
import { FaArrowRight } from "react-icons/fa";

function Hero() {
  return (
    <section className="hero">

      <div className="container hero-container">

        {/* Left Content */}

        <div className="hero-left">

          <span className="hero-tag">
            ❤️ Emergency Blood Donation Platform
          </span>

          <h1>
            Saving Lives <br />
            Starts With <span>One Drop</span> of Blood
          </h1>

          <p>
            HemoMatch connects blood donors, recipients, hospitals,
            blood banks and emergency requests in one secure platform.
            Find verified donors instantly and save precious lives.
          </p>

          <div className="hero-buttons">

            <Link to="/find-blood" className="primary-btn">
              Find Blood
              <FaArrowRight />
            </Link>

            <Link to="/register" className="secondary-btn">
              Become Donor
            </Link>

          </div>

          <div className="hero-stats">

            <div>
              <h2>10K+</h2>
              <p>Registered Donors</p>
            </div>

            <div>
              <h2>350+</h2>
              <p>Hospitals</p>
            </div>

            <div>
              <h2>120+</h2>
              <p>Blood Banks</p>
            </div>

          </div>

        </div>

        {/* Right Side */}

        <div className="hero-right">

          <img src={heroImage} alt="HemoMatch" />

          <div className="blood aplus">A+</div>
          <div className="blood bplus">B+</div>
          <div className="blood ominus">O-</div>
          <div className="blood abplus">AB+</div>

        </div>

      </div>

    </section>
  );
}

export default Hero;
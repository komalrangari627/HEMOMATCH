import "./Hero.css";
import { Link } from "react-router-dom";
import heroImage from "./hero.png";
import { FaArrowRight } from "react-icons/fa";
import { motion } from "framer-motion";
import avatar1 from "../../assets/avatars/a1.jpg";
import avatar2 from "../../assets/avatars/a2.jpg";
import avatar3 from "../../assets/avatars/a3.jpg";

function Hero() {
  return (
    <section className="hero">

      {/* Background Shapes */}

      <div className="hero-shapes">
        <span className="circle circle1"></span>
        <span className="circle circle2"></span>
        <span className="circle circle3"></span>

        <span className="plus plus1">+</span>
        <span className="plus plus2">+</span>

        <span className="cross">✚</span>
      </div>

      <div className="container hero-container">

        {/* Left Content */}

        <motion.div
          className="hero-left"
          data-aos="fade-right"
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >

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

          {/* Trust Badge */}

          <div className="hero-trust">

            <div className="avatars">

              <img src={avatar1} alt="Donor 1" />
              <img src={avatar2} alt="Donor 2" />
              <img src={avatar3} alt="Donor 3" />

            </div>

            <p>
              Trusted by <strong>10,000+</strong> registered donors
            </p>

          </div>

          {/* Statistics */}

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

        </motion.div>

        {/* Right Content */}

        <motion.div
          className="hero-right"
          data-aos="fade-left"
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >

          <img src={heroImage} alt="HemoMatch" />

          <div className="blood aplus">A+</div>
          <div className="blood bplus">B+</div>
          <div className="blood ominus">O-</div>
          <div className="blood abplus">AB+</div>

        </motion.div>

      </div>

      {/* Scroll Indicator */}

      <div className="scroll-down">
        Scroll
        <span></span>
      </div>

    </section>
  );
}

export default Hero;
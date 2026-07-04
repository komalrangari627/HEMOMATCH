import "./Features.css";

import {
  FaTint,
  FaUserPlus,
  FaHospital,
  FaAmbulance,
  FaCalendarAlt,
  FaCertificate,
} from "react-icons/fa";

function Features() {
  const features = [
    {
      icon: <FaTint />,
      title: "Find Blood",
      description:
        "Search verified blood donors nearby based on blood group and location.",
    },
    {
      icon: <FaUserPlus />,
      title: "Become a Donor",
      description:
        "Register as a voluntary donor and help save lives during emergencies.",
    },
    {
      icon: <FaHospital />,
      title: "Blood Banks",
      description:
        "Locate trusted blood banks and check available blood groups.",
    },
    {
      icon: <FaAmbulance />,
      title: "Emergency Requests",
      description:
        "Raise urgent blood requests and instantly notify nearby donors.",
    },
    {
      icon: <FaCalendarAlt />,
      title: "Donation Camps",
      description:
        "Discover upcoming blood donation camps and register online.",
    },
    {
      icon: <FaCertificate />,
      title: "Digital Certificate",
      description:
        "Receive a digital certificate after every successful blood donation.",
    },
  ];

  return (
    <section className="features">

      <div className="container">

        <div className="section-heading">

          <span>OUR SERVICES</span>

          <h2>Everything You Need in One Platform</h2>

          <p>
            HemoMatch connects donors, recipients, hospitals, blood banks,
            and emergency services through one secure healthcare platform.
          </p>

        </div>

        <div className="features-grid">

          {features.map((item, index) => (
            <div className="feature-card" key={index} data-aos="fade-up"
              data-aos-delay={index * 100}>

              <div className="feature-icon">
                {item.icon}
              </div>

              <h3>{item.title}</h3>

              <p>{item.description}</p>

              <button>
                Learn More →
              </button>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}

export default Features;
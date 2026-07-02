import "./HowItWorks.css";

import {
  FaUserPlus,
  FaUserCheck,
  FaSearch,
  FaHandHoldingMedical,
  FaTint,
  FaCertificate,
} from "react-icons/fa";

function HowItWorks() {

  const steps = [

    {
      id: "01",
      icon: <FaUserPlus />,
      title: "Register",
      text: "Create your HemoMatch account as a donor or recipient."
    },

    {
      id: "02",
      icon: <FaUserCheck />,
      title: "Verification",
      text: "Our admin verifies your profile for trusted blood donation."
    },

    {
      id: "03",
      icon: <FaSearch />,
      title: "Find Blood",
      text: "Search nearby verified donors based on blood group and location."
    },

    {
      id: "04",
      icon: <FaHandHoldingMedical />,
      title: "Request Blood",
      text: "Send emergency blood requests directly to available donors."
    },

    {
      id: "05",
      icon: <FaTint />,
      title: "Donate Blood",
      text: "Complete the blood donation safely at the selected hospital."
    },

    {
      id: "06",
      icon: <FaCertificate />,
      title: "Get Certificate",
      text: "Receive your digital blood donation certificate instantly."
    }

  ];

  return (

    <section className="how">

      <div className="container">

        <div className="section-title">

          <span>HOW IT WORKS</span>

          <h2>Donate Blood in Six Simple Steps</h2>

          <p>
            HemoMatch makes blood donation fast, secure and reliable by
            connecting donors, recipients, hospitals and blood banks.
          </p>

        </div>

        <div className="timeline">

          {steps.map((step) => (

            <div className="timeline-card" key={step.id}>

              <div className="step-number">

                {step.id}

              </div>

              <div className="timeline-icon">

                {step.icon}

              </div>

              <h3>{step.title}</h3>

              <p>{step.text}</p>

            </div>

          ))}

        </div>

      </div>

    </section>

  );

}

export default HowItWorks;
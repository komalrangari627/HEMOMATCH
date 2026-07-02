import "./Stats.css";
import {
  FaUserFriends,
  FaHospital,
  FaTint,
  FaAmbulance,
} from "react-icons/fa";

function Stats() {
  const stats = [
    {
      icon: FaUserFriends,
      number: "10,000+",
      title: "Registered Donors",
    },
    {
      icon: FaHospital,
      number: "350+",
      title: "Hospitals",
    },
    {
      icon: FaTint,
      number: "120+",
      title: "Blood Banks",
    },
    {
      icon: FaAmbulance,
      number: "500+",
      title: "Emergency Requests",
    },
  ];

  return (
    <section className="stats">
      <div className="container">
        <div className="stats-grid">
          {stats.map((item, index) => {
            const Icon = item.icon;

            return (
              <div className="stat-card" key={index}>
                <div className="stat-icon">
                  <Icon />
                </div>

                <h2>{item.number}</h2>

                <p>{item.title}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Stats;
import {
  FaTint,
  FaHospital,
  FaUsers,
  FaHeartbeat,
} from "react-icons/fa";
import {getDashboardStats} from "../../services/dashboard";

import DashboardCard from "./DashboardCard";

function Statistics() {

  const cards = [

    {
      title: "Blood Donations",
      value: 1248,
      growth: "12%",
      color: "#D62828",
      icon: <FaHeartbeat />
    },

    {
      title: "Blood Requests",
      value: 348,
      growth: "8%",
      color: "#2563EB",
      icon: <FaTint />
    },

    {
      title: "Hospitals",
      value: 52,
      growth: "4%",
      color: "#16A34A",
      icon: <FaHospital />
    },

    {
      title: "Registered Donors",
      value: 8645,
      growth: "15%",
      color: "#7C3AED",
      icon: <FaUsers />
    }

  ];

  return (

    <div className="statistics-grid">

      {

        cards.map((item,index)=>(

          <DashboardCard
            key={index}
            {...item}
          />

        ))

      }

    </div>

  );

}

export default Statistics;
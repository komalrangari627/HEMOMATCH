import "./Hospitals.css";

import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaStar
} from "react-icons/fa";

import hospital1 from "./images/hospital1.jpg";
import hospital2 from "./images/hospital2.jpg";
import hospital3 from "./images/hospital3.jpg";

function Hospitals() {

  const hospitals = [

    {
      id:1,
      image:hospital1,
      name:"City Care Hospital",
      city:"Nagpur",
      rating:"4.9",
      phone:"+91 9876543210"
    },

    {
      id:2,
      image:hospital2,
      name:"LifeLine Hospital",
      city:"Amravati",
      rating:"4.8",
      phone:"+91 9876501234"
    },

    {
      id:3,
      image:hospital3,
      name:"Apollo Healthcare",
      city:"Pune",
      rating:"5.0",
      phone:"+91 9988776655"
    }

  ];

  return (

<section className="hospital-section">

<div className="container">

<div className="section-title">

<span>FEATURED HOSPITALS</span>

<h2>Trusted Healthcare Partners</h2>

<p>

Find hospitals connected with HemoMatch for blood donation,
emergency requests and blood availability.

</p>

</div>

<div className="hospital-grid">

{hospitals.map((hospital)=>(

<div className="hospital-card" key={hospital.id} data-aos="fade-up"
data-aos-delay={hospital.id * 120}>

<img
src={hospital.image}
alt={hospital.name}
/>

<div className="hospital-content">

<div className="rating">

<FaStar/>

<span>{hospital.rating}</span>

</div>

<h3>{hospital.name}</h3>

<p>

<FaMapMarkerAlt/>

{hospital.city}

</p>

<p>

<FaPhoneAlt/>

{hospital.phone}

</p>

<button>

View Details

</button>

</div>

</div>

))}

</div>

</div>

</section>

);

}

export default Hospitals;
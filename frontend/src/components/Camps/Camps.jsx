import "./Camps.css";

import {
  FaCalendarAlt,
  FaClock,
  FaMapMarkerAlt,
  FaUsers
} from "react-icons/fa";

import camp1 from "./images/camp1.jpg";
import camp2 from "./images/camp2.jpg";
import camp3 from "./images/camp3.jpg";

function Camps() {

  const camps = [

    {
      id:1,
      image:camp1,
      title:"Mega Blood Donation Camp",
      date:"15 July 2026",
      time:"9:00 AM - 4:00 PM",
      location:"Nagpur Medical College",
      seats:"150 Seats",
      organizer:"Red Cross Society"
    },

    {
      id:2,
      image:camp2,
      title:"Save Life Blood Drive",
      date:"22 July 2026",
      time:"10:00 AM - 5:00 PM",
      location:"City Hospital, Pune",
      seats:"100 Seats",
      organizer:"HemoMatch"
    },

    {
      id:3,
      image:camp3,
      title:"Community Donation Camp",
      date:"30 July 2026",
      time:"8:30 AM - 2:00 PM",
      location:"Amravati Hall",
      seats:"120 Seats",
      organizer:"Government Hospital"
    }

  ];

  return (

<section className="camp-section">

<div className="container">

<div className="section-title">

<span>UPCOMING EVENTS</span>

<h2>Upcoming Blood Donation Camps</h2>

<p>

Participate in blood donation camps organized by hospitals,
NGOs and HemoMatch partners.

</p>

</div>

<div className="camp-grid">

{

camps.map((camp)=>(

<div
className="camp-card"
key={camp.id} data-aos="fade-up"
data-aos-delay={camp.id * 120}
>

<div className="camp-image">

<img
src={camp.image}
alt={camp.title}
/>

<span className="camp-badge">

Upcoming

</span>

</div>

<div className="camp-content">

<h3>{camp.title}</h3>

<p>

<FaCalendarAlt/>

{camp.date}

</p>

<p>

<FaClock/>

{camp.time}

</p>

<p>

<FaMapMarkerAlt/>

{camp.location}

</p>

<p>

<FaUsers/>

{camp.seats}

</p>

<div className="camp-organizer">

Organized By

<strong>

{camp.organizer}

</strong>

</div>

<button>

Register Now

</button>

</div>

</div>

))

}

</div>

</div>

</section>

);

}

export default Camps;
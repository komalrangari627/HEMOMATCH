import "./BloodBanks.css";

import {
  FaTint,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaArrowRight
} from "react-icons/fa";

import bank1 from "./images/bank1.jpg";
import bank2 from "./images/bank2.jpg";
import bank3 from "./images/bank3.jpg";

function BloodBanks() {

  const bloodBanks = [

    {
      id:1,
      image:bank1,
      name:"Central Blood Bank",
      city:"Nagpur",
      phone:"+91 9876543210",
      groups:["A+","B+","O+","AB+"]
    },

    {
      id:2,
      image:bank2,
      name:"Life Blood Centre",
      city:"Pune",
      phone:"+91 9876501234",
      groups:["A-","B-","O-","AB-"]
    },

    {
      id:3,
      image:bank3,
      name:"Red Cross Blood Centre",
      city:"Amravati",
      phone:"+91 9988776655",
      groups:["A+","O+","O-","AB+"]
    }

  ];

  return (

<section className="bloodbanks">

<div className="container">

<div className="section-title">

<span>BLOOD BANKS</span>

<h2>Verified Blood Banks</h2>

<p>

Check blood availability from trusted blood banks connected with HemoMatch.

</p>

</div>

<div className="bloodbank-grid">

{bloodBanks.map((bank)=>(

<div
className="bloodbank-card"
key={bank.id} data-aos="zoom-in-up"
data-aos-delay={bank.id * 120}
>

<img
src={bank.image}
alt={bank.name}
/>

<div className="bloodbank-content">

<h3>{bank.name}</h3>

<p>

<FaMapMarkerAlt/>

{bank.city}

</p>

<p>

<FaPhoneAlt/>

{bank.phone}

</p>

<div className="blood-groups">

{

bank.groups.map((group,index)=>(

<span key={index}>

<FaTint/>

{group}

</span>

))

}

</div>

<button>

Check Availability

<FaArrowRight/>

</button>

</div>

</div>

))}

</div>

</div>

</section>

);

}

export default BloodBanks;
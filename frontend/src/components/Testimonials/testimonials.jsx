import "./Testimonials.css";

import {
  FaStar,
  FaQuoteLeft,
} from "react-icons/fa";

import user1 from "./images/user1.jpg";
import user2 from "./images/user2.jpg";
import user3 from "./images/user3.jpg";

function Testimonials() {

  const reviews = [

    {
      id:1,
      image:user1,
      name:"Rahul Sharma",
      role:"Blood Donor",
      review:"HemoMatch made blood donation simple and fast. I received updates instantly and could help a patient during an emergency.",
      rating:5
    },

    {
      id:2,
      image:user2,
      name:"Priya Verma",
      role:"Recipient",
      review:"Within minutes I found a verified donor nearby. This platform truly saves lives during critical situations.",
      rating:5
    },

    {
      id:3,
      image:user3,
      name:"Amit Deshmukh",
      role:"Volunteer",
      review:"The blood donation camp registration process was smooth and the digital certificate was a great initiative.",
      rating:5
    }

  ];

  return (

<section className="testimonial-section">

<div className="container">

<div className="section-title">

<span>TESTIMONIALS</span>

<h2>What People Say About HemoMatch</h2>

<p>

Thousands of donors and recipients trust HemoMatch
for emergency blood requests and voluntary donations.

</p>

</div>

<div className="testimonial-grid">

{

reviews.map((review)=>(

<div
className="testimonial-card"
key={review.id}
>

<FaQuoteLeft className="quote"/>

<img
src={review.image}
alt={review.name}
/>

<h3>{review.name}</h3>

<span className="role">

{review.role}

</span>

<div className="stars">

{

[...Array(review.rating)].map((_,index)=>(

<FaStar key={index}/>

))

}

</div>

<p>

"{review.review}"

</p>

</div>

))

}

</div>

</div>

</section>

);

}

export default Testimonials;
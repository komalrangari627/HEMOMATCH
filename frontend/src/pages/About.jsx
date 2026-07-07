import React from "react";
import "./About.css";


const About = () => {


const features = [

{
icon:"🩸",
title:"Smart Blood Matching",
description:
"HemoMatch connects patients with suitable blood donors using blood group compatibility and location-based search."
},


{
icon:"🚨",
title:"Emergency Blood Alert",
description:
"In critical situations, hospitals and recipients can send instant emergency requests to nearby verified donors through real-time alerts."
},


{
icon:"🏥",
title:"Partner Hospitals",
description:
"We connect trusted hospitals with donors and blood banks to make blood availability faster and more reliable."
},


{
icon:"🏦",
title:"Blood Bank Inventory",
description:
"Users can check available blood stock from registered blood banks and quickly find required blood groups."
},


{
icon:"👥",
title:"Donor Community",
description:
"A growing community of verified donors helping save lives through voluntary blood donation."
},


{
icon:"📍",
title:"Location Based Search",
description:
"Find nearby donors, hospitals, and blood banks using city and location-based searching."
}


];





return (

<div className="about-page">


<div className="about-container">



<section className="about-hero">


<h1>
❤️ About HemoMatch
</h1>


<p>

A smart blood donation and emergency response platform
designed to connect donors, patients, hospitals, and
blood banks in one place.

</p>


</section>







<section className="about-card">


<h2>
🩸 Our Mission
</h2>


<p>

HemoMatch aims to reduce the gap between blood donors
and people in need by providing a fast, reliable, and
technology-driven blood management system.

Our goal is to make emergency blood availability easier
by connecting verified donors, hospitals, and blood banks.

</p>


</section>







<h2 className="feature-title">

✨ Our Key Features

</h2>





<div className="feature-grid">


{
features.map((item,index)=>(


<div

className="feature-card"

key={index}

>


<div className="feature-icon">

{item.icon}

</div>


<h3>

{item.title}

</h3>


<p>

{item.description}

</p>



</div>


))

}


</div>








<section className="about-card impact">


<h2>
🌍 Why HemoMatch?
</h2>


<p>

Every second matters during a medical emergency.
HemoMatch helps create a connected healthcare network
where blood reaches the right person at the right time.

Together, donors, hospitals, and blood banks can save
more lives.

</p>


</section>







</div>


</div>


);


};


export default About;
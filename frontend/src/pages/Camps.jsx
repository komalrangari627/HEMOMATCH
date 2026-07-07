import React, { useEffect, useState } from "react";

import {
  getDonationCamps,
  registerCamp
} from "../services/camp";

import toast from "react-hot-toast";

import "./Camps.css";


const Camps = () => {


const [camps,setCamps] = useState([]);

const [loading,setLoading] = useState(false);

const [city,setCity] = useState("");





const fetchCamps = async()=>{


try{

setLoading(true);


const res = await getDonationCamps();


setCamps(
res.data.camps || []
);


}
catch(error){

console.log(error);

}
finally{

setLoading(false);

}


};





useEffect(()=>{


fetchCamps();


},[]);






const handleRegister = async(id)=>{


try{


await registerCamp(id);


toast.success(
"Registered for donation camp"
);


}
catch(error){

toast.error(
"Registration failed"
);

}


};








const filteredCamps = camps.filter(
(camp)=>

camp.city
?.toLowerCase()
.includes(
city.toLowerCase()
)

);







return (


<div className="camp-page">


<div className="camp-container">





<div className="camp-header">


<h1>
🩸 Blood Donation Camps
</h1>


<p>
Join upcoming blood donation drives and save lives
</p>


</div>







<div className="camp-search">


<input

placeholder="Search city"

value={city}

onChange={
e=>setCity(e.target.value)
}

/>


<button
onClick={fetchCamps}
>

Refresh

</button>


</div>









{
loading ?


<h3 className="loading">
Loading Camps...
</h3>


:


<div className="camp-grid">


{
filteredCamps.length===0 &&


<p className="empty">

No Upcoming Camps Found

</p>


}




{
filteredCamps.map((camp)=>(


<div

className="camp-card"

key={camp._id}

>



<div className="camp-icon">

🩸

</div>





<h2>
{camp.title}
</h2>




<div className="camp-details">


<p>
👨‍⚕️ Organizer:
<br/>
{camp.organizer}
</p>



<p>

📍 Venue:
<br/>
{camp.venue}

</p>




<p>

🏙️ Location:
<br/>

{camp.city},
{camp.state}

</p>




<p>

📅 Date:

<br/>

{
new Date(
camp.date
).toDateString()

}

</p>




<p>

⏰ Time:

<br/>

{camp.startTime}
-
{camp.endTime}

</p>



</div>






<p className="description">

{camp.description}

</p>





<button

className="register-btn"

onClick={
()=>handleRegister(camp._id)
}

>

Register Now

</button>



</div>


))


}



</div>


}



</div>


</div>


);


};


export default Camps;
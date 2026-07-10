import React, { useEffect, useState } from "react";
import { searchBlood } from "../services/bloodBank";
import { createEmergencyRequest } from "../services/emergencyService";
import "./FindBlood.css";
import toast from "react-hot-toast";
import socket from "../socket";


const BLOOD_GROUPS = [
  "A+",
  "A-",
  "B+",
  "B-",
  "AB+",
  "AB-",
  "O+",
  "O-"
];



const inventoryKey = {

  "A+": "A_Positive",
  "A-": "A_Negative",

  "B+": "B_Positive",
  "B-": "B_Negative",

  "AB+": "AB_Positive",
  "AB-": "AB_Negative",

  "O+": "O_Positive",
  "O-": "O_Negative"

};




const FindBlood = () => {


const [bloodGroup,setBloodGroup]=useState("");

const [city,setCity]=useState("");

const [hospital,setHospital]=useState("");

const [urgent,setUrgent]=useState(false);

const [loading,setLoading]=useState(false);

const [results,setResults]=useState([]);


const [showEmergency,setShowEmergency]=useState(false);



const [emergencyData,setEmergencyData]=useState({

patientName:"",
bloodGroup:"",
units:1,
hospital:"",
city:"",
contact:""

});





useEffect(()=>{


socket.on(
"emergency-request",
(data)=>{


toast.error(
`${data.bloodGroup} blood required at ${data.hospital}`
);


});


return()=>{

socket.off(
"emergency-request"
);

};


},[]);







const handleSearch=async()=>{


setLoading(true);


try{


const data=await searchBlood({

bloodGroup,

location:city,

hospital,

urgent

});


setResults(data || []);



}

catch(error){


console.log(error);


toast.error(
"Blood search failed"
);


setResults([]);


}


setLoading(false);


};








const submitEmergency=async()=>{


try{


await createEmergencyRequest(
emergencyData
);


toast.success(
"Emergency alert sent successfully"
);


setShowEmergency(false);



}

catch(error){


console.log(error);


toast.error(
"Emergency request failed"
);


}


};







return (

<div className="findblood-wrapper">


<div className="findblood-card">



<header className="findblood-header">

<h1>
🩸 Find Blood
</h1>

<p>
Search blood availability from blood banks
</p>

</header>






<div className="blood-chips">


{
BLOOD_GROUPS.map(bg=>(

<button

key={bg}

className={
bloodGroup===bg
?
"chip active"
:
"chip"
}

onClick={()=>setBloodGroup(bg)}

>

{bg}

</button>

))
}


</div>








<div className="search-panel">


<button

className="emergency-btn"

onClick={()=>setShowEmergency(true)}

>

🚨 Emergency Request

</button>





<input

placeholder="Enter City"

value={city}

onChange={
e=>setCity(e.target.value)
}

/>




<input

placeholder="Enter Hospital / Blood Bank"

value={hospital}

onChange={
e=>setHospital(e.target.value)
}

/>






<label className="urgent-toggle">

<input

type="checkbox"

checked={urgent}

onChange={
e=>setUrgent(e.target.checked)
}

/>

Urgent Only

</label>





<button

className="search-btn"

onClick={handleSearch}

>

{
loading
?
"Searching..."
:
"Search Blood"
}


</button>



</div>









<div className="results-grid">



{
loading &&

<p className="info">
Searching...
</p>

}





{
!loading &&
results.length===0 &&

<p className="info">
No blood bank found
</p>

}








{
results.map(item=>(


<div

className="blood-card"

key={item._id}

>



<h3>
🏥 {item.name}
</h3>



<p>
<b>City:</b>
{item.city}
</p>



<p>
<b>Address:</b>
{item.address}
</p>



<p>
<b>Phone:</b>
{item.phone}
</p>




{
bloodGroup &&

<p>

<b>
{bloodGroup}
</b>

:
{
item.inventory[
inventoryKey[bloodGroup]
]
}

 Units

</p>

}





<button className="request-btn">

Request Blood

</button>



</div>


))

}



</div>



</div>









{
showEmergency &&


<div className="emergency-modal">


<div className="emergency-card">


<h2>
🚨 Emergency Blood Request
</h2>




<input

placeholder="Patient Name"

onChange={
e=>setEmergencyData({

...emergencyData,

patientName:e.target.value

})
}

/>




<select

onChange={
e=>setEmergencyData({

...emergencyData,

bloodGroup:e.target.value

})
}

>


{
BLOOD_GROUPS.map(bg=>(

<option key={bg}>
{bg}
</option>

))
}


</select>






<input

type="number"

placeholder="Units Required"

onChange={
e=>setEmergencyData({

...emergencyData,

units:e.target.value

})
}

/>






<input

placeholder="Hospital"

onChange={
e=>setEmergencyData({

...emergencyData,

hospital:e.target.value

})
}

/>




<input

placeholder="City"

onChange={
e=>setEmergencyData({

...emergencyData,

city:e.target.value

})
}

/>




<input

placeholder="Contact"

onChange={
e=>setEmergencyData({

...emergencyData,

contact:e.target.value

})
}

/>





<button

className="send-btn"

onClick={submitEmergency}

>

Send Alert

</button>




<button

className="cancel-btn"

onClick={
()=>setShowEmergency(false)
}

>

Cancel

</button>



</div>


</div>


}



</div>

);


};


export default FindBlood;
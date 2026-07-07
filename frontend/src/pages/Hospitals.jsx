import React, { useEffect, useState } from "react";
import {
  getHospitals,
  searchHospitals
} from "../services/hospital";

import { useNavigate } from "react-router-dom";

import "./Hospital.css";


const Hospitals = () => {


  const [hospitals,setHospitals] = useState([]);

  const [city,setCity] = useState("");

  const [state,setState] = useState("");

  const [loading,setLoading] = useState(false);


  const navigate = useNavigate();



  // Load all hospitals

  const fetchHospitals = async()=>{

    try{

      setLoading(true);

      const res = await getHospitals();

      setHospitals(
        res.data.hospitals || []
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

    fetchHospitals();

  },[]);





  // Search hospital

  const handleSearch = async()=>{


    try{

      setLoading(true);


      const res =
      await searchHospitals({

        city,
        state

      });


      setHospitals(
        res.data.hospitals || []
      );


    }
    catch(error){

      console.log(error);

    }
    finally{

      setLoading(false);

    }


  };





  return (

<div className="hospital-page">


<div className="hospital-container">


<div className="hospital-header">


<h1>
🏥 Partner Hospitals
</h1>


<p>
Find verified hospitals connected with HemoMatch
</p>


</div>





<div className="hospital-search">


<input

placeholder="Search City"

value={city}

onChange={
e=>setCity(e.target.value)
}

/>



<input

placeholder="Search State"

value={state}

onChange={
e=>setState(e.target.value)
}

/>



<button
onClick={handleSearch}
>

Search

</button>



<button

className="reset"

onClick={fetchHospitals}

>

All Hospitals

</button>



</div>







{
loading ?

<h3 className="loading">
Loading Hospitals...
</h3>


:

<div className="hospital-grid">


{
hospitals.length===0 &&

<p className="empty">

No Hospitals Found

</p>

}



{
hospitals.map((hospital)=>(


<div

className="hospital-card"

key={hospital._id}

>


<div className="hospital-icon">

🏥

</div>



<h2>

{hospital.name}

</h2>



<div className="hospital-info">


<p>

📍

{hospital.address || "Address unavailable"}

</p>



<p>

🏙️

{hospital.city},
{hospital.state}

</p>



<p>

☎️

{hospital.phone || "Not Available"}

</p>



</div>






<div className="hospital-actions">


<button

onClick={()=>navigate(
`/hospital/${hospital._id}`
)}

>

View Details

</button>




<button

className="emergency"

onClick={()=>navigate(
"/findblood"
)}

>

🚨 Request Blood

</button>



</div>



</div>


))

}



</div>


}



</div>


</div>


  );

};


export default Hospitals;
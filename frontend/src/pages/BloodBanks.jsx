import React, { useEffect, useState } from "react";

import {
  getBloodBanks,
  getBloodStock
} from "../services/bloodBank";

import "./BloodBank.css";


const BloodBanks = () => {


const [bloodBanks,setBloodBanks] = useState([]);

const [loading,setLoading] = useState(false);

const [search,setSearch] = useState("");

const [selectedBank,setSelectedBank] = useState(null);





const fetchBloodBanks = async()=>{


try{

setLoading(true);


const res = await getBloodBanks();


setBloodBanks(
res.data.bloodBanks || []
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

fetchBloodBanks();

},[]);





const filteredBanks =
bloodBanks.filter((bank)=>{


return (

bank.city
?.toLowerCase()
.includes(
search.toLowerCase()
)

||

bank.name
?.toLowerCase()
.includes(
search.toLowerCase()
)

);


});







const bloodCount = (inventory)=>{


if(!inventory)
return 0;


return Object.values(inventory)
.reduce(
(total,value)=>
total+value,
0
);


};






return (


<div className="bloodbank-page">



<div className="bloodbank-container">



<div className="bloodbank-header">


<h1>
🩸 Partner Blood Banks
</h1>


<p>
Find available blood stock from verified blood banks
</p>


</div>







<div className="blood-search">


<input

placeholder="Search blood bank / city"

value={search}

onChange={
e=>setSearch(e.target.value)
}

/>


<button
onClick={fetchBloodBanks}
>

Refresh

</button>


</div>







{
loading ?

<h3 className="loading">
Loading Blood Banks...
</h3>


:


<div className="bloodbank-grid">


{
filteredBanks.length===0 &&

<p className="empty">
No Blood Bank Found
</p>

}




{
filteredBanks.map((bank)=>(



<div

className="bloodbank-card"

key={bank._id}

>




<div className="bank-icon">

🩸

</div>




<h2>
{bank.name}
</h2>



<p>

📍

{bank.city},
{bank.state}

</p>



<p>

☎️

{bank.phone || "Not Available"}

</p>





<div className="stock-box">


<h3>
Blood Stock
</h3>



<div className="stock-number">


{
bloodCount(bank.inventory)
}


Units Available


</div>


</div>







<button

className="view-btn"

onClick={
()=>setSelectedBank(bank)
}

>

View Inventory

</button>



</div>



))

}



</div>


}




</div>







{
selectedBank &&


<div className="inventory-modal">


<div className="inventory-card">


<h2>

{selectedBank.name}

</h2>



<h3>
Available Blood Groups
</h3>



<div className="inventory-grid">


{
Object.entries(
selectedBank.inventory || {}
)
.map(([group,value])=>(


<div

className="blood-stock"

key={group}

>


<strong>

{
group
.replace("_Positive","+")
.replace("_Negative","-")
}

</strong>



<span>

{value} Units

</span>


</div>


))


}



</div>




<button

className="close-btn"

onClick={
()=>setSelectedBank(null)
}

>

Close

</button>



</div>


</div>


}




</div>


);


};


export default BloodBanks;
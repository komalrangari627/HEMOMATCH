import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { io } from "socket.io-client";
import "./Request.css";
import {
  createRequest,
  getAllRequests,
  deleteRequest,
  updateRequestStatus,
  getRequestStats,
  updateRequest
} from "../services/requestService";


const SOCKET_URL =
  import.meta.env.VITE_API_URL ||
  "http://localhost:5000";


const socket = io(
  SOCKET_URL,
  {
    autoConnect:false,
    transports:["websocket"]
  }
);



function Request(){



const [requests,setRequests]=useState([]);

const [filteredRequests,setFilteredRequests]=useState([]);

const [stats,setStats]=useState({});


const [loading,setLoading]=useState(false);


const [showForm,setShowForm]=useState(false);


const [editMode,setEditMode]=useState(false);


const [selectedRequest,setSelectedRequest]=
useState(null);



const [search,setSearch]=useState("");


const [statusFilter,setStatusFilter]=
useState("All");



const initialForm={

patientName:"",

bloodGroup:"",

units:1,

hospital:"",

city:"",

state:"",

requiredDate:"",

emergency:false,

message:""

};



const [form,setForm]=useState(initialForm);



const loadRequests=async()=>{


try{


setLoading(true);


const res=await getAllRequests();



const data=
res?.data?.requests ||
res?.data ||
[];



setRequests(data);


setFilteredRequests(data);



}

catch(error){


console.log(error);


toast.error(
error?.response?.data?.message ||
"Failed to load requests"
);



}

finally{


setLoading(false);


}


};




const loadStats=async()=>{


try{


const res=
await getRequestStats();



setStats(
res?.data ||
{}
);



}

catch(error){


console.log(error);


}



};




useEffect(()=>{


loadRequests();

loadStats();



},[]);





useEffect(()=>{


socket.connect();





socket.on(
"connect",
()=>{


console.log(
"Socket Connected:",
socket.id
);


}

);







socket.on(
"newRequest",
(data)=>{


toast.success(

`New request from ${
data?.patientName || "User"
}`

);



loadRequests();

loadStats();



}

);







socket.on(
"requestUpdated",
()=>{


toast.info(
"Request updated"
);



loadRequests();

loadStats();



}

);







socket.on(
"requestDeleted",
()=>{


toast.error(
"Request deleted"
);



loadRequests();

loadStats();



}

);







socket.on(
"emergencyRequest",
(data)=>{


toast.error(

`🚨 Emergency ${
data?.bloodGroup || ""
} request`

);



loadRequests();



}

);









return()=>{


socket.off("connect");

socket.off("newRequest");

socket.off("requestUpdated");

socket.off("requestDeleted");

socket.off("emergencyRequest");



socket.disconnect();



};



},[]);





const handleChange=(e)=>{


const {
name,
value,
checked,
type
}=e.target;



setForm({

...form,


[name]:

type==="checkbox"

?

checked

:

value



});



};




const handleSubmit=async(e)=>{


e.preventDefault();



try{


const res=
await createRequest(form);



toast.success(
"Blood request created"
);



setShowForm(false);


setForm(initialForm);



loadRequests();

loadStats();





if(socket.connected){


socket.emit(
"newRequest",
res?.data
);



}




}

catch(error){


console.log(error);


toast.error(

error?.response?.data?.message ||

"Request creation failed"

);



}



};


const handleDelete=async(id)=>{


const confirmDelete=
window.confirm(
"Delete this request?"
);



if(!confirmDelete)
return;



try{


await deleteRequest(id);



toast.success(
"Request deleted"
);



loadRequests();

loadStats();



if(socket.connected){


socket.emit(
"requestDeleted",
{
id
}
);


}





}

catch(error){


toast.error(

error?.response?.data?.message ||

"Delete failed"

);


}



};





const changeStatus=async(
id,
status
)=>{


try{


await updateRequestStatus(
id,
status
);



toast.success(
`Request ${status}`
);



loadRequests();

loadStats();





if(socket.connected){


socket.emit(
"requestUpdated",
{
id,
status
}
);


}



}

catch(error){


toast.error(

error?.response?.data?.message ||

"Status update failed"

);



}



};



const statusClass=(status)=>{


switch(status){


case "Accepted":

return "accepted";



case "Rejected":

return "rejected";



case "Completed":

return "completed";



default:

return "pending";


}



};



const openCreateModal=()=>{


setEditMode(false);



setSelectedRequest(null);



setForm(initialForm);



setShowForm(true);



};



const openEditModal=(request)=>{


setEditMode(true);



setSelectedRequest(request);




setForm({


patientName:
request.patientName || "",



bloodGroup:
request.bloodGroup || "",



units:
request.units || 1,



hospital:
request.hospital || "",



city:
request.city || "",



state:
request.state || "",



requiredDate:

request.requiredDate

?

request.requiredDate.substring(
0,
10
)

:

"",




emergency:
request.emergency || false,



message:
request.message || ""



});





setShowForm(true);



};



const handleUpdate=async(e)=>{


e.preventDefault();



try{


await updateRequest(

selectedRequest._id,

form

);




toast.success(
"Request Updated"
);




setShowForm(false);



setEditMode(false);



setSelectedRequest(null);



setForm(initialForm);



loadRequests();

loadStats();





}

catch(error){



toast.error(

error?.response?.data?.message ||

"Update Failed"

);



}



};



const validateForm=()=>{


if(

!form.patientName ||

!form.bloodGroup ||

!form.hospital ||

!form.city


){


toast.error(
"Please fill all required fields"
);



return false;



}






if(
Number(form.units)<=0
){


toast.error(
"Units must be greater than 0"
);



return false;



}



return true;



};



const submitRequest=(e)=>{


if(!validateForm())

return;



if(editMode){


handleUpdate(e);



}

else{


handleSubmit(e);



}



};



const handleStatus=(id,status)=>{


changeStatus(
id,
status
);



};










return(


<>





<div className="request-page">





<div className="request-header">


<h1>

Blood Requests

</h1>




<button

className="create-request-btn"

onClick={openCreateModal}

>

+ Create Request

</button>



</div>









<div className="request-filter-box">



<input


type="text"


placeholder="Search patient, hospital, blood group"


value={search}


onChange={
(e)=>setSearch(e.target.value)
}


/>






<select


value={statusFilter}


onChange={
(e)=>setStatusFilter(
e.target.value
)
}


>


<option>
All
</option>


<option>
Pending
</option>


<option>
Accepted
</option>


<option>
Rejected
</option>


<option>
Completed
</option>


</select>





</div>




<div className="request-table-wrapper">


<table className="request-table">


<thead>


<tr>


<th>
Patient
</th>


<th>
Blood
</th>


<th>
Units
</th>


<th>
Hospital
</th>


<th>
Location
</th>


<th>
Date
</th>


<th>
Status
</th>


<th>
Actions
</th>


</tr>


</thead>






<tbody>


{


filteredRequests.length===0 ?



<tr>


<td

colSpan="8"

className="empty-row"

>


No Blood Requests Found


</td>


</tr>



:




filteredRequests.map(
(request)=>(



<tr


key={
request._id
}


className={
request.emergency

?

"emergency-row"

:

""

}


>



<td>



<div className="patient-info">



<h4>

{
request.patientName
}


</h4>




{

request.emergency &&


<span className="emergency-tag">

Emergency

</span>



}



</div>


</td>








<td>


<span

className="blood-group"

>


{
request.bloodGroup
}


</span>



</td>






<td>


{
request.units
}

Units


</td>








<td>


{
request.hospital
}


</td>








<td>


{
request.city
}

,

{
request.state
}



</td>







<td>


{
new Date(
request.requiredDate
)
.toLocaleDateString()

}


</td>








<td>


<span

className={
`request-status ${
statusClass(
request.status
)
}`

}

>


{
request.status ||
"Pending"
}



</span>


</td>









<td>



<div className="action-buttons">



<button

className="edit-btn"

onClick={
()=>openEditModal(request)
}

>

Edit

</button>





{

request.status==="Pending"

&&

<>



<button

className="accept-btn"

onClick={
()=>handleStatus(
request._id,
"Accepted"
)
}

>

Accept

</button>






<button

className="reject-btn"

onClick={
()=>handleStatus(
request._id,
"Rejected"
)
}

>

Reject

</button>



</>



}








{

request.status==="Accepted"

&&


<button

className="complete-btn"

onClick={
()=>handleStatus(
request._id,
"Completed"
)
}

>

Complete

</button>



}





<button

className="delete-btn"

onClick={
()=>handleDelete(
request._id
)
}

>

Delete

</button>




</div>



</td>





</tr>


)

)




}





</tbody>



</table>


</div>



<div className="request-card-container">

{
filteredRequests.length === 0 ? (

<div className="empty-card">
No Requests Available
</div>

) : (

filteredRequests.map((request)=>(

<div
key={request._id}
className={
request.emergency
?
"request-card emergency-card"
:
"request-card"
}
>



<div className="card-header">


<div>

<h3>
{request.patientName}
</h3>


<p>
Blood Group :

<strong>
{request.bloodGroup}
</strong>

</p>


</div>



{
request.emergency &&

<span className="emergency-tag">
 Emergency
</span>

}



</div>





<div className="card-body">


<p>
 Hospital :
{request.hospital}
</p>


<p>
 Location :
{request.city}, {request.state}
</p>


<p>
 Required :
{request.units} Units
</p>



<p>

 Date :

{
request.requiredDate
?
new Date(request.requiredDate)
.toLocaleDateString()
:
"N/A"
}

</p>



<p>

Status :

<span
className={`status ${statusClass(request.status)}`}
>

{
request.status || "Pending"
}

</span>

</p>


</div>








<div className="card-actions">



<button

className="edit-btn"

onClick={()=>
openEditModal(request)
}

>

Edit

</button>





{
request.status === "Pending" &&

<>


<button

className="accept-btn"

onClick={()=>
handleStatus(
request._id,
"Accepted"
)
}

>

Accept

</button>





<button

className="reject-btn"

onClick={()=>
handleStatus(
request._id,
"Rejected"
)
}

>

Reject

</button>



</>


}





{
request.status === "Accepted" &&


<button

className="complete-btn"

onClick={()=>
handleStatus(
request._id,
"Completed"
)
}

>

Complete

</button>


}







<button

className="delete-btn"

onClick={()=>
handleDelete(request._id)
}

>

Delete

</button>





</div>







</div>


))


)

}



</div>




{
showForm &&

<div className="request-modal-overlay">


<div className="request-modal">





<div className="modal-header">


<h2>

{
editMode
?
"Edit Blood Request"
:
"Create Blood Request"
}

</h2>




<button

type="button"

className="close-modal"

onClick={()=>
setShowForm(false)
}

>

×

</button>


</div>









<form

className="request-form"

onSubmit={submitRequest}

>




<div className="form-grid">





<div className="form-group">

<label>
Patient Name *
</label>


<input

type="text"

name="patientName"

value={form.patientName}

onChange={handleChange}

/>


</div>







<div className="form-group">

<label>
Blood Group *
</label>


<select

name="bloodGroup"

value={form.bloodGroup}

onChange={handleChange}

>


<option value="">
Select Blood
</option>


<option>A+</option>
<option>A-</option>
<option>B+</option>
<option>B-</option>
<option>AB+</option>
<option>AB-</option>
<option>O+</option>
<option>O-</option>


</select>


</div>







<div className="form-group">

<label>
Units
</label>


<input

type="number"

name="units"

min="1"

value={form.units}

onChange={handleChange}

/>


</div>








<div className="form-group">

<label>
Required Date
</label>


<input

type="date"

name="requiredDate"

value={form.requiredDate}

onChange={handleChange}

/>


</div>









<div className="form-group">

<label>
Hospital *
</label>


<input

type="text"

name="hospital"

value={form.hospital}

onChange={handleChange}

/>


</div>









<div className="form-group">

<label>
City *
</label>


<input

type="text"

name="city"

value={form.city}

onChange={handleChange}

/>


</div>








<div className="form-group">

<label>
State
</label>


<input

type="text"

name="state"

value={form.state}

onChange={handleChange}

/>


</div>





</div>









<div className="form-group">

<label>
Message
</label>


<textarea

name="message"

value={form.message}

onChange={handleChange}

/>


</div>









<div className="emergency-check">


<input

type="checkbox"

name="emergency"

checked={form.emergency}

onChange={handleChange}

/>


<label>
Emergency Request 
</label>



</div>









<div className="form-buttons">



<button

type="button"

className="cancel-btn"

onClick={()=>
setShowForm(false)
}

>

Cancel

</button>








<button

type="submit"

className="submit-btn"

>

{
editMode
?
"Update Request"
:
"Create Request"
}

</button>




</div>







</form>







</div>


</div>

}




</div>


</>

);

}



export default Request;
import {getRequests} from "../../services/request";

function RequestTable(){

const requests=[

{
patient:"Anjali",
blood:"O-",
hospital:"City Hospital",
status:"Pending"
},

{
patient:"Rohit",
blood:"AB+",
hospital:"Apollo",
status:"Approved"
},

{
patient:"Sneha",
blood:"B+",
hospital:"Care Hospital",
status:"Completed"
}

];

return(

<div className="dashboard-panel">

<h3>

Blood Requests

</h3>

<table className="dashboard-table">

<thead>

<tr>

<th>Patient</th>

<th>Blood</th>

<th>Hospital</th>

<th>Status</th>

</tr>

</thead>

<tbody>

{

requests.map((item,index)=>(

<tr key={index}>

<td>{item.patient}</td>

<td>{item.blood}</td>

<td>{item.hospital}</td>

<td>

<span className={`status ${item.status.toLowerCase()}`}>

{item.status}

</span>

</td>

</tr>

))

}

</tbody>

</table>

</div>

);

}

export default RequestTable;
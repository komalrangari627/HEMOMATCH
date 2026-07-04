import {
BarChart,
Bar,
ResponsiveContainer,
CartesianGrid,
XAxis,
YAxis,
Tooltip
} from "recharts";

const data=[

{
status:"Pending",
count:35
},

{
status:"Approved",
count:72
},

{
status:"Completed",
count:140
}

];

function RequestStatusChart(){

return(

<div className="dashboard-panel">

<h3>

Request Status

</h3>

<ResponsiveContainer width="100%" height={300}>

<BarChart data={data}>

<CartesianGrid strokeDasharray="3 3"/>

<XAxis dataKey="status"/>

<YAxis/>

<Tooltip/>

<Bar

dataKey="count"

fill="#D62828"

/>

</BarChart>

</ResponsiveContainer>

</div>

);

}

export default RequestStatusChart;
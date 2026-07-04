import {
  PieChart,
  Pie,
  Tooltip,
  Cell,
  ResponsiveContainer
} from "recharts";

const data = [

{ name:"A+",value:25 },

{ name:"B+",value:20 },

{ name:"O+",value:30 },

{ name:"AB+",value:15 },

{ name:"Others",value:10 }

];

const COLORS=[
"#D62828",
"#2563EB",
"#16A34A",
"#7C3AED",
"#F59E0B"
];

function BloodGroupChart(){

return(

<div className="dashboard-panel">

<h3>

Blood Group Distribution

</h3>

<ResponsiveContainer width="100%" height={300}>

<PieChart>

<Pie

data={data}

dataKey="value"

outerRadius={100}

label

>

{

data.map((entry,index)=>

<Cell

key={index}

fill={COLORS[index]}

/>

)

}

</Pie>

<Tooltip/>

</PieChart>

</ResponsiveContainer>

</div>

);

}

export default BloodGroupChart;
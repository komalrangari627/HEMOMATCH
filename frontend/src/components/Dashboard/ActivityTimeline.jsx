const activities=[

"Blood donated at City Hospital",

"Emergency O- request fulfilled",

"New donor registered",

"Blood bank stock updated",

"Donation camp scheduled"

];

function ActivityTimeline(){

return(

<div className="dashboard-panel">

<h3>

Recent Activity

</h3>

<div className="timeline">

{

activities.map((item,index)=>(

<div

key={index}

className="timeline-item"

>

<div className="timeline-dot"/>

<p>{item}</p>

</div>

))

}

</div>

</div>

);

}

export default ActivityTimeline;
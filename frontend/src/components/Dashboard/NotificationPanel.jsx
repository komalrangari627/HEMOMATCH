import {getNotifications} from "../../services/notification";

const notifications=[

{
title:"Urgent A+ Blood Needed",
time:"5 min ago"
},

{
title:"Donation Camp Tomorrow",
time:"1 hour ago"
},

{
title:"Hospital Approved",
time:"Yesterday"
}

];

function NotificationPanel(){

return(

<div className="dashboard-panel">

<h3>

Notifications

</h3>

{

notifications.map((item,index)=>(

<div
className="notification-item"
key={index}
>

<h4>

{item.title}

</h4>

<span>

{item.time}

</span>

</div>

))

}

</div>

);

}

export default NotificationPanel;
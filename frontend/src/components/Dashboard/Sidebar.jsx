import {
FaHome,
FaTint,
FaHospital,
FaUsers,
FaHistory,
FaUser,
FaCog,
FaSignOutAlt
} from "react-icons/fa";

import { NavLink } from "react-router-dom";

import "./../../styles/Sidebar.css";

function Sidebar(){

return(

<div className="sidebar">

<h2>

❤️ HemoMatch

</h2>

<NavLink to="/dashboard">

<FaHome/>

Dashboard

</NavLink>

<NavLink to="/find-blood">

<FaTint/>

Find Blood

</NavLink>

<NavLink to="/requests">

<FaUsers/>

Requests

</NavLink>

<NavLink to="/history">

<FaHistory/>

History

</NavLink>

<NavLink to="/profile">

<FaUser/>

Profile

</NavLink>

<NavLink to="/settings">

<FaCog/>

Settings

</NavLink>

<NavLink to="/logout">

<FaSignOutAlt/>

Logout

</NavLink>

</div>

);

}

export default Sidebar;
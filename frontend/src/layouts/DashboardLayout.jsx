import { Outlet } from "react-router-dom";

import Sidebar from "../components/Dashboard/Sidebar";
import Topbar from "../components/Dashboard/Topbar";

function DashboardLayout(){

return(

<div className="dashboard">

<Sidebar/>

<div className="dashboard-content">

<Topbar/>

<Outlet/>

</div>

</div>

);

}

export default DashboardLayout;
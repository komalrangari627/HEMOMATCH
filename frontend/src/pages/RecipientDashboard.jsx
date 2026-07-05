import Sidebar from "../components/Dashboard/Sidebar";
import Topbar from "../components/Dashboard/Topbar";
import Statistics from "../components/Dashboard/Statistics";
import RecentRequests from "../components/Dashboard/RecentRequests";
import NotificationPanel from "../components/Dashboard/NotificationPanel";
import "../styles/Dashboard.css";
import {getRecipientRequests} from "../services/recipient";
import {getRequests} from "../services/request";

function RecipientDashboard() {

  return (

    <div className="dashboard">

      <Sidebar />

      <div className="dashboard-content">

        <Topbar />

        <Statistics />

        <div className="dashboard-grid">

          <RecentRequests />

          <NotificationPanel />

        </div>

      </div>

    </div>

  );

}

export default RecipientDashboard;
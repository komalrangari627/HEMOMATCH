import Sidebar from "../components/Dashboard/Sidebar";
import Topbar from "../components/Dashboard/Topbar";
import Statistics from "../components/Dashboard/Statistics";
import RecentRequests from "../components/Dashboard/RecentRequests";
import UpcomingCamps from "../components/Dashboard/UpcomingCamps";
import "./../styles/Dashboard.css";
import DonationChart from "../components/Dashboard/DonationChart";
import BloodGroupChart from "../components/Dashboard/BloodGroupChart";
import RequestStatusChart from "../components/Dashboard/RequestStatusChart";
import ActivityTimeline from "../components/Dashboard/ActivityTimeline";
import NotificationPanel from "../components/Dashboard/NotificationPanel";

function Dashboard() {

  return (

    <div className="dashboard">

      <Sidebar />

      <div className="dashboard-content">

        <Topbar />

        <Statistics />

        <div className="dashboard-grid">

          <RecentRequests />

          <UpcomingCamps />
          <div className="dashboard-grid">
            <DonationChart />
            <BloodGroupChart />
          </div>

          <div className="dashboard-grid">
            <RequestStatusChart />
            <NotificationPanel />
          </div>

          <div className="dashboard-grid">
            <ActivityTimeline />
            <RecentRequests />
          </div>

          <div className="dashboard-grid">
            <UpcomingCamps />
            <BloodInventory />
          </div>
        </div>

      </div>

    </div>

  );

}

export default Dashboard;
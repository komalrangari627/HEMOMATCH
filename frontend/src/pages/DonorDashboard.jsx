import Sidebar from "../components/Dashboard/Sidebar";
import Topbar from "../components/Dashboard/Topbar";
import Statistics from "../components/Dashboard/Statistics";
import DonationChart from "../components/Dashboard/DonationChart";
import ProfileCard from "../components/Dashboard/ProfileCard";
import UpcomingCamps from "../components/Dashboard/UpcomingCamps";
import ActivityTimeline from "../components/Dashboard/ActivityTimeline";
import "../styles/Dashboard.css";
import {
getAllDonors,
searchDonors
} from "../services";

function DonorDashboard() {

  return (

    <div className="dashboard">

      <Sidebar />

      <div className="dashboard-content">

        <Topbar />

        <Statistics />

        <div className="dashboard-grid">

          <DonationChart />

          <ProfileCard />

        </div>

        <div className="dashboard-grid">

          <UpcomingCamps />

          <ActivityTimeline />

        </div>

      </div>

    </div>

  );

}

export default DonorDashboard;
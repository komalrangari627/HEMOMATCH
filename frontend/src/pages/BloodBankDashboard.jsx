import Sidebar from "../components/Dashboard/Sidebar";
import Topbar from "../components/Dashboard/Topbar";
import Statistics from "../components/Dashboard/Statistics";
import BloodInventory from "../components/Dashboard/BloodInventory";
import RequestStatusChart from "../components/Dashboard/RequestStatusChart";
import DonationChart from "../components/Dashboard/DonationChart";
import "../styles/Dashboard.css";

function BloodBankDashboard() {

  return (

    <div className="dashboard">

      <Sidebar />

      <div className="dashboard-content">

        <Topbar />

        <Statistics />

        <div className="dashboard-grid">

          <BloodInventory />

          <RequestStatusChart />

        </div>

        <DonationChart />

      </div>

    </div>

  );

}

export default BloodBankDashboard;
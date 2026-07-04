import Sidebar from "../components/Dashboard/Sidebar";
import Topbar from "../components/Dashboard/Topbar";
import Statistics from "../components/Dashboard/Statistics";
import BloodInventory from "../components/Dashboard/BloodInventory";
import RequestTable from "../components/Dashboard/RequestTable";
import DonationChart from "../components/Dashboard/DonationChart";
import "../styles/Dashboard.css";

function HospitalDashboard() {

  return (

    <div className="dashboard">

      <Sidebar />

      <div className="dashboard-content">

        <Topbar />

        <Statistics />

        <div className="dashboard-grid">

          <BloodInventory />

          <DonationChart />

        </div>

        <RequestTable />

      </div>

    </div>

  );

}

export default HospitalDashboard;
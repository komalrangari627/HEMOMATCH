import "./../../styles/Dashboard.css";

function DashboardCard({ icon, title, value, color, growth }) {
  return (
    <div className="dashboard-card">
      <div
        className="dashboard-card-icon"
        style={{ backgroundColor: color }}
      >
        {icon}
      </div>

      <div className="dashboard-card-content">
        <h4>{title}</h4>
        <h2>{value}</h2>

        <span className="growth">
          ▲ {growth}
        </span>
      </div>
    </div>
  );
}

export default DashboardCard;
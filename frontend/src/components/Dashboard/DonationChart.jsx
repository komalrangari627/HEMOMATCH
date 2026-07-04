import {
  ResponsiveContainer,
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip
} from "recharts";

const data = [
  { month: "Jan", donations: 40 },
  { month: "Feb", donations: 65 },
  { month: "Mar", donations: 58 },
  { month: "Apr", donations: 90 },
  { month: "May", donations: 120 },
  { month: "Jun", donations: 105 },
];

function DonationChart() {

  return (

    <div className="dashboard-panel">

      <h3>Monthly Donations</h3>

      <ResponsiveContainer width="100%" height={300}>

        <LineChart data={data}>

          <CartesianGrid strokeDasharray="3 3"/>

          <XAxis dataKey="month"/>

          <YAxis/>

          <Tooltip/>

          <Line
            type="monotone"
            dataKey="donations"
            stroke="#D62828"
            strokeWidth={3}
          />

        </LineChart>

      </ResponsiveContainer>

    </div>

  );

}

export default DonationChart;
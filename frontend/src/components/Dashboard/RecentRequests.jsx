import {getRequests} from "../../services/request";

function RecentRequests() {

  const requests = [

    {
      patient: "Rahul Sharma",
      blood: "A+",
      hospital: "City Hospital",
      status: "Pending"
    },

    {
      patient: "Neha Patil",
      blood: "O-",
      hospital: "Apollo",
      status: "Approved"
    },

    {
      patient: "Amit Verma",
      blood: "B+",
      hospital: "General Hospital",
      status: "Completed"
    }

  ];

  return (

    <div className="dashboard-panel">

      <h3>Recent Blood Requests</h3>

      <table className="dashboard-table">

        <thead>

          <tr>

            <th>Patient</th>

            <th>Blood</th>

            <th>Hospital</th>

            <th>Status</th>

          </tr>

        </thead>

        <tbody>

          {

            requests.map((item,index)=>(

              <tr key={index}>

                <td>{item.patient}</td>

                <td>{item.blood}</td>

                <td>{item.hospital}</td>

                <td>{item.status}</td>

              </tr>

            ))

          }

        </tbody>

      </table>

    </div>

  );

}

export default RecentRequests;
import {getDonationCamps} from "../../services/camp";

function UpcomingCamps() {

  const camps = [

    {
      name: "Mega Blood Camp",
      date: "12 July 2026",
      location: "Amravati"
    },

    {
      name: "City Donation Drive",
      date: "18 July 2026",
      location: "Nagpur"
    }

  ];

  return (

    <div className="dashboard-panel">

      <h3>Upcoming Camps</h3>

      {

        camps.map((camp,index)=>(

          <div
            className="camp-item"
            key={index}
          >

            <h4>{camp.name}</h4>

            <p>{camp.date}</p>

            <p>{camp.location}</p>

            <button className="register-btn">

              Register

            </button>

          </div>

        ))

      }

    </div>

  );

}

export default UpcomingCamps;
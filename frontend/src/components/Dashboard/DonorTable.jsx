function DonorTable() {

  const donors=[

    {
      name:"Rahul Sharma",
      group:"A+",
      city:"Amravati",
      phone:"9876543210"
    },

    {
      name:"Priya Patil",
      group:"O+",
      city:"Nagpur",
      phone:"9876501234"
    },

    {
      name:"Amit Verma",
      group:"B-",
      city:"Pune",
      phone:"9898989898"
    }

  ];

  return(

    <div className="dashboard-panel">

      <h3>Available Donors</h3>

      <table className="dashboard-table">

        <thead>

          <tr>

            <th>Name</th>

            <th>Blood</th>

            <th>City</th>

            <th>Phone</th>

          </tr>

        </thead>

        <tbody>

          {

            donors.map((donor,index)=>(

              <tr key={index}>

                <td>{donor.name}</td>

                <td>{donor.group}</td>

                <td>{donor.city}</td>

                <td>{donor.phone}</td>

              </tr>

            ))

          }

        </tbody>

      </table>

    </div>

  );

}

export default DonorTable;
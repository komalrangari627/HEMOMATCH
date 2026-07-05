import {
  FaTint,
  FaExclamationTriangle
} from "react-icons/fa";
import {getHospitals, getHospitalInventory} from "../../services/hospital";

function BloodInventory() {

  const inventory = [

    { group: "A+", units: 45 },
    { group: "A-", units: 12 },
    { group: "B+", units: 38 },
    { group: "B-", units: 9 },
    { group: "O+", units: 56 },
    { group: "O-", units: 6 },
    { group: "AB+", units: 18 },
    { group: "AB-", units: 4 }

  ];

  return (

    <div className="dashboard-panel">

      <h3>Blood Inventory</h3>

      {

        inventory.map((item,index)=>(

          <div
            className="inventory-item"
            key={index}
          >

            <div className="blood-group">

              <FaTint/>

              <span>{item.group}</span>

            </div>

            <div>

              {

                item.units < 10 ?

                <span className="low-stock">

                  <FaExclamationTriangle/>

                  {item.units} Units

                </span>

                :

                <span>{item.units} Units</span>

              }

            </div>

          </div>

        ))

      }

    </div>

  );

}

export default BloodInventory;
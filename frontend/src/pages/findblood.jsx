import React, { useEffect, useState } from "react";
import { searchBlood } from "../services/bloodBank";
import { createEmergencyRequest } from "../services/emergencyService";
import "./FindBlood.css";
import toast from "react-hot-toast";
import socket from "../socket";


const BLOOD_GROUPS = [
  "A+",
  "A-",
  "B+",
  "B-",
  "AB+",
  "AB-",
  "O+",
  "O-"
];


const FindBlood = () => {


  const [bloodGroup, setBloodGroup] = useState("");
  const [location, setLocation] = useState("");
  const [urgent, setUrgent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState([]);

  const [showEmergency, setShowEmergency] = useState(false);


  const [emergencyData, setEmergencyData] = useState({

    patientName: "",
    bloodGroup: "",
    units: 1,
    hospital: "",
    city: "",
    contact: ""

  });



  useEffect(() => {


    socket.on(
      "emergency-request",
      (data) => {

        toast.error(
          `${data.bloodGroup} blood required at ${data.hospital}`
        );

      }
    );


    return () => {

      socket.off("emergency-request");

    };


  }, []);




  const handleSearch = async () => {


    setLoading(true);


    try {


      const data = await searchBlood({

        bloodGroup,
        location,
        urgent

      });


      setResults(data || []);


    }
    catch (err) {

      console.log(err);
      setResults([]);

    }


    setLoading(false);


  };





  const submitEmergency = async () => {


    try {


      await createEmergencyRequest(emergencyData);


      toast.success(
        "Emergency alert sent successfully"
      );


      setShowEmergency(false);


    }
    catch (err) {

      toast.error(
        "Emergency request failed"
      );

    }

  };



  return (

    <div className="findblood-wrapper">


      <div className="findblood-card">


        <header className="findblood-header">

          <h1>
            🩸 Find Blood Donors
          </h1>

          <p>
            Find verified blood donors instantly near you
          </p>

        </header>





        <div className="blood-chips">

          {
            BLOOD_GROUPS.map(bg => (

              <button

                key={bg}

                className={
                  bloodGroup === bg
                    ? "chip active"
                    : "chip"
                }

                onClick={() => setBloodGroup(bg)}

              >

                {bg}

              </button>

            ))
          }


        </div>





        <div className="search-panel">


          <button

            className="emergency-btn"

            onClick={() => setShowEmergency(true)}

          >

            🚨 Emergency Request

          </button>



          <input

            placeholder="Enter city / hospital"

            value={location}

            onChange={
              e => setLocation(e.target.value)
            }

          />



          <label className="urgent-toggle">

            <input

              type="checkbox"

              checked={urgent}

              onChange={
                e => setUrgent(e.target.checked)
              }

            />

            Urgent Only

          </label>



          <button

            className="search-btn"

            onClick={handleSearch}

          >

            {
              loading
                ?
                "Searching..."
                :
                "Search Donors"
            }


          </button>


        </div>






        <div className="results-grid">


          {
            loading &&

            <p className="info">
              Searching donors...
            </p>

          }



          {
            !loading &&
            results.length === 0 &&

            <p className="info">
              No donors found
            </p>

          }





          {
            results.map(item => (


              <div

                className="blood-card"

                key={item._id}

              >


                <div className="blood-type">

                  {item.bloodGroup}

                </div>



                <p>
                  <b>Location:</b> {item.location}
                </p>



                <p>

                  <b>Status:</b>

                  <span

                    className={
                      item.available
                        ?
                        "available"
                        :
                        "unavailable"
                    }

                  >

                    {
                      item.available
                        ?
                        " Available"
                        :
                        " Not Available"
                    }

                  </span>


                </p>



                {
                  item.urgent &&

                  <span className="urgent-badge">

                    🚨 Urgent

                  </span>

                }



                <button className="request-btn">

                  Request Blood

                </button>



              </div>


            ))

          }



        </div>


      </div>





      {
        showEmergency &&


        <div className="emergency-modal">


          <div className="emergency-card">


            <h2>
              🚨 Emergency Blood Request
            </h2>



            <input

              placeholder="Patient Name"

              onChange={
                e => setEmergencyData({
                  ...emergencyData,
                  patientName: e.target.value
                })
              }

            />



            <select

              onChange={
                e => setEmergencyData({
                  ...emergencyData,
                  bloodGroup: e.target.value
                })
              }

            >


              {
                BLOOD_GROUPS.map(bg => (

                  <option key={bg}>
                    {bg}
                  </option>

                ))
              }


            </select>




            <input

              type="number"

              placeholder="Units Required"

              onChange={
                e => setEmergencyData({
                  ...emergencyData,
                  units: e.target.value
                })
              }

            />



            <input

              placeholder="Hospital"

              onChange={
                e => setEmergencyData({
                  ...emergencyData,
                  hospital: e.target.value
                })
              }

            />



            <input

              placeholder="City"

              onChange={
                e => setEmergencyData({
                  ...emergencyData,
                  city: e.target.value
                })
              }

            />



            <input

              placeholder="Contact"

              onChange={
                e => setEmergencyData({
                  ...emergencyData,
                  contact: e.target.value
                })
              }

            />



            <button

              className="send-btn"

              onClick={submitEmergency}

            >

              Send Alert

            </button>




            <button

              className="cancel-btn"

              onClick={
                () => setShowEmergency(false)
              }

            >

              Cancel

            </button>



          </div>


        </div>


      }


    </div>


  );


};


export default FindBlood;
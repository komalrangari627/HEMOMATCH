import "./StepIndicator.css";

function StepIndicator({ step }) {

  const steps = [

    "Account",

    "Personal",

    "Address",

    "Review"

  ];

  return (

    <div className="stepper">

      {

        steps.map((item,index)=>(

          <div
            key={index}
            className={
              step>=index+1
              ?
              "step active"
              :
              "step"
            }
          >

            <div>

              {index+1}

            </div>

            <span>

              {item}

            </span>

          </div>

        ))

      }

    </div>

  );

}

export default StepIndicator;
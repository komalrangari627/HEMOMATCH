import { Outlet } from "react-router-dom";
import "./layout.css";

function AuthLayout() {

  return (

    <div className="auth-layout">

      <div className="auth-left">

        <h1>HemoMatch</h1>

        <p>

          Connecting Blood Donors with Patients
          in Real Time.

        </p>

      </div>

      <div className="auth-right">

        <Outlet />

      </div>

    </div>

  );

}

export default AuthLayout;
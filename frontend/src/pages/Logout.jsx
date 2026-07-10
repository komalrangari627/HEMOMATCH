import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";


function Logout(){

    const { setUser } = useContext(AuthContext);

    const navigate = useNavigate();


    useEffect(()=>{

        localStorage.removeItem("token");
        localStorage.removeItem("user");

        setUser(null);

        navigate("/");

    },[]);


    return (
        <div>
            <h2>Logging out...</h2>
        </div>
    );

}


export default Logout;
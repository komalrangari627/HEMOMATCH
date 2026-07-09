import { Navigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

import useAuth from "../hooks/useAuth";

function ProtectedRoute({ children }) {

    const { user, loading } = useAuth();

    if (loading) return <h2>Loading...</h2>;

    return user

        ? children

        : <Navigate to="/login" />;

}

export default ProtectedRoute;
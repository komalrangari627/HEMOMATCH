import { Navigate } from "react-router-dom";

import useAuth from "../hooks/useAuth";

function AdminRoute({ children }) {

    const { user } = useAuth();

    if (!user)

        return <Navigate to="/login" />;

    return user.role === "admin"

        ? children

        : <Navigate to="/" />;

}

export default AdminRoute;
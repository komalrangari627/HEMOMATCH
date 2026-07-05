import { createContext, useContext, useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";
import {
  loginUser,
  registerUser,
  getCurrentUser
} from "../services";

export const AuthContext = createContext();

function AuthProvider({ children }) {

    const [user, setUser] = useState(null);

    const [loading, setLoading] = useState(true);

    useEffect(() => {

        const token = localStorage.getItem("token");

        const savedUser = localStorage.getItem("user");

        if (token && savedUser) {

            setUser(JSON.parse(savedUser));

        }

        setLoading(false);

    }, []);

    const login = (userData, token) => {

        localStorage.setItem("token", token);

        localStorage.setItem("user", JSON.stringify(userData));

        setUser(userData);

    };

    const logout = () => {

        localStorage.clear();

        setUser(null);

    };

    return (

        <AuthContext.Provider

            value={{

                user,

                login,

                logout,

                loading

            }}

        >

            {children}

        </AuthContext.Provider>

    );

}

export default AuthProvider;
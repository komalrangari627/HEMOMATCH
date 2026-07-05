import "./../styles/Login.css";

import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import axios from "axios";
import toast from "react-hot-toast";

import { useAuth } from "../context/AuthContext";

import {
  FaEnvelope,
  FaLock,
  FaEye,
  FaEyeSlash,
  FaHeart,
} from "react-icons/fa";

import {
  loginUser,
  registerUser,
  getCurrentUser
} from "../services";

function Login() {

  const navigate = useNavigate();

  const { login } = useAuth();

  const [showPassword, setShowPassword] = useState(false);

  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({

    email: "",

    password: "",

    remember: false,

  });

  const handleChange = (e) => {

    const { name, value, checked, type } = e.target;

    setFormData({

      ...formData,

      [name]: type === "checkbox" ? checked : value,

    });

  };

  const handleSubmit = async (e) => {

    e.preventDefault();

    setLoading(true);

    try {

      const res = await axios.post(

        "http://localhost:5000/api/auth/login",

        {

          email: formData.email,

          password: formData.password,

        }

      );

      const token = res.data.token;

      login(token);

      toast.success("Login Successful");

      const role =
        res.data.user?.role ||
        jwtRole(token);

      switch (role) {

        case "Admin":

          navigate("/admin-dashboard");

          break;

        case "Hospital":

          navigate("/hospital-dashboard");

          break;

        case "Blood Bank":

          navigate("/bloodbank-dashboard");

          break;

        case "Recipient":

          navigate("/recipient-dashboard");

          break;

        default:

          navigate("/donor-dashboard");

      }

    } catch (error) {

      toast.error(

        error.response?.data?.message ||

          "Invalid Email or Password"

      );

    } finally {

      setLoading(false);

    }

  };

  function jwtRole(token) {

    try {

      const payload = JSON.parse(

        atob(token.split(".")[1])

      );

      return payload.role;

    } catch {

      return "Donor";

    }

  }

  return (

    <div className="login-page">

      <div className="login-left">

        <div className="overlay">

          <FaHeart className="heart-icon" />

          <h1>Welcome Back</h1>

          <p>

            Login to HemoMatch and continue saving lives through blood donation.

          </p>

        </div>

      </div>

      <div className="login-right">

        <div className="login-card">

          <h2>Login</h2>

          <p>Access your HemoMatch account</p>

          <form onSubmit={handleSubmit}>

            <div className="input-group">

              <FaEnvelope />

              <input

                type="email"

                name="email"

                placeholder="Email Address"

                value={formData.email}

                onChange={handleChange}

                required

              />

            </div>

            <div className="input-group">

              <FaLock />

              <input

                type={showPassword ? "text" : "password"}

                name="password"

                placeholder="Password"

                value={formData.password}

                onChange={handleChange}

                required

              />

              <span

                className="toggle-password"

                onClick={() =>

                  setShowPassword(!showPassword)

                }

              >

                {showPassword ? <FaEyeSlash /> : <FaEye />}

              </span>

            </div>

            <div className="login-options">

              <label>

                <input

                  type="checkbox"

                  name="remember"

                  checked={formData.remember}

                  onChange={handleChange}

                />

                Remember Me

              </label>

              <Link to="/forgot-password">

                Forgot Password?

              </Link>

            </div>

            <button

              type="submit"

              className="login-button"

              disabled={loading}

            >

              {loading ? "Logging in..." : "Login"}

            </button>

          </form>

          <div className="login-footer">

            Don't have an account?

            <Link to="/register">

              Register

            </Link>

          </div>

        </div>

      </div>

    </div>

  );

}

export default Login;
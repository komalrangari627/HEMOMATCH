import { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import "./../styles/Register.css";

import StepIndicator from "../components/Register/StepIndicator";
import AccountStep from "../components/Register/AccountStep";
import PersonalStep from "../components/Register/PersonalStep";
import AddressStep from "../components/Register/AddressStep";
import ReviewStep from "../components/Register/ReviewStep";
import {
  loginUser,
  registerUser,
  getCurrentUser
} from "../services";

function Register() {

  const [step, setStep] = useState(1);

  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({

    role: "Donor",
    fullName: "",
    email: "",
    phone: "",
    password: "",

    bloodGroup: "",
    gender: "",
    age: "",
    weight: "",
    lastDonation: "",

    state: "",
    district: "",
    city: "",
    pincode: "",
    address: ""

  });

  const nextStep = () => setStep((prev) => prev + 1);
  const prevStep = () => setStep((prev) => prev - 1);

  const handleSubmit = async () => {

    try {

      setLoading(true);

      const payload = {

        name: formData.fullName,
        email: formData.email,
        phone: formData.phone,
        password: formData.password,
        role: formData.role.toLowerCase()

      };

      const res = await registerUser(payload);

      localStorage.setItem(
        "token",
        res.data.token
      );

      toast.success(
        res.data.message
      );

      const profile =
        await getCurrentUser();

      console.log(profile.data);

      window.location.href = "/dashboard";

    }

    catch (err) {

      toast.error(

        err.response?.data?.message ||

        "Registration Failed"

      );

    }

    finally {

      setLoading(false);

    }

  };

  return (

    <div className="register-page">

      <div className="register-card">

        <StepIndicator step={step} />

        {step === 1 && (
          <AccountStep
            formData={formData}
            setFormData={setFormData}
            nextStep={nextStep}
          />
        )}

        {step === 2 && (
          <PersonalStep
            formData={formData}
            setFormData={setFormData}
            nextStep={nextStep}
            prevStep={prevStep}
          />
        )}

        {step === 3 && (
          <AddressStep
            formData={formData}
            setFormData={setFormData}
            nextStep={nextStep}
            prevStep={prevStep}
          />
        )}

        {step === 4 && (
          <ReviewStep
            formData={formData}
            prevStep={prevStep}
            handleSubmit={handleSubmit}
            loading={loading}
          />
        )}

      </div>

    </div>

  );

}

export default Register;
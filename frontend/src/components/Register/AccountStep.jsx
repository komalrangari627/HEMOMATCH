import "./RegisterForm.css";
function AccountStep({ formData, setFormData, nextStep }) {

  return (

    <div className="step-box">

      <h2>Create Account</h2>

      <select

        value={formData.role}

        onChange={(e) =>

          setFormData({

            ...formData,

            role: e.target.value

          })

        }

      >

        <option value="donor">

          Donor

        </option>

        <option value="hospital">

          Hospital

        </option>

        <option value="bloodbank">

          Blood Bank

        </option>

      </select>

      <input
        placeholder="Full Name"
        value={formData.fullName}
        onChange={(e) =>
          setFormData({ ...formData, fullName: e.target.value })
        }
      />

      <input
        placeholder="Email"
        value={formData.email}
        onChange={(e) =>
          setFormData({ ...formData, email: e.target.value })
        }
      />

      <input
        placeholder="Phone"
        value={formData.phone}
        onChange={(e) =>
          setFormData({ ...formData, phone: e.target.value })
        }
      />

      <input
        type="password"
        placeholder="Password"
        value={formData.password}
        onChange={(e) =>
          setFormData({ ...formData, password: e.target.value })
        }
      />

      <button onClick={nextStep}>
        Continue
      </button>

    </div>

  );

}

export default AccountStep;
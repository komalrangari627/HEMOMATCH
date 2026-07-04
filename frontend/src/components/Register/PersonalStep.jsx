import "./RegisterForm.css";
function PersonalStep({ formData, setFormData, nextStep, prevStep }) {

  return (

    <div className="step-box">

      <h2>Personal Details</h2>

      <select
        value={formData.bloodGroup}
        onChange={(e) =>
          setFormData({ ...formData, bloodGroup: e.target.value })
        }
      >
        <option value="">Blood Group</option>
        <option>A+</option>
        <option>A-</option>
        <option>B+</option>
        <option>B-</option>
        <option>O+</option>
        <option>O-</option>
        <option>AB+</option>
        <option>AB-</option>
      </select>

      <input
        placeholder="Gender"
        value={formData.gender}
        onChange={(e) =>
          setFormData({ ...formData, gender: e.target.value })
        }
      />

      <input
        placeholder="Age"
        value={formData.age}
        onChange={(e) =>
          setFormData({ ...formData, age: e.target.value })
        }
      />

      <input
        placeholder="Weight"
        value={formData.weight}
        onChange={(e) =>
          setFormData({ ...formData, weight: e.target.value })
        }
      />

      <input
        type="date"
        value={formData.lastDonation}
        onChange={(e) =>
          setFormData({ ...formData, lastDonation: e.target.value })
        }
      />

      <div className="btn-row">

        <button onClick={prevStep}>Back</button>

        <button onClick={nextStep}>Next</button>

      </div>

    </div>

  );

}

export default PersonalStep;
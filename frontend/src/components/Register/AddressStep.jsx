import "./RegisterForm.css";
function AddressStep({ formData, setFormData, nextStep, prevStep }) {

  return (

    <div className="step-box">

      <h2>Address Details</h2>

      <input
        placeholder="State"
        value={formData.state}
        onChange={(e) =>
          setFormData({ ...formData, state: e.target.value })
        }
      />

      <input
        placeholder="District"
        value={formData.district}
        onChange={(e) =>
          setFormData({ ...formData, district: e.target.value })
        }
      />

      <input
        placeholder="City"
        value={formData.city}
        onChange={(e) =>
          setFormData({ ...formData, city: e.target.value })
        }
      />

      <input
        placeholder="Pincode"
        value={formData.pincode}
        onChange={(e) =>
          setFormData({ ...formData, pincode: e.target.value })
        }
      />

      <textarea
        placeholder="Full Address"
        value={formData.address}
        onChange={(e) =>
          setFormData({ ...formData, address: e.target.value })
        }
      />

      <div className="btn-row">

        <button onClick={prevStep}>Back</button>

        <button onClick={nextStep}>Next</button>

      </div>

    </div>

  );

}

export default AddressStep;
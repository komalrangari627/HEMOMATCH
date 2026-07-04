import "./RegisterForm.css";
function ReviewStep({ formData, prevStep, handleSubmit, loading }) {

  return (

    <div className="step-box">

      <h2>Review Details</h2>

      <pre className="review-box">

        {JSON.stringify(formData, null, 2)}

      </pre>

      <div className="btn-row">

        <button onClick={prevStep}>Back</button>

        <button onClick={handleSubmit} disabled={loading}>

          {loading ? "Submitting..." : "Submit"}

        </button>

      </div>

    </div>

  );

}

export default ReviewStep;
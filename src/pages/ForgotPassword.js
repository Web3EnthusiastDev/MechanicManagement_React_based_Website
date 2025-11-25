import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const navigate = useNavigate();

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate the email field
    if (!email) {
      setError('Please enter your email address');
      return;
    }

    // Example of successful password reset request (replace with actual logic)
    setSuccessMessage('Password reset instructions have been sent to your email.');
    setError('');

    // Redirect to login page after a brief delay
    setTimeout(() => {
      navigate('/login'); // Redirect to login page
    }, 2000); // Redirects after 2 seconds
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4" style={{ color: 'black', fontSize: '39px' }}>
        Forgot Password
      </h2>
      
      {error && <div className="alert alert-danger">{error}</div>}
      {successMessage && <div className="alert alert-success">{successMessage}</div>}
      
      <form 
        onSubmit={handleSubmit}
        style={{
          marginLeft: 'auto',
          marginRight: 'auto',
          padding: '30px',
          backgroundColor: 'white',
          borderRadius: '10px',
          border: '2px solid #ccc',
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
          maxWidth: '400px',
          transition: 'background-color 0.3s ease',
        }}
      >
        <div className="mb-3">
          <label htmlFor="forgotEmail" className="form-label">Email address</label>
          <input
            type="email"
            className="form-control"
            id="forgotEmail"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            style={{
              border: '2px solid rgba(0, 0, 0, 0.1)',
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
            }}
          />
        </div>

        <button
          type="submit"
          style={{
            backgroundColor: '#1d1b1b',
            color: 'white',
            border: 'none',
            padding: '12px 25px',
            borderRadius: '5px',
            fontSize: '16px',
            width: '100%',
            transition: 'background-color 0.3s ease',
          }}
        >
          Submit
        </button>
      </form>

      <div className="mt-3 text-center">
        <p>Remember your password? <a href="/login">Login here</a></p>
      </div>
    </div>
  );
};

export default ForgotPassword;

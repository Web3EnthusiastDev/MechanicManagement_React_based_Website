import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const navigate = useNavigate();

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate the form fields
    if (!username || !email || !password || !confirmPassword) {
      setError('Please fill in all fields');
      return;
    }

    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    // Example of successful signup (replace with actual backend integration)
    setSuccessMessage('Signup successful! Redirecting to login...');
    setError('');

    // Redirect to login page after a brief delay
    setTimeout(() => {
      navigate('/login');
    }, 2000); // Redirects to login after 2 seconds
  };

  return (
    <div className="container mt-5">
      {/* Centering the heading */}
      <h2 style={{ textAlign: 'center', marginBottom: '30px' , fontSize: '40px'}}>
        Create Your Account
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
          maxWidth: '500px',
          transition: 'background-color 0.3s ease',
          color: 'black',
        }}
      >
        <div className="mb-3">
          <label htmlFor="signupName" className="form-label">Full Name</label>
          <input
            type="text"
            className="form-control"
            id="signupName"
            placeholder="Enter your name"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            style={{
              border: '2px solid rgba(0, 0, 0, 0.1)',
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
            }}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="signupEmail" className="form-label">Email address</label>
          <input
            type="email"
            className="form-control"
            id="signupEmail"
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
        <div className="mb-3">
          <label htmlFor="signupPassword" className="form-label">Password</label>
          <input
            type="password"
            className="form-control"
            id="signupPassword"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            style={{
              border: '2px solid rgba(0, 0, 0, 0.1)',
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
            }}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="signupConfirmPassword" className="form-label">Confirm Password</label>
          <input
            type="password"
            className="form-control"
            id="signupConfirmPassword"
            placeholder="Confirm your password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
            style={{
              border: '2px solid rgba(0, 0, 0, 0.1)',
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
            }}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="signupPhone" className="form-label">Phone Number</label>
          <input
            type="text"
            className="form-control"
            id="signupPhone"
            placeholder="Enter your phone number"
            required
            style={{
              border: '2px solid rgba(0, 0, 0, 0.1)',
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
            }}
          />
        </div>
        <div className="mb-3 form-check">
        <input
              type="checkbox"
              className="form-check-input"
              id="rememberMe"
              style={{
                border: '2px solid rgba(0, 0, 0, 0.1)', 
                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', 
                transition: 'border-color 0.3s ease, box-shadow 0.3s ease, background-color 0.3s ease', 
                padding: '10px', 
                cursor: 'pointer', 
                backgroundColor: ' rgba(48, 46, 46, 0.1)', 
              }}
            />

          <label className="form-check-label" htmlFor="signupTerms"  style={{marginLeft:'10px',paddingTop:'2px'}}>
           I agree to the terms and conditions
          </label>
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
          Sign Up
        </button>
      </form>

      <div className="mt-3 text-center">
        <p>Already have an account? <a href="/login">Login here</a></p>
      </div>
    </div>
  );
};

export default Signup;

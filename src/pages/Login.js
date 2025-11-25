import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email || !password) {
      setError('Please fill in all fields');
      return;
    }

    setSuccessMessage('Login successful! Redirecting...');
    setError('');

    setTimeout(() => {
      navigate('/dashboard');  
    }, 2000);
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4" style={{ color: 'black', fontSize: '30px', textAlign: 'center' }}>
        Login to Your Account
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
          <label htmlFor="loginEmail" className="form-label">Email address</label>
          <input
            type="email"
            className="form-control"
            id="loginEmail"
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
          <label htmlFor="loginPassword" className="form-label">Password</label>
          <input
            type="password"
            className="form-control"
            id="loginPassword"
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
            />{' '}

          <label className="form-check-label" htmlFor="rememberMe"   style={{marginLeft:'10px',paddingTop:'2px'}}>Remember me</label>
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
          Login
        </button>
      </form>

      <div className="mt-3 text-center">
        <p>Don't have an account? <a href="/signup">Sign up here</a></p>
        <p><a href="/forgot-password">Forgot your password?</a></p>
      </div>
    </div>
  );
};

export default Login;

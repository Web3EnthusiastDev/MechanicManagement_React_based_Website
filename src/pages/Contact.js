import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const navigate = useNavigate();

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate the form fields
    if (!name || !email || !message) {
      setError('Please fill in all fields');
      return;
    }

    // Example of successful form submission (replace with actual backend integration)
    setSuccessMessage('Message sent successfully! Redirecting to homepage...');
    setError('');

    // Redirect to homepage after a brief delay
    setTimeout(() => {
      navigate('/');
    }, 2000); // Redirects after 2 seconds
  };

  return (
    <div className="container mt-5">
      <h2 style={{ textAlign: 'center', marginBottom: '30px', fontSize: '40px' }}>
        Contact Us
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
          maxWidth: '800px', 
          transition: 'background-color 0.3s ease',
          color: 'black',
        }}
      >
        <div className="mb-3">
          <label htmlFor="contactName" className="form-label">Full Name</label>
          <input
            type="text"
            className="form-control"
            id="contactName"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            style={{
              border: '2px solid rgba(0, 0, 0, 0.1)',
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
            }}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="contactEmail" className="form-label">Email address</label>
          <input
            type="email"
            className="form-control"
            id="contactEmail"
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
          <label htmlFor="contactMessage" className="form-label">Message</label>
          <textarea
            className="form-control"
            id="contactMessage"
            placeholder="Write your message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
            style={{
              border: '2px solid rgba(0, 0, 0, 0.1)',
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
            }}
            rows="4"
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
          Send Message
        </button>
      </form>

      <div className="mt-3 text-center">
      <p>Want to go back to the <Link to="/">home page</Link>?</p>
      </div>
    </div>
  );
};

export default Contact;

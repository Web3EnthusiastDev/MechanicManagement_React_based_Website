// src/components/Feedback.js
import React, { useState } from 'react';


const Feedback = () => {
  const [feedback, setFeedback] = useState('');
  const [rating, setRating] = useState(5);
  const [allFeedback, setAllFeedback] = useState([]);

  const handleFeedbackChange = (e) => {
    setFeedback(e.target.value);
  };

  const handleRatingChange = (e) => {
    setRating(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (feedback) {
      const newFeedback = { feedback, rating };
      setAllFeedback([...allFeedback, newFeedback]);
      setFeedback('');
      setRating(5); 
    }
  };

  return (
    <div className="container mt-5">
      <h2 style={{ textAlign: 'center', marginBottom: '30px', fontSize: '60px' }}>Leave Your Feedback</h2>
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
          maxWidth: '600px',
          transition: 'background-color 0.3s ease',
        }}
      >
        <div className="form-group">
          <textarea
            value={feedback}
            onChange={handleFeedbackChange}
            placeholder="Enter your feedback here"
            rows="4"
            required
            className="form-control"
            style={{
              border: '2px solid rgba(0, 0, 0, 0.1)',
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
              width: '100%',
              padding: '12px',
            }}
          />
        </div>

        <div className="form-group" style={{ marginTop: '15px' }}>
          <label style={{ fontWeight: 'bold' }}>Rating:</label>
          <select
            value={rating}
            onChange={handleRatingChange}
            style={{
              padding: '10px',
              border: '2px solid rgba(0, 0, 0, 0.1)',
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
              width: '100%',
              marginTop: '10px',
            }}
          >
            <option value={5}>5 - Excellent</option>
            <option value={4}>4 - Good</option>
            <option value={3}>3 - Average</option>
            <option value={2}>2 - Poor</option>
            <option value={1}>1 - Terrible</option>
          </select>
        </div>

        <button
          type="submit"
          className="btn btn-dark"
          style={{
            width: '100%',
            padding: '12px 25px',
            borderRadius: '5px',
            fontSize: '16px',
            marginTop: '20px',
            transition: 'background-color 0.3s ease',
          }}
        >
          Submit Feedback
        </button>
      </form>

      <div className="feedback-list" style={{ marginTop: '40px' }}>
        <h3>Feedback History</h3>
        {allFeedback.length === 0 ? (
          <p>No feedback submitted yet. Be the first to leave one!</p>
        ) : (
          allFeedback.map((item, index) => (
            <div key={index} style={{ marginBottom: '20px', padding: '15px', borderRadius: '5px', border: '2px solid #ccc' }}>
              <p><strong>Rating: {item.rating} Stars</strong></p>
              <p>{item.feedback}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Feedback;

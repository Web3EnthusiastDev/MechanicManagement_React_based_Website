import React, { useState } from 'react';
import './feedbackService.css'; // Link to the CSS for styling

const FeedbackService = () => {
  // State to handle form inputs and feedback submission
  const [feedback, setFeedback] = useState('');
  const [rating, setRating] = useState(5);
  const [allFeedback, setAllFeedback] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedFeedback, setSelectedFeedback] = useState(null);

  // Handle the change in the feedback textarea
  const handleFeedbackChange = (e) => {
    setFeedback(e.target.value);
  };

  // Handle the rating change (1 to 5)
  const handleRatingChange = (e) => {
    setRating(e.target.value);
  };

  // Handle form submission and add feedback to the list
  const handleSubmit = (e) => {
    e.preventDefault();
    if (feedback) {
      const newFeedback = { feedback, rating };
      setAllFeedback([...allFeedback, newFeedback]);
      setFeedback('');
      setRating(5); // Reset the form
    }
  };

  // Function to handle opening the modal with selected feedback
  const handleOpenModal = (feedbackItem) => {
    setSelectedFeedback(feedbackItem);
    setShowModal(true);
  };

  // Function to close the modal
  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedFeedback(null);
  };

  return (
    <div className="feedback-service">
      <h2>Leave Feedback for Vehicle Maintenance Service</h2>

      {/* Feedback Form */}
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <textarea
            className="feedback-input"
            value={feedback}
            onChange={handleFeedbackChange}
            placeholder="Enter your feedback here"
            rows="4"
            required
          />
        </div>

        {/* Rating Section */}
        <div className="form-group rating">
          <label>Rating:</label>
          <select value={rating} onChange={handleRatingChange}>
            <option value={5}>5 - Excellent</option>
            <option value={4}>4 - Good</option>
            <option value={3}>3 - Average</option>
            <option value={2}>2 - Poor</option>
            <option value={1}>1 - Terrible</option>
          </select>
        </div>

        <button type="submit" className="submit-btn">Submit Feedback</button>
      </form>

      {/* Display Submitted Feedback */}
      <div className="feedback-list">
        <h3>Feedback History:</h3>
        {allFeedback.length === 0 ? (
          <p>No feedback submitted yet. Be the first to leave one!</p>
        ) : (
          allFeedback.map((item, index) => (
            <div
              key={index}
              className="feedback-item"
              onClick={() => handleOpenModal(item)} // Open the modal when clicked
            >
              <p><strong>Rating: {item.rating} Stars</strong></p>
              <p>{item.feedback}</p>
            </div>
          ))
        )}
      </div>

      {/* Modal to display selected feedback */}
      {showModal && selectedFeedback && (
        <div className="feedback-modal">
          <div className="modal-content">
            <span className="close-btn" onClick={handleCloseModal}>×</span>
            <h3>Feedback Details</h3>
            <p><strong>Rating: {selectedFeedback.rating} Stars</strong></p>
            <p>{selectedFeedback.feedback}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default FeedbackService;

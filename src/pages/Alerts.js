import React, { useState } from 'react';
import './alerts.css'; 

const Alerts = ({ message, type }) => {
  let alertClass = 'alert-info';
  if (type === 'success') alertClass = 'alert-success';
  else if (type === 'error') alertClass = 'alert-error';
  else if (type === 'warning') alertClass = 'alert-warning';

  return (
    <div className={`alert ${alertClass}`}>
      <p>{message}</p>
    </div>
  );
};

const AlertsDemo = () => {
  const [alert, setAlert] = useState(null);

  const triggerAlert = (type, message) => {
    setAlert({ type, message });
    setTimeout(() => setAlert(null), 5000);
  };

  return (
    <div>
      {alert && <Alerts type={alert.type} message={alert.message} />}
      <button onClick={() => triggerAlert('success', 'Your appointment has been successfully booked.')}>
        Show Booking Success
      </button>
      <button onClick={() => triggerAlert('error', 'Unable to book your appointment. Please try again.')}>
        Show Booking Error
      </button>
      <button onClick={() => triggerAlert('warning', 'Reminder: Your vehicle pickup is scheduled for tomorrow.')}>
        Show Pickup Reminder
      </button>
    </div>
  );
};

export default AlertsDemo;

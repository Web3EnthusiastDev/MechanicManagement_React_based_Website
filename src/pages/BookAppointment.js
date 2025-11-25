import React, { useState } from 'react';
import { FaMapMarkerAlt } from 'react-icons/fa'; // Importing the location icon
import Map from './Map';

const BookAppointment = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [vehicleType, setVehicleType] = useState('');
    const [appointmentDate, setAppointmentDate] = useState('');
    const [appointmentTime, setAppointmentTime] = useState('');
    const [message, setMessage] = useState('');
    const [location, setLocation] = useState(''); // Location state
    const [showMap, setShowMap] = useState(false); // Control map visibility
    const [markerPosition, setMarkerPosition] = useState({ lat: 37.7749, lng: -122.4194 }); // Default location (San Francisco)
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
        // You can add API call logic here to send the form data
    };

    const handleMapClick = (e) => {
        const newLocation = `${e.latlng.lat}, ${e.latlng.lng}`;
        setLocation(newLocation);  // Set location in the state
        setMarkerPosition({ lat: e.latlng.lat, lng: e.latlng.lng });  // Update marker position
        setShowMap(false); // Hide the map after selecting the location
    };

    return (
        <div className="container mt-5">
            <h2 style={{ textAlign: 'center', marginBottom: '30px', fontSize: '40px' }}>
                Book an Appointment
            </h2>

            {submitted ? (
                <div className="alert alert-success text-center">
                    <h2>Thank you for booking your appointment!</h2>
                    <p>We will get back to you soon to confirm your appointment.</p>
                </div>
            ) : (
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
                        <label htmlFor="name" className="form-label">Name</label>
                        <input
                            type="text"
                            id="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                            placeholder="Enter your name"
                            className="form-control"
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="email" className="form-label">Email</label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            placeholder="Enter your email"
                            className="form-control"
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="phone" className="form-label">Phone Number</label>
                        <input
                            type="tel"
                            id="phone"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            required
                            placeholder="Enter your phone number"
                            className="form-control"
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="vehicleType" className="form-label">Vehicle Type</label>
                        <input
                            type="text"
                            id="vehicleType"
                            value={vehicleType}
                            onChange={(e) => setVehicleType(e.target.value)}
                            required
                            placeholder="Enter your vehicle type"
                            className="form-control"
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="appointmentDate" className="form-label">Appointment Date</label>
                        <input
                            type="date"
                            id="appointmentDate"
                            value={appointmentDate}
                            onChange={(e) => setAppointmentDate(e.target.value)}
                            required
                            className="form-control"
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="appointmentTime" className="form-label">Appointment Time</label>
                        <input
                            type="time"
                            id="appointmentTime"
                            value={appointmentTime}
                            onChange={(e) => setAppointmentTime(e.target.value)}
                            required
                            className="form-control"
                        />
                    </div>

                    <div className="form-group" style={{ position: 'relative' }}>
                        <label htmlFor="location" className="form-label">Location</label>
                        <input
                            type="text"
                            id="location"
                            value={location}
                            onChange={(e) => setLocation(e.target.value)}
                            onFocus={() => setShowMap(true)} // Show map on focus
                            placeholder="Enter the location of your vehicle"
                            className="form-control"
                            style={{
                                paddingLeft: '30px',
                                border: '2px solid rgba(0, 0, 0, 0.1)',
                                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                            }}
                        />
                        <FaMapMarkerAlt
                            style={{
                                position: 'absolute',
                                left: '10px',
                                top: '50%',
                                transform: 'translateY(-50%)',
                                fontSize: '20px',
                                color: 'red',
                            }}
                        />
                        {showMap && (
                            <Map
                                markerPosition={markerPosition}
                                onMapClick={handleMapClick}
                                location={location}
                            />
                        )}
                    </div>

                    <div className="form-group">
                        <label htmlFor="message" className="form-label">Additional Message</label>
                        <textarea
                            id="message"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            placeholder="Write any additional details or requests here"
                            className="form-control"
                            rows="4"
                            style={{
                                marginLeft: 'auto',
                                marginRight: 'auto',
                                width: '100%',
                                border: '2px solid rgba(0, 0, 0, 0.1)',
                                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                            }}
                        ></textarea>
                    </div>

                    <button
                        type="submit"
                        className="btn btn-dark"
                        style={{
                            width: '100%',
                            marginTop: '8px',
                            padding: '12px 25px',
                            borderRadius: '5px',
                            fontSize: '16px',
                            transition: 'background-color 0.3s ease',
                        }}
                    >
                        Submit Appointment
                    </button>
                </form>
            )}
        </div>
    );
};

export default BookAppointment;
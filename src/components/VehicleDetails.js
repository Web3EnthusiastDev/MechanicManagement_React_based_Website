import React from 'react';
import '../styles/vehicle-details.css';

const VehicleDetails = ({ vehicle }) => {
    return (
        <div className="vehicle-details">
            {vehicle ? (
                <>
                    <h2>{vehicle.name}</h2>
                    <img src={vehicle.image} alt={vehicle.name} />
                    <p><strong>Type:</strong> {vehicle.type}</p>
                    <p><strong>Model:</strong> {vehicle.model}</p>
                    <p><strong>Year:</strong> {vehicle.year}</p>
                    <p><strong>Description:</strong> {vehicle.description}</p>
                </>
            ) : (
                <p>No vehicle selected. Please select a vehicle to see details.</p>
            )}
        </div>
    );
};

export default VehicleDetails;

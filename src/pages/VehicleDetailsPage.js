import React from 'react';
import VehicleDetails from '../components/VehicleDetails';
import '../styles/vehicle-details-page.css';

const VehicleDetailsPage = () => {
    return (
        <div className="vehicle-details-page">
            <h1>Vehicle Details</h1>
            <VehicleDetails />
        </div>
    );
};

export default VehicleDetailsPage;

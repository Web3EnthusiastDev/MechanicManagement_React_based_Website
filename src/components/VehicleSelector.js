import React, { useState } from 'react'; 
import '../styles/vehicle-selector.css'; 

const VehicleSelector = ({ onVehicleSelect }) => {
    const [selectedVehicle, setSelectedVehicle] = useState('');

    const handleChange = (event) => {
        const vehicleType = event.target.value;
        setSelectedVehicle(vehicleType);
        // Check if onVehicleSelect is a function before calling it
        if (typeof onVehicleSelect === 'function') {
            onVehicleSelect(vehicleType); // Notify parent component of the selected vehicle
        } else {
            console.error('onVehicleSelect is not a function:', onVehicleSelect);
        }
    };

    return (
        <div className="vehicle-selector">
            <h2>Select Your Vehicle Type</h2>
            <select value={selectedVehicle} onChange={handleChange}>
                <option value="">--Choose a vehicle--</option>
                <option value="car">Car</option>
                <option value="bike">Bike</option>
                <option value="truck">Truck</option>
                <option value="bus">Bus</option>
            </select>
        </div>
    );
};

export default VehicleSelector; 

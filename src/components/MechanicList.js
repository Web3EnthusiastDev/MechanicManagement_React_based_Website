import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMechanicsByVehicleType } from '../services/mechanicService'; // Ensure this import is correct
import '../styles/mechanic-list.css'; // Add a CSS file for styling

const MechanicList = () => {
    const { vehicleType } = useParams();
    const [mechanics, setMechanics] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchMechanics = async () => {
            try {
                setLoading(true);
                const data = await getMechanicsByVehicleType(vehicleType);
                setMechanics(data);
            } catch (err) {
                setError('Failed to fetch mechanics. Please try again later.');
            } finally {
                setLoading(false);
            }
        };

        fetchMechanics();
    }, [vehicleType]);

    return (
        <div className="mechanic-list">
            <h2>Mechanics for {vehicleType}</h2>
            {loading && <p>Loading mechanics...</p>}
            {error && <p className="error">{error}</p>}
            {!loading && !error && (
                <ul>
                    {mechanics.length > 0 ? (
                        mechanics.map(mechanic => (
                            <li key={mechanic.id} className="mechanic-item">
                                <h3>{mechanic.name}</h3>
                                <p>Specialization: {mechanic.specialization}</p>
                                <p>Contact: {mechanic.contact}</p>
                            </li>
                        ))
                    ) : (
                        <p>No mechanics available for this vehicle type.</p>
                    )}
                </ul>
            )}
        </div>
    );
};

export default MechanicList;

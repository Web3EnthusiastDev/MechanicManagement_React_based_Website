const API_URL = 'https://your-api-url.com/api';

export const getMechanicsByVehicleType = async (vehicleType) => {
    try {
        const response = await fetch(`${API_URL}/mechanics?vehicleType=${vehicleType}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        });
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('There was a problem with fetching mechanics:', error);
        throw error; 
    }
};

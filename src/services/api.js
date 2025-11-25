const API_URL = 'https://your-api-url.com/api';

export const fetchMechanics = async (vehicleType) => {
    try {
        const response = await fetch(`${API_URL}/mechanics?vehicleType=${vehicleType}`);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('There was a problem with the fetch operation:', error);
    }
};

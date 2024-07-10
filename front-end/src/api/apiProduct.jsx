import axios from 'axios';

const BASE_URL = import.meta.env.REACT_APP_API_BASE_URL;

console.log(BASE_URL);

export const getMotorsData = async (motorData) => {
    try {
        const response = await axios.get(`http://localhost:5000/motors`, motorData);

        console.log(BASE_URL);

        return response.data;
    } catch (error) {
        console.error("Error fetching motors:", error);
        throw error;
    }
};



import axios from 'axios';

const BASE_URL = import.meta.env.VITE_APP_API_BASE_URL;

console.log(import.meta.env);

export const getMotorsData = async (motorData) => {
    console.log("this is motor Date :  " + motorData);
    try {
        const config = { params: motorData };
        const response = await axios.get(`${BASE_URL}/motors`, config);

        console.log(BASE_URL);

        return response.data;
    } catch (error) {
        console.error("Error fetching motors:", error);
        throw error;
    }
};

export const getAccessoriesData = async (accessoriesData) => {
    try {
        const config = { params: accessoriesData };
        const response = await axios.get(`${BASE_URL}/accessories`, config);
        return response.data;
    } catch (error) {
        console.error("Error fetching accessories:", error);
        throw error;
    }
};



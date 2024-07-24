import axios from 'axios';

const BASE_URL = import.meta.env.VITE_APP_API_BASE_URL;

console.log(import.meta.env);


export const getCartData = async (cartData) => {
    console.log("this is motor Date :  " + cartData);
    try {
        const config = { params: cartData };
        const response = await axios.get(`${BASE_URL}/cart`, config);

        console.log(BASE_URL);

        return response.data;
    } catch (error) {
        console.error("Error fetching motors:", error);
        throw error;
    }
};


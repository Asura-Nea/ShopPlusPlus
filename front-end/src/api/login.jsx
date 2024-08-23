import axios from 'axios';

const BASE_URL = import.meta.env.VITE_APP_API_BASE_URL;


// Assuming the token is stored in localStorage after login
const getTokenFromLocalStorage = () => localStorage.getItem('token');
console.log("aaaaaaa" + getTokenFromLocalStorage());

export const getUserData = async () => {
    try {
        // Retrieve the token from local storage
        const token = getTokenFromLocalStorage();

        // Make a GET request to fetch user data, assuming the endpoint requires a token for authorization
        const userDataRes = await axios.get(`${BASE_URL}/auth/getUser`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });

        // Store user data in local storage if needed
        localStorage.setItem('userData', JSON.stringify(userDataRes.data));

        return userDataRes.data; // Return the user data
    } catch (error) {
        console.error("Error fetching user data:", error);
        throw error;
    }
};


export const login = async (email, password, address, phoneNumber) => {

    try {
        const res = await axios.post(`${BASE_URL}/auth/login`, {

            email,
            password,
            address,
            phoneNumber

        });
        localStorage.setItem('token', res.data.token);
        return res.data;
    } catch (error) {
        console.error("Error logging in:", error);
        throw error;
    }
}

export const register = async (name, email, password, address, phoneNumber) => {
    try {
        const res = await axios.post(`${BASE_URL}/auth/signup`, {
            name,
            email,
            password,
            address,
            phoneNumber
        });
        return res.data;
    } catch (error) {
        console.error("Error signing up:", error);
        throw error;
    }
}




// export const getAccessoriesData = async (accessoriesData) => {
//     try {
//         const config = { params: accessoriesData };
//         const response = await axios.get(`${BASE_URL}/product/accessories`, config);
//         return response.data;
//     } catch (error) {
//         console.error("Error fetching accessories:", error);
//         throw error;
//     }
// };

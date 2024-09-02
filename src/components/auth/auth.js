import axios from 'axios';

const API_URL = 'http://localhost:5000/';

export const register = async (username, password) => {

    try {
        // Prepare the request body
        const requestBody = {
            username,
            password
        };

        // Make the POST request
        const response = await axios.post(API_URL + 'register', requestBody);

        // Handle the response
        return {
            success: true,
            username: requestBody.username,
            password: requestBody.password,
            message: response.data.message // Adjust based on response structure
        };
    } catch (error) {
        // Handle error appropriately
        return {
            success: false,
            message: error.response ? error.response.data.message : error.message
        };
    }
};

export const login = async (username, password) => {

    try {
        // Prepare the request body
        const requestBody = {
            username,
            password
        };

        // Make the POST request
        const response = await axios.post(API_URL + 'login', requestBody);

        if (response.data.accessToken) {
            localStorage.setItem('accessToken', JSON.stringify(response.data.accessToken));
            localStorage.setItem('username', JSON.stringify(response.data.username));
        }
        // Handle the response
        return {
            success: true,
            username: requestBody.username,
            password: requestBody.password,
            message: response.data.message // Adjust based on response structure
        };
    } catch (error) {
        // Handle error appropriately
        return {
            success: false,
            message: error.response ? error.response.data.message : error.message
        };
    }

};

export const logout = () => {
    try {
        localStorage.removeItem('username');
        localStorage.removeItem('accessToken');
        return true;
    } catch (err) {
        return false;
    }

};

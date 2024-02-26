import axios from 'axios';

const apiClient = axios.create({
    baseURL: '/api', // Adjust the base URL according to your Laravel setup
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
    },
});

export default apiClient;
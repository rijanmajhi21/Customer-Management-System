import axios from 'axios';

const BASE_URL = 'http://your-api-url';

export default {
    login(credentials) {
        return axios.post(`${BASE_URL}/api/login`, credentials, { withCredentials: true });
    },
};
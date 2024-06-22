import axios from 'axios';

const API = axios.create({
    baseURL: 'http://localhost:8000/api',
    headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer 2|iqlT8pO72cWo5dbrSa5ZWkGYvFSJDPSSMxLPeIAUbb628560'
    },
});

export default API;

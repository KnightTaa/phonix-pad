import axios from 'axios';

const API = axios.create({
    baseURL: 'http://localhost:8000/api',
    headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer 1|H9HxlgYSzMl98AoOfC0JB1JqzB49ybrNaDOWwpnL6290c38f'
    },
});

export default API;

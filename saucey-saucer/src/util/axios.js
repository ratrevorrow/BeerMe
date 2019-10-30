import axios from 'axios';

const BASE_URI = 'http://localhost:5000';

export const client = axios.create( {
    baseURL: BASE_URI,
    json: true,
    headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept, XMLHttpRequest"
    },
    // withCredentials: true
} );

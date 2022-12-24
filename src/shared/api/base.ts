import axios from 'axios';
import { env } from '../config';

const BASE_API_URL = env.VITE_BASE_API_URL;

export const http = axios.create({
    baseURL: BASE_API_URL,
    timeout: 30000,
    // mode: 'cors',
    headers: {
        Accept: 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json; charset=utf-8',
    },
    transformRequest: [
        (data) => {
            return JSON.stringify(data);
        },
    ],
});

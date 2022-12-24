import axios, { AxiosRequestConfig } from 'axios';
import { env } from '../config';
import { toast } from 'react-toastify';

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

// Request interceptor for API UPLOAD calls
http.interceptors.request.use(
    async (config: AxiosRequestConfig) => {
        if (config.headers) {
            config.headers['Authorization'] = 'Bearer ' + env.VITE_API_KEY;
        }
        return config;
    },
    (error) => {
        toast.error(error?.response?.data?.message ? error?.response?.data?.message : 'Неопределенная ошибка', {
            toastId: 'UploadReqError'
        })
        return Promise.reject(error);
    },
);

// Response interceptor for API UPLOAD calls
http.interceptors.response.use(
    (response) => {
        return response;
    },
    (error) => {
        // localStorage.removeItem('token');
        toast.error(error?.response?.data?.message ? error?.response?.data?.message : 'Неопределенная ошибка', {
            toastId: 'UploadError'
        })
        return Promise.reject(error);
    },
);

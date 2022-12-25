import { createAsyncThunk } from '@reduxjs/toolkit';
import { NavigateFunction } from 'react-router-dom';
import { QuotesCreateParamsType, QuotesType } from '@/entities/quotes';
import { http } from '@/shared/api';

const api_type = 'quotes';

export const createQuotesApi = createAsyncThunk(
    'quotes/create',
    async (params: {
        params: QuotesCreateParamsType;
        navigate: NavigateFunction;
    }) => {
        try {
            const response = await http.post(api_type, params.params);
            params.navigate(-1);
            return response.data;
        } catch (e) {}
    }
);

export const getQuotesListApi = createAsyncThunk('quotes/getList', async () => {
    const response = await http.get<QuotesType[]>(api_type);
    return response.data;
});

export const deleteQuotesApi = createAsyncThunk<string | undefined, string, {rejectValue: string}>('quotes/deleteApi', async (id: string, { rejectWithValue }) => {
    try {
       await http.delete(`${api_type}/${id}`);
       return id
    }catch (e) {
        rejectWithValue('error')
    }
});

export const getOneQuoteApi = createAsyncThunk('quotes/getOneApi', async (id: string, {rejectWithValue}) => {
     try {
        const response = await http.get<QuotesType>(`${api_type}/${id}`);
        return response.data
    }catch (e) {
        rejectWithValue('error')
    }
});

export const updateQuotesApi = createAsyncThunk(
    'quotes/updateApi',
    async (params: {
        id: string;
        params: QuotesCreateParamsType;
        navigate: NavigateFunction;
    }) => {
        try {
            const response = await http.put(`${api_type}/${params.id}`, params.params);
            params.navigate(-1);
            return response.data;
        } catch (e) {}
    }
);

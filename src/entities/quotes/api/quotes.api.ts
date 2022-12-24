import { createAsyncThunk } from '@reduxjs/toolkit';
import { QuotesCreateParamsType } from '@/entities/quotes';
import { http } from '@/shared/api';

const api_type = 'quotes';

export const createQuotesApi = createAsyncThunk(
    'quotes/create',
    async (params: QuotesCreateParamsType[]) => {
        const response = await http.post(api_type, params);
        return response.data;
    }
);

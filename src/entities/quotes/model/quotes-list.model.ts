import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {
    deleteQuotesApi,
    getQuotesListApi,
    QuotesType,
} from '@/entities/quotes';

interface QuotesListSlice {
    quotes: QuotesType[];
}

const initialState: QuotesListSlice = {
    quotes: [],
};

export const quotesListSlice = createSlice({
    name: 'activeQuote',
    initialState,
    reducers: {
        refreshQuotesList: (state) => {
            state.quotes = [];
        },
    },
    extraReducers: (builder) => {
        builder.addCase(
            getQuotesListApi.fulfilled,
            (state, action: PayloadAction<QuotesType[]>) => {
                state.quotes = action.payload;
            }
        );
        builder.addCase(
            deleteQuotesApi.fulfilled,
            (state, action: PayloadAction<string | undefined>) => {
                if (action.payload) {
                    state.quotes = state.quotes.filter(
                        (quote) => quote.id !== action.payload
                    );
                }
            }
        );
    },
});

export const { refreshQuotesList } = quotesListSlice.actions;

export default quotesListSlice.reducer;

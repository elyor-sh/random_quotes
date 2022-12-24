import { createSlice } from '@reduxjs/toolkit';
import { QuotesType } from '@/entities/quotes';

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
});

export const { refreshQuotesList } = quotesListSlice.actions;

export default quotesListSlice.reducer;

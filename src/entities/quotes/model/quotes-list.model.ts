import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {
    deleteQuotesApi,
    getQuotesListApi,
    QuotesType,
} from '@/entities/quotes';

interface QuotesListSlice {
    quotes: QuotesType[];
    cachedQuotes: QuotesType[];
}

const initialState: QuotesListSlice = {
    quotes: [],
    cachedQuotes: [],
};

export const quotesListSlice = createSlice({
    name: 'activeQuote',
    initialState,
    reducers: {
        refreshQuotesList: (state) => {
            state.quotes = [];
            state.cachedQuotes = [];
        },
        setFilteredQuotesList: (state, action: PayloadAction<QuotesType[]>) => {
            state.quotes = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(
            getQuotesListApi.fulfilled,
            (state, action: PayloadAction<QuotesType[]>) => {
                state.quotes = action.payload;
                state.cachedQuotes = action.payload;
            }
        );
        builder.addCase(
            deleteQuotesApi.fulfilled,
            (state, action: PayloadAction<string | undefined>) => {
                if (action.payload) {
                    state.quotes = state.quotes.filter(
                        (quote) => quote.id !== action.payload
                    );
                    state.cachedQuotes = state.cachedQuotes.filter(
                        (quote) => quote.id !== action.payload
                    );
                }
            }
        );
    },
});

export const { refreshQuotesList, setFilteredQuotesList } =
    quotesListSlice.actions;

export default quotesListSlice.reducer;

import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { createQuotesApi, QuotesType } from '@/entities/quotes';

interface QuoteActiveState {
    quote: QuotesType;
}

const initialQuoteFields: QuotesType = {
    _uuid: '',
    author: '',
    text: '',
    genre: [],
    _created: '',
    _modified: '',
};

const initialState: QuoteActiveState = {
    quote: { ...initialQuoteFields },
};

export const activeQuoteSlice = createSlice({
    name: 'activeQuote',
    initialState,
    reducers: {
        editActiveQuote: (state, action: PayloadAction<QuotesType>) => {
            state.quote = action.payload;
        },
        refreshActiveQuote: (state) => {
            state.quote = { ...initialQuoteFields };
        },
    },
    extraReducers: (builder) => {
        builder.addCase(createQuotesApi.fulfilled, (state) => {
            state.quote = { ...initialQuoteFields };
        });
    },
});

export const { editActiveQuote, refreshActiveQuote } = activeQuoteSlice.actions;

export default activeQuoteSlice.reducer;

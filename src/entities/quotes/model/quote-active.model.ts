import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import {
    createQuotesApi,
    getOneQuoteApi,
    QuotesType,
    updateQuotesApi,
} from '@/entities/quotes';

interface QuoteActiveState {
    quote: QuotesType;
    openModal: boolean;
}

const initialQuoteFields: QuotesType = {
    id: '',
    author: '',
    text: '',
    genre: [],
    createdAt: '',
    updatedAt: '',
};

const initialState: QuoteActiveState = {
    quote: { ...initialQuoteFields },
    openModal: false,
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
            state.openModal = false;
        },
        setOpenModalActiveQuote: (state, action: PayloadAction<boolean>) => {
            state.openModal = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(createQuotesApi.fulfilled, (state) => {
            state.quote = { ...initialQuoteFields };
        });
        builder.addCase(updateQuotesApi.fulfilled, (state) => {
            state.quote = { ...initialQuoteFields };
        });
        builder.addCase(
            getOneQuoteApi.fulfilled,
            (state, action: PayloadAction<QuotesType | undefined>) => {
                if (action.payload) {
                    state.quote = action.payload;
                }
            }
        );
    },
});

export const { editActiveQuote, refreshActiveQuote, setOpenModalActiveQuote } =
    activeQuoteSlice.actions;

export default activeQuoteSlice.reducer;

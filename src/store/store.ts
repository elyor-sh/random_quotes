import { configureStore } from '@reduxjs/toolkit';
import { activeQuoteReducer, quotesListReducer } from '@/entities/quotes';

export const store = configureStore({
    reducer: {
        activeQuote: activeQuoteReducer,
        quotesList: quotesListReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

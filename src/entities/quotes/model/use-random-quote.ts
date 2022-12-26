import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '@/store';
import { editActiveQuote } from '@/entities/quotes';

export const useRandomQuote = () => {
    const dispatch = useAppDispatch();

    const { quotes } = useAppSelector((state) => state.quotesList);
    const { quote } = useAppSelector((state) => state.activeQuote);

    const [selectedQuotes, setSelectedQuotes] = useState<string[]>([]);

    const getRandomNumber = () => Math.floor(Math.random() * quotes.length);

    const generateRandomQuote = () => {
        const random = getRandomNumber();

        if (!quotes.length) {
            return;
        }

        let selectedQuotesCached = [...selectedQuotes];

        if (selectedQuotesCached.length === quotes.length) {
            setSelectedQuotes([]);
            selectedQuotesCached = [];
        }

        if (
            quotes[random].id === quote.id ||
            selectedQuotesCached.includes(quotes[random].id)
        ) {
            generateRandomQuote();
            return;
        }

        setSelectedQuotes((prev) => [...prev, quotes[random].id]);

        dispatch(editActiveQuote(quotes[random]));
    };

    useEffect(() => {
        generateRandomQuote();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [quotes]);

    return {
        generateRandomQuote,
    };
};

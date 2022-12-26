import React, { useEffect } from 'react';
import { useAppDispatch } from '@/store';
import {
    getQuotesListApi,
    RandomQuote,
    refreshQuotesList,
    useRandomQuote,
} from '@/entities/quotes';
import { Button } from '@/shared/ui';

const RandomQuotePage = () => {
    const dispatch = useAppDispatch();
    const { generateRandomQuote } = useRandomQuote();

    useEffect(() => {
        dispatch(getQuotesListApi());
        return () => {
            dispatch(refreshQuotesList());
        };
    }, [dispatch]);

    return (
        <div className="container m-auto py-2">
            <div className="flex justify-end py-5">
                <Button onClick={generateRandomQuote}>
                    Генерировать рандомную цитату
                </Button>
            </div>
            <p className="text-lg">Рандомная цитата:</p>
            <RandomQuote />
        </div>
    );
};

export { RandomQuotePage };

import React from 'react';
import { useAppSelector } from '@/store';
import { QuotesActions } from '@/entities/quotes';

const QuotesList = () => {
    const { quotes } = useAppSelector((state) => state.quotesList);

    return (
        <>
            {quotes.map((quote) => (
                <div
                    key={quote.id}
                    className="flex justify-between p-6 mb-4 rounded-lg shadow-lg bg-white w-full max-h-72 overflow-hidden overflow-ellipsis"
                >
                    <p className="text-sm text-gray-900">{quote.text}</p>
                    <QuotesActions quote={quote} />
                </div>
            ))}
        </>
    );
};

export { QuotesList };

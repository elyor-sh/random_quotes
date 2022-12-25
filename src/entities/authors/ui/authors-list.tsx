import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppSelector } from '@/store';

const AuthorsList = () => {
    const navigate = useNavigate();

    const { quotes } = useAppSelector((state) => state.quotesList);

    return (
        <div>
            {quotes.map((quote) => (
                <div
                    onClick={() => navigate(`/authors/${quote.author}/genres`)}
                    key={quote.id}
                    className="flex justify-between p-6 mb-4 rounded-lg shadow-lg bg-white w-full max-h-72 overflow-hidden overflow-ellipsis cursor-pointer"
                >
                    <p className="text-sm text-gray-900">{quote.author}</p>
                </div>
            ))}
        </div>
    );
};

export { AuthorsList };

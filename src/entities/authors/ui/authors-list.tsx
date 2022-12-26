import React, { useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppSelector } from '@/store';

const AuthorsList = () => {
    const navigate = useNavigate();

    const { quotes } = useAppSelector((state) => state.quotesList);

    const authors = useMemo(() => {
        return [...new Set(quotes.map(quote => quote.author))]
    }, [quotes])

    return (
        <div>
            {authors.map((author) => (
                <div
                    onClick={() => navigate(`/authors/${author}/genres`)}
                    key={author}
                    className="flex justify-between p-6 mb-4 rounded-lg shadow-lg bg-white w-full max-h-72 overflow-hidden overflow-ellipsis cursor-pointer"
                >
                    <p className="text-sm text-gray-900">{author}</p>
                </div>
            ))}
        </div>
    );
};

export { AuthorsList };

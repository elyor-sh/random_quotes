import React from 'react';
import { useAppSelector } from '@/store';

export interface AuthorsGenreListProps {
    author: string;
}

const AuthorsGenreList = ({ author }: AuthorsGenreListProps) => {
    const { quotes } = useAppSelector((state) => state.quotesList);

    return (
        <div>
            {quotes.map((quote) => {
                if (author !== quote.author) {
                    return null;
                }

                return quote.genre.map((genre) => (
                    <div
                        key={genre}
                        className="flex justify-between p-6 mb-4 rounded-lg shadow-lg bg-white w-full max-h-72 overflow-hidden overflow-ellipsis"
                    >
                        <p className="text-sm text-gray-900">{genre}</p>
                    </div>
                ));
            })}
        </div>
    );
};

export { AuthorsGenreList };

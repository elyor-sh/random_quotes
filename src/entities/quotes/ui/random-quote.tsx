import React from 'react';
import { useAppSelector } from '@/store';

const RandomQuote = () => {
    const { quote } = useAppSelector((state) => state.activeQuote);

    return (
        <div className="pt-2">
            <p className="mb-2 text-gray-400">
                Автор: <span className="text-gray-900">{quote.author}</span>
            </p>
            <p className="mb-2 text-gray-400">
                Текст цитаты:{' '}
                <span className="text-gray-900">{quote.text}</span>
            </p>
            <div className="flex flex-wrap">
                <p className="text-gray-400">Жанры цитаты:</p>
                {!quote.genre.length
                    ? '-'
                    : quote.genre.map((genre) => (
                          <p
                              key={genre}
                              className="ml-2 px-2 bg-gray-200 text-gray-900"
                          >
                              {genre}
                          </p>
                      ))}
            </div>
        </div>
    );
};

export { RandomQuote };

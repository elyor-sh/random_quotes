import React from 'react';
import { Input, Select } from '@/shared/ui';
import { useQuoteFilters } from '@/features/quote-filters';
import { useAppSelector } from '@/store';

const QuoteFilters = () => {
    const { cachedQuotes } = useAppSelector((state) => state.quotesList);

    const { filters, handleChangeFilterField } = useQuoteFilters();

    return (
        <div className="pb-4 flex flex-wrap">
            <div className="w-1/5 pr-1.5 pb-3">
                <Input
                    placeholder="Автор"
                    name="author"
                    value={filters.author}
                    onChange={handleChangeFilterField}
                />
            </div>
            <div className="w-1/5 pr-1.5 pb-3">
                <Input
                    placeholder="Текст"
                    name="text"
                    value={filters.text}
                    onChange={handleChangeFilterField}
                />
            </div>
            <div className="w-1/5 pr-1.5 pb-3">
                <Select
                    name="genre"
                    value={filters.genre}
                    onChange={handleChangeFilterField}
                >
                    <option value=''>Не выбран жанр</option>
                    {cachedQuotes.map((quote) => {
                        return quote.genre.map((genre) => (
                            <option key={genre} value={genre}>
                                {genre}
                            </option>
                        ));
                    })}
                </Select>
            </div>
            <div className="w-1/5 pr-1.5 pb-3">
                <Input
                    name='createdAt'
                    type='datetime-local'
                    placeholder='Выберите дату создания'
                    value={filters.createdAt}
                    onChange={handleChangeFilterField}
                />
            </div>
            <div className="w-1/5 pr-1.5 pb-3">
                <Input
                    name='updatedAt'
                    type='datetime-local'
                    placeholder='Выберите дату обновления'
                    value={filters.updatedAt}
                    onChange={handleChangeFilterField}
                />
            </div>
        </div>
    );
};

export { QuoteFilters };

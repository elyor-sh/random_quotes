import React, { useEffect, useMemo, useState } from 'react';
import dayjs from 'dayjs';
import { useDebounce } from '@/shared/lib';
import { useAppDispatch, useAppSelector } from '@/store';
import { setFilteredQuotesList } from '@/entities/quotes';

export type QuoteFiltersStateType = {
    author: string;
    genre: string;
    text: string;
    createdAt: string;
    updatedAt: string;
};

export const useQuoteFilters = () => {
    const dispatch = useAppDispatch();

    const { cachedQuotes } = useAppSelector((state) => state.quotesList);

    const [filters, setFilters] = useState<QuoteFiltersStateType>({
        author: '',
        genre: '',
        text: '',
        createdAt: '',
        updatedAt: '',
    });

    const authorDeb = useDebounce(filters.author);
    const genreDeb = useDebounce(filters.genre);
    const textDeb = useDebounce(filters.text);
    const createdAtDeb = useDebounce(filters.createdAt);
    const updatedAtDeb = useDebounce(filters.updatedAt);

    const handleChangeFilterField = (
        e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
    ) => {
        const name = e.target.name as keyof QuoteFiltersStateType;
        const value = e.target.value;

        setFilters((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const checkDate = (date1: string, date2: string) => {
        if (!date1 || !date2) {
            return true;
        }

        return dayjs(date1).isBefore(date2);
    };

    const filteredQuotes = useMemo(() => {
        return cachedQuotes.filter((quote) => {
            const isConditional =
                quote.author.toLowerCase().includes(authorDeb.toLowerCase()) &&
                quote.text.toLowerCase().includes(textDeb.toLowerCase()) &&
                checkDate(createdAtDeb, quote.createdAt) &&
                checkDate(updatedAtDeb, quote.updatedAt) &&
                (genreDeb
                    ? !!quote.genre.find((genre) =>
                          genre.toLowerCase().includes(genreDeb)
                      )
                    : true);

            if (isConditional) {
                return quote;
            }

            return false;
        });
    }, [
        authorDeb,
        textDeb,
        genreDeb,
        createdAtDeb,
        updatedAtDeb,
        cachedQuotes,
    ]);

    useEffect(() => {
        dispatch(setFilteredQuotesList(filteredQuotes));
    }, [filteredQuotes, dispatch]);

    return {
        filters,
        handleChangeFilterField,
    };
};

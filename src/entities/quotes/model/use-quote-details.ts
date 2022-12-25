import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '@/store';
import {
    createQuotesApi,
    editActiveQuote,
    QuotesCreateParamsType,
    QuotesType,
    refreshActiveQuote,
    updateQuotesApi,
} from '@/entities/quotes';
import { toast } from 'react-toastify';

export const useQuoteDetails = () => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const { quote } = useAppSelector((state) => state.activeQuote);

    const [genreState, setGenreState] = useState('');

    const handleChange = (
        e: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const name = e.currentTarget.name as keyof QuotesType;
        const value = e.currentTarget.value as string;

        const params = {
            ...quote,
            [name]: value,
            genre: [...quote.genre],
        };

        dispatch(editActiveQuote(params));
    };

    const handleSetGenre = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        e.stopPropagation();

        if (
            quote.genre.find(
                (genre) => genre.toLowerCase() === genreState.toLowerCase()
            )
        ) {
            toast.info(`Такой жанр уже существует в списке жанров!`, {
                toastId: 'genre duplicate',
            });
            return;
        }

        const params = {
            ...quote,
            genre: [...quote.genre, genreState],
        };

        setGenreState('');

        dispatch(editActiveQuote(params));
    };

    const handleRemoveFromGenre = (
        e: React.MouseEvent<HTMLButtonElement>,
        genre: string
    ) => {
        e.preventDefault();
        e.stopPropagation();

        const params = {
            ...quote,
            genre: quote.genre.filter(
                (g) => g.toLowerCase() !== genre.toLowerCase()
            ),
        };

        dispatch(editActiveQuote(params));
    };

    const handleBack = () => {
        dispatch(refreshActiveQuote());
        navigate(-1);
    };

    const handleSubmit = (
        e: React.FormEvent<HTMLFormElement>,
        isCreate: boolean
    ) => {
        e.preventDefault();

        try {

            const now = new Date().toISOString();

            const params: QuotesCreateParamsType = {
                text: quote.text,
                genre: quote.genre,
                author: quote.author,
                createdAt: isCreate ? now : quote.createdAt,
                updatedAt: now
            };

            if (isCreate) {
                dispatch(createQuotesApi({ params, navigate }));
            } else {
                dispatch(updateQuotesApi({ id: quote.id, params, navigate }));
            }

            //      navigate(-1)
        } catch (e) {}
    };

    return {
        handleChange,
        genreState,
        setGenreState,
        handleBack,
        handleSetGenre,
        handleRemoveFromGenre,
        handleSubmit,
    };
};

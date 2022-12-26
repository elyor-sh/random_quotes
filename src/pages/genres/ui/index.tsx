import React, { useEffect } from 'react';
import { useDetailPage } from '@/shared/lib';
import { AuthorsGenreList } from '@/entities/genres';
import { useAppDispatch } from '@/store';
import { getQuotesListApi, refreshQuotesList } from '@/entities/quotes';

const GenresPage = () => {
    const { slug: author } = useDetailPage('slug');

    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(getQuotesListApi());
        return () => {
            dispatch(refreshQuotesList());
        };
    }, [dispatch]);

    return (
        <div className="container m-auto py-2">
            <p className="text-lg">
                Список жанров автора {`"${author}"` || ''}:
            </p>
            <AuthorsGenreList author={author || ''} />
        </div>
    );
};

export { GenresPage };

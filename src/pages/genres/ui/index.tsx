import React, { useEffect } from 'react';
import { useDetailPage } from '@/shared/lib';
import { AuthorsGenreList } from '@/entities/genres';
import { useAppDispatch } from '@/store';
import { getQuotesListApi } from '@/entities/quotes';

const GenresPage = () => {
    const { slug: author } = useDetailPage('slug');

    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(getQuotesListApi());
    }, [dispatch]);

    return (
        <div className="container m-auto py-2">
            <AuthorsGenreList author={author || ''} />
        </div>
    );
};

export { GenresPage };

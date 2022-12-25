import React, { useEffect } from 'react';
import { useAppDispatch } from '@/store';
import { getQuotesListApi } from '@/entities/quotes';
import { AuthorsList } from '@/entities/authors';

const AuthorsPage = () => {
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(getQuotesListApi());
    }, [dispatch]);

    return (
        <div className="container m-auto py-2">
            <p className="text-lg">Список авторов:</p>
            <AuthorsList />
        </div>
    );
};

export { AuthorsPage };

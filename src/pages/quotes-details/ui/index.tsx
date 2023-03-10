import React, { useEffect } from 'react';
import { useDetailPage } from '@/shared/lib';
import {
    getOneQuoteApi,
    QuotesDetails,
    refreshActiveQuote,
} from '@/entities/quotes';
import { useAppDispatch } from '@/store';

const QuotesDetailsPage = () => {
    const { isCreatePage, slug: id } = useDetailPage('slug');

    const dispatch = useAppDispatch();

    useEffect(() => {
        if (!isCreatePage && id) {
            dispatch(getOneQuoteApi(id));
        }

        return () => {
            dispatch(refreshActiveQuote());
        };
    }, [id, isCreatePage, dispatch]);

    return (
        <div className="container m-auto">
            <QuotesDetails isCreate={isCreatePage} />
        </div>
    );
};

export { QuotesDetailsPage };

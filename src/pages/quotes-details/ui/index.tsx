import React, { useEffect } from 'react';
import { useDetailPage } from '@/shared/lib';
import { getOneQuoteApi, QuotesDetails } from '@/entities/quotes';
import { useAppDispatch } from '@/store';

const QuotesDetailsPage = () => {
    const { isCreatePage, slug: id } = useDetailPage('slug');

    const dispatch = useAppDispatch()

    useEffect(() => {
        if(!isCreatePage && id){
            dispatch(getOneQuoteApi(id))
        }
    }, [id, isCreatePage])

    return (
        <div className="container m-auto">
            <QuotesDetails isCreate={isCreatePage}/>
        </div>
    );
};

export { QuotesDetailsPage };

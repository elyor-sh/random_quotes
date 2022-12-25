import React, { useEffect, Suspense, lazy } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/shared/ui';
import { useAppDispatch } from '@/store';
import { getQuotesListApi, QuotesList } from '@/entities/quotes';
import { QuoteFilters } from '@/features/quote-filters';

const QuotesViewLazy = lazy(() =>
    import('../../../entities/quotes').then((res) => ({
        default: res.QuotesView,
    }))
);

const QuotesPage = () => {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(getQuotesListApi());
    }, [dispatch]);

    return (
        <div className="container m-auto py-2">
            <QuoteFilters />
            <div className="flex justify-end">
                <Button onClick={() => navigate('/quotes/details/create')}>
                    Создать цитату
                </Button>
            </div>
            <div className="mt-2">
                <QuotesList />
            </div>
            <Suspense fallback={<></>}>
                <QuotesViewLazy />
            </Suspense>
        </div>
    );
};

export { QuotesPage };

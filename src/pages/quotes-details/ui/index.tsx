import React from 'react';
import { useDetailPage } from '@/shared/lib';
import { QuotesDetails } from '@/entities/quotes';

const QuotesDetailsPage = () => {
    const { isCreatePage } = useDetailPage('slug');

    return (
        <div className="container m-auto">
            Quotes Details Page {isCreatePage && 'create page'}
            <QuotesDetails />
        </div>
    );
};

export { QuotesDetailsPage };

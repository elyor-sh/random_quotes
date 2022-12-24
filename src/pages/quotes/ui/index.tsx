import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/shared/ui';

const QuotesPage = () => {
    const navigate = useNavigate();

    return (
        <div className="container m-auto py-2">
            <div className="flex justify-end">
                <Button onClick={() => navigate('/quotes/details/create')}>
                    Создать цитату
                </Button>
            </div>
            Quotes
        </div>
    );
};

export { QuotesPage };

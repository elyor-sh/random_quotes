import React from 'react';
import { DeleteButton, EditButton, ViewButton } from '@/shared/ui';
import { QuotesType, useQuoteActions } from '@/entities/quotes';

export type QuotesActionsProps = {
    quote: QuotesType;
};

const QuotesActions = ({ quote }: QuotesActionsProps) => {
    const { handleView, handleDelete, handleEdit } = useQuoteActions();

    return (
        <div className="flex justify-end w-1/12">
            <ViewButton
                className="mr-1 hover:bg-gray-200 rounded-full"
                onClick={() => handleView(quote)}
            />
            <DeleteButton
                className="mr-1 hover:bg-gray-200 rounded-full"
                onClick={() => handleDelete(quote.id)}
            />
            <EditButton
                className="mr-1 hover:bg-gray-200 rounded-full"
                onClick={() => handleEdit(quote.id)}
            />
        </div>
    );
};

export { QuotesActions };

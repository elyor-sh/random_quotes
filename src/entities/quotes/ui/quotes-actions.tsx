import React from 'react';
import {
    Button,
    DeleteButton,
    EditButton,
    Modal,
    ViewButton,
} from '@/shared/ui';
import { QuotesType, useQuoteActions } from '@/entities/quotes';

export type QuotesActionsProps = {
    quote: QuotesType;
};

const QuotesActions = ({ quote }: QuotesActionsProps) => {
    const {
        handleView,
        handleDelete,
        handleEdit,
        openConfirm,
        setOpenConfirm,
    } = useQuoteActions();

    return (
        <div className="flex justify-end w-1/12">
            <ViewButton
                className="mr-1 hover:bg-gray-200 rounded-full"
                onClick={() => handleView(quote)}
            />
            <DeleteButton
                className="mr-1 hover:bg-gray-200 rounded-full"
                onClick={() => setOpenConfirm(true)}
            />
            <EditButton
                className="mr-1 hover:bg-gray-200 rounded-full"
                onClick={() => handleEdit(quote.id)}
            />

            <Modal
                open={openConfirm}
                onClose={() => setOpenConfirm(false)}
                title="Подтвердите удаление цитаты"
            >
                <div className="flex justify-end">
                    <Button
                        variant="dark"
                        onClick={() => setOpenConfirm(false)}
                    >
                        Отменить
                    </Button>
                    <Button
                        variant="success"
                        onClick={() => handleDelete(quote.id)}
                        className="ml-3"
                    >
                        Подтвердить
                    </Button>
                </div>
            </Modal>
        </div>
    );
};

export { QuotesActions };

import React from 'react';
import { Modal } from '@/shared/ui';
import { useAppDispatch, useAppSelector } from '@/store';
import { setOpenModalActiveQuote } from '@/entities/quotes';

const QuotesView = () => {

    const {openModal, quote} = useAppSelector(state => state.activeQuote)
    const dispatch = useAppDispatch()

    return (
        <div>
            <Modal
                title='Показ цитаты'
                open={openModal}
                onClose={() => dispatch(setOpenModalActiveQuote(false))}
            >
                {quote.text}
            </Modal>
        </div>
    );
};

export {QuotesView}
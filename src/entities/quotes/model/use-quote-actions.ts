import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '@/store';
import {
    deleteQuotesApi,
    editActiveQuote,
    QuotesType,
    setOpenModalActiveQuote,
} from '@/entities/quotes';

export const useQuoteActions = () => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const handleView = (quote: QuotesType) => {
        dispatch(editActiveQuote(quote));
        dispatch(setOpenModalActiveQuote(true));
    };

    const handleEdit = (id: string) => {
        navigate(`/quotes/details/${id}`);
    };

    const handleDelete = (id: string) => {
        dispatch(deleteQuotesApi(id));
    };

    return {
        handleView,
        handleDelete,
        handleEdit,
    };
};

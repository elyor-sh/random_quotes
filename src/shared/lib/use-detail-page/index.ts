import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

export const useDetailPage = (slug: string) => {
    const [isCreate, setIsCreate] = useState(false);
    const [isEdit, setIsEdit] = useState(false);

    const params = useParams();
    const id = params[slug];

    useEffect(() => {
        if (!id) {
            setIsCreate(false);
            setIsEdit(false);
            return;
        }

        if (id === 'create') {
            setIsCreate(true);
            setIsEdit(false);
            return;
        }

        setIsCreate(false);
        setIsEdit(true);
    }, [id]);

    return {
        isCreatePage: isCreate,
        isEditPage: isEdit,
        slug: id,
    };
};

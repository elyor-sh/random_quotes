import { useState } from 'react';

export const useWroteCheck = () => {
    const [isWrote, setWrote] = useState(false);

    const handleChangeWrote = () => {
        setWrote(true);
    };

    return {
        isWrote,
        handleChangeWrote,
    };
};

import React, { InputHTMLAttributes } from 'react';
import './style.css';
import { useWroteCheck } from '@/shared/lib';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    errorText?: string;
    error?: boolean;
}

const Input = ({ errorText = '', error = false, ...rest }: InputProps) => {
    const { isWrote, handleChangeWrote } = useWroteCheck();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (rest.onChange) {
            rest?.onChange(e);
        }

        handleChangeWrote();
    };

    return (
        <label className="w-full">
            <input
                {...rest}
                onChange={handleChange}
                className={`${rest.className || ''} base-input ${
                    isWrote && error ? 'error' : ''
                }`}
            />
            <span className="text-red-400 text-xs py-1">
                {isWrote ? error && errorText : ''}
            </span>
        </label>
    );
};

export { Input };

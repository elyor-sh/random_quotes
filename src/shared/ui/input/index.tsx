import React, { AllHTMLAttributes, InputHTMLAttributes } from 'react';
import './style.css';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    errorText?: string;
    error?: boolean;
}

const Input = ({ errorText = '', error = false, ...rest }: InputProps) => {
    return (
        <label className="w-full">
            <input
                {...rest}
                className={`${rest.className || ''} base-input ${
                    error ? 'error' : ''
                }`}
            />
            <span className="text-red-400 text-xs py-1">
                {error && errorText}
            </span>
        </label>
    );
};

export { Input };

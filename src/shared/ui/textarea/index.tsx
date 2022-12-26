import React, { AllHTMLAttributes } from 'react';
import './style.css';
import { useWroteCheck } from '@/shared/lib';

export interface TextareaProps extends AllHTMLAttributes<HTMLTextAreaElement> {
    error?: boolean;
    errorText?: string;
}

const Textarea = ({ error, errorText, ...rest }: TextareaProps) => {
    const { isWrote, handleChangeWrote } = useWroteCheck();

    const handleChange = (e: React.FormEvent<HTMLTextAreaElement>) => {
        if (rest.onChange) {
            rest?.onChange(e);
        }

        handleChangeWrote();
    };

    return (
        <div className="w-full">
            <textarea
                {...rest}
                onChange={handleChange}
                className={`${rest.className || ''} base-textarea ${
                    isWrote && error ? 'error' : ''
                }`}
            />
            <span className="text-red-400 text-xs py-1">
                {isWrote ? error && errorText : ''}
            </span>
        </div>
    );
};

export { Textarea };

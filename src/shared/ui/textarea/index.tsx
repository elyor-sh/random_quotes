import React, { AllHTMLAttributes } from 'react';
import './style.css';

export interface TextareaProps extends AllHTMLAttributes<HTMLTextAreaElement> {
    error?: boolean;
    errorText?: string;
}

const Textarea = ({ error, errorText, ...rest }: TextareaProps) => {
    return (
        <div className="w-full">
            <textarea
                {...rest}
                className={`${rest.className || ''} base-textarea ${
                    error ? 'error' : ''
                }`}
            />
            <span className="text-red-400 text-xs py-1">
                {error && errorText}
            </span>
        </div>
    );
};

export { Textarea };

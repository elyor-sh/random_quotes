import React, { ButtonHTMLAttributes } from 'react';
import './style.css';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'success' | 'dark' | 'danger' | 'circle';
    children?: React.ReactNode;
}

const Button = ({ variant = 'primary', children, ...rest }: ButtonProps) => {
    return (
        <button
            {...rest}
            className={`base-button ${variant} ${rest.className || ''} ${
                rest.disabled ? 'disabled' : ''
            }`}
        >
            {children}
        </button>
    );
};

export { Button };

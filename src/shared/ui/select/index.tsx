import React, { SelectHTMLAttributes } from 'react';
import './style.css';

export interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
    children?: React.ReactNode;
}

const Select = ({ children, ...rest }: SelectProps) => {
    return (
        <select
            {...rest}
            className="base-select"
        >
            {children}
        </select>
    );
};

export {Select};

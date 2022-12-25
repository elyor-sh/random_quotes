import React from 'react';

export type ModalProps = {
    children?: React.ReactNode;
    actions?: React.ReactNode;
    title?: React.ReactNode;
    open: boolean;
    onClose: () => void;
};

const Modal = ({ open, onClose, title, actions, children }: ModalProps) => {
    if (!open) {
        return null;
    }

    return (
        <div
            className="absolute inset-0 flex items-center justify-center bg-gray-700 bg-opacity-50"
            onClick={onClose}
        >
            <div
                className="w-1/3 p-6 bg-white divide-y divide-gray-500"
                onClick={(e) => e.stopPropagation()}
            >
                <div className="flex items-center justify-between">
                    <h3 className="text-xl text-gray-600">{title}</h3>
                    <svg
                        onClick={onClose}
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-6 h-6 cursor-pointer"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                    </svg>
                </div>
                <div className="mt-4 py-4">
                    {children}
                    {actions}
                </div>
            </div>
        </div>
    );
};

export { Modal };

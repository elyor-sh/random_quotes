import React from 'react';

const Footer = () => {
    return (
        <div className="text-center p-6 bg-gray-200">
            <span>© {new Date().getFullYear()} Copyright:</span>
            <a
                className="text-blue-600 font-semibold px-1"
                href="https://github.com/elyor-sh"
                target="_blank"
            >
                Elyor Shodiyorov
            </a>
        </div>
    );
};

export { Footer };

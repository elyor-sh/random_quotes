import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <nav className="navbar navbar-expand-lg shadow-md py-5 px-4 bg-sky-800 relative flex items-center w-full justify-between">
            <Link className="text-3xl text-white" to="/quotes">
                Цитаты
            </Link>
        </nav>
    );
};

export { Header };

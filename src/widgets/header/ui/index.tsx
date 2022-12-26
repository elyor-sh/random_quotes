import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <nav className="navbar navbar-expand-lg shadow-md py-5 px-4 bg-sky-800 relative flex items-end w-full">
            <Link className="text-lg text-white" to="/quotes">
                Цитаты
            </Link>
            <Link className="text-lg text-white pl-5" to="/authors">
                Список авторов
            </Link>
            <Link className="text-lg text-white pl-5" to="/quotes/random">
                Рандомная цитата
            </Link>
        </nav>
    );
};

export { Header };

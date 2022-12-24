import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import './global.css';
import { store } from '@/store';
import { Routing } from '@/pages';

const App = () => {
    return (
        <BrowserRouter>
            <Provider store={store}>
                <Routing />
            </Provider>
        </BrowserRouter>
    );
};

export { App };

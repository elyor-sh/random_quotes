import React from 'react';
import { Provider } from 'react-redux';
import './global.css';
import { store } from '@/store';

const App = () => {
    return (
        <Provider store={store}>
            <div></div>
        </Provider>
    );
};

export { App };

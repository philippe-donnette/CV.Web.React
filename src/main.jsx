import React from 'react';
import { render } from 'react-dom';
import App from './components/app';
import configureStore from './redux/store';
import { Provider } from 'react-redux';
import './styles/donola.css';

let initialState = {
    projects: []
};

let store = configureStore(initialState);

render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('app')
);
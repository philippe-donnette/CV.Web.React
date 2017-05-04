import React from 'react';
import { render } from 'react-dom';
import App from './components/app';
import configureStore from './redux/store';
import { Provider } from 'react-redux';

let initialState = {
    projects: [{ id: 1, name: 'Proj 1' }, { id: 2, name: 'Proj 2' }]
};

let store = configureStore(initialState);

render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('app')
);
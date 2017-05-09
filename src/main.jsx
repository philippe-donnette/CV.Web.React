import React from 'react';
import { render } from 'react-dom';
import App from './components/app';
import configureStore from './redux/store';
import { Provider } from 'react-redux';
import initialState from './redux/initial-state';

let store = configureStore(initialState);
render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('app')
);
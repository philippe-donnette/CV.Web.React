import React from 'react';
import { render } from 'react-dom';
import App from './components/app';
import configureStore from './redux/store';
import { Provider } from 'react-redux';
import ProjectService from './services/project-service';
import initialState from './redux/initial-state';

console.log(initialState.settings.apiBaseURI);

let projectService = new ProjectService(initialState.settings.apiBaseURI);
projectService.getProjects()
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        initialState.projects = data;
        let store = configureStore(initialState);
        render(
            <Provider store={store}>
                <App/>
            </Provider>,
            document.getElementById('app')
        );
    })
    .catch((error) => { throw (error); });
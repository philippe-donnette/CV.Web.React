import { applyMiddleware, compose, createStore } from 'redux';
import rootReducer from './reducers';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';

let middleware = [thunk];
if (process.env.NODE_ENV !== 'production') {
    middleware = [
        ...middleware, createLogger()
    ];
}

let finalCreateStore = compose(
    applyMiddleware(...middleware)
)(createStore);

export default function configureStore(initialState) {
    return finalCreateStore(rootReducer, initialState);
}
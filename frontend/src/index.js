import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import reducers from './Reducers';
import thunk from 'redux-thunk';
import state from "./state";

// calls old Fetch with a new function that adds a header token
const oldFetch = window.fetch;
window.fetch = (url, settings = {}) => {
    return oldFetch(url,
        {
            ...settings,
            headers: { ...settings.headers, authorization: localStorage.getItem("token") }
        }
    );
};

const composeEnhancers = typeof window === "object" &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;
const enhancer = composeEnhancers(applyMiddleware(thunk));

const store = createStore(reducers, state, enhancer)

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root'));

serviceWorker.unregister();

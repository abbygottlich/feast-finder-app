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
import { Route, Link, BrowserRouter as Router } from "react-router-dom";
import Favorites from "./components/Favorites"

const composeEnhancers = typeof window === "object" &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;
const enhancer = composeEnhancers(applyMiddleware(thunk));

const store = createStore(reducers, state, enhancer)

const Routing = (
    <Router>
        <div>
            <Route exact path="/" component={App} />
            <Route path="/favorites" component={Favorites} />
        </div>
    </Router>
)

ReactDOM.render(
    <Provider store={store}>
        {Routing}
    </Provider>,
    document.getElementById('root'));

serviceWorker.unregister();

/**
 * @summary   Start point to build the render the react app
 * @author    Kevin Gasser, Simon Müller, Tobias Huonder
*/

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { decode } from 'jsonwebtoken';
import { createStore, applyMiddleware } from 'redux';
import createHistory from 'history/createHashHistory';
import { ConnectedRouter, routerMiddleware } from 'react-router-redux';
import thunkMiddleware from 'redux-thunk';
import loggerMiddleware from 'redux-logger';
import reducers from './reducers';
import App from './components/App';
import { loginUserSuccess } from './actions/user';

const history = createHistory();

const store = createStore(
  reducers,
  applyMiddleware(thunkMiddleware, loggerMiddleware, routerMiddleware(history)),
);

const authToken = localStorage.getItem('token');

if (authToken) {
  const { isAdmin, sub } = decode(authToken);
  store.dispatch(loginUserSuccess(isAdmin, sub));
}

ReactDOM.render(
  (
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <App />
      </ConnectedRouter>
    </Provider>
  ),
  document.getElementById('root'),
);

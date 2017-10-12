import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import createHistory from 'history/createHashHistory';
import { ConnectedRouter, routerMiddleware } from 'react-router-redux';
import thunkMiddleware from 'redux-thunk';
import loggerMiddleware from 'redux-logger';
import reducers from './reducers';
import './index.css';
import App from './components/App';
import { loginUserSuccess } from './actions/user';

const history = createHistory();

const store = createStore(
  reducers,
  applyMiddleware(thunkMiddleware, loggerMiddleware, routerMiddleware(history)),
);

const authToken = localStorage.getItem('token');

if (authToken) {
  store.dispatch(loginUserSuccess);
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

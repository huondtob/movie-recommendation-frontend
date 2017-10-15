/**
 * @summary   Combines the reducers
 * @author    Kevin Gasser, Simon Müller, Tobias Huonder
*/

import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { routerReducer } from 'react-router-redux';
import userReducer from './user';

export default combineReducers({
  user: userReducer,
  form: formReducer,
  router: routerReducer,
});

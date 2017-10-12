import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { routerReducer } from 'react-router-redux';
import moviesReducer from './movies';
import recommendationsReducer from './recommendations';
import userReducer from './user';
import adminReducer from './admin';
import resetReducer from './reset';

export default combineReducers({
  user: userReducer,
  admin: adminReducer,
  movies: moviesReducer,
  recommendations: recommendationsReducer,
  form: formReducer,
  router: routerReducer,
  reset: resetReducer,
});

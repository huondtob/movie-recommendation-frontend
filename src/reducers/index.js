import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form'
import moviesReducer from './movies';
import recommendationsReducer from './recommendations';
import { routerReducer } from 'react-router-redux';
import userReducer from './user';
import adminReducer from './admin';

export default combineReducers({
  user: userReducer,
  admin: adminReducer,
  movies: moviesReducer,
  recommendations: recommendationsReducer,
  form: formReducer,
  router: routerReducer
});

/**
 * @summary   Reducer for user actions
 * @author    Kevin Gasser, Simon Müller, Tobias Huonder
*/

import { LOGIN_USER, LOGIN_USER_SUCCESS, LOGIN_USER_FAILURE, LOGOUT_USER, LOGOUT_USER_SUCCESS,
  LOGOUT_USER_FAILURE,
} from '../actions/user';

const INITIAL_STATE = {
  authenticated: false, username: null, isAdmin: false, error: null, loading: false,
};

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case LOGIN_USER:
      return {
        ...state, authenticated: false, isAdmin: false, error: null, loading: true,
      };

    case LOGIN_USER_SUCCESS:
      return {
        ...state,
        authenticated: true,
        username: action.username,
        isAdmin: action.isAdmin,
        error: null,
        loading: false,
      };

    case LOGIN_USER_FAILURE:
      return {
        ...state,
        authenticated: false,
        username: null,
        isAdmin: false,
        error: action.error,
        loading: false,
      };

    case LOGOUT_USER:
      return { ...state, error: null, loading: true };

    case LOGOUT_USER_SUCCESS:
      return {
        ...state,
        authenticated: false,
        username: null,
        isAdmin: false,
        error: null,
        loading: false,
      };

    case LOGOUT_USER_FAILURE:
      return { ...state, error: action.error, loading: false };

    default:
      return state;
  }
}

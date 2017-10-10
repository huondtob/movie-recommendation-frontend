import { LOGIN_USER, LOGIN_USER_SUCCESS, LOGIN_USER_FAILURE, REGISTER_USER,
  REGISTER_USER_SUCCESS, REGISTER_USER_FAILURE, LOGOUT_USER, LOGOUT_USER_SUCCESS,
  LOGOUT_USER_FAILURE, DELETE_USER, DELETE_USER_SUCCESS, DELETE_USER_FAILURE,
  REQUEST_USER, REQUEST_USER_SUCCESS, REQUEST_USER_FAILURE, ADD_WATCHED_MOVIE,
  ADD_WATCHED_MOVIE_SUCCESS, ADD_WATCHED_MOVIE_FAILURE
} from '../actions/user';

const INITIAL_STATE = { authenticated: false, error: null, loading: false };

export default function(state = INITIAL_STATE, action) {
  switch(action.type) {
    case LOGIN_USER:
      return { ...state, authenticated: false, error: null, loading: true };

    case LOGIN_USER_SUCCESS:
      return { ...state, authenticated: true, error: null, loading: false };

    case LOGIN_USER_FAILURE:
      return { ...state, authenticated: false, error: action.error, loading: false };

    case REGISTER_USER:
      return { ...state, error: null, loading: true };

    case REGISTER_USER_SUCCESS:
      return { ...state, error: null, loading: false };

    case REGISTER_USER_FAILURE:
      return { ...state, error: action.error, loading: false };

    case LOGOUT_USER:
      return { ...state, error: null, loading: true };

    case LOGOUT_USER_SUCCESS:
      return { ...state, authenticated: false, error: null, loading: false };

    case LOGOUT_USER_FAILURE:
      return { ...state, error: action.error, loading: false };

    case DELETE_USER:
      return { ...state, error: null, loading: true };

    case DELETE_USER_SUCCESS:
      return { ...state, error: null, loading: false };

    case DELETE_USER_FAILURE:
      return { ...state, error: action.error, loading: false };

    case REQUEST_USER:
      return { ...state, error: null, loading: true };

    case REQUEST_USER_SUCCESS:
      return { ...state, error: null, loading: false };

    case REQUEST_USER_FAILURE:
      return { ...state, error: action.error, loading: false };

    case ADD_WATCHED_MOVIE:
      return { ...state, error: null, loading: true };

    case ADD_WATCHED_MOVIE_SUCCESS:
      return { ...state, error: null, loading: false };

    case ADD_WATCHED_MOVIE_FAILURE:
      return { ...state, error: action.error, loading: false };

    default:
      return state;
  }
};

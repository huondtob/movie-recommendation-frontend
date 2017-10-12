import {
  RESET_PASSWORD, RESET_PASSWORD_SUCCESS, RESET_PASSWORD_FAILURE,
  SET_PASSWORD, SET_PASSWORD_SUCCESS, SET_PASSWORD_FAILURE,
} from '../actions/reset';

const INITIAL_STATE = { error: null, loading: false };

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case RESET_PASSWORD:
      return { ...state, error: null, loading: true };

    case RESET_PASSWORD_SUCCESS:
      return { ...state, error: null, loading: false };

    case RESET_PASSWORD_FAILURE:
      return { ...state, error: action.error, loading: false };

    case SET_PASSWORD:
      return { ...state, error: null, loading: true };

    case SET_PASSWORD_SUCCESS:
      return { ...state, error: null, loading: false };

    case SET_PASSWORD_FAILURE:
      return { ...state, error: action.error, loading: false };

    default:
      return state;
  }
}

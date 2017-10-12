import {
  REQUEST_ALL_USERS, REQUEST_ALL_USERS_SUCCESS, REQUEST_ALL_USERS_FAILURE,
} from '../actions/admin';

const INITIAL_STATE = { userList: [], error: null, loading: false };

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case REQUEST_ALL_USERS:
      return { ...state, error: null, loading: true };

    case REQUEST_ALL_USERS_SUCCESS:
      return {
        ...state, userList: action.users, error: null, loading: false,
      };

    case REQUEST_ALL_USERS_FAILURE:
      return { ...state, error: action.error, loading: false };

    default:
      return state;
  }
}

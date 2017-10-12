export const REQUEST_ALL_USERS = 'REQUEST_ALL_USERS';
export const REQUEST_ALL_USERS_SUCCESS = 'REQUEST_ALL_USERS_SUCCESS';
export const REQUEST_ALL_USERS_FAILURE = 'REQUEST_ALL_USERS_FAILURE';

export function requestAllUsers() {
  return {
    type: REQUEST_ALL_USERS,
  };
}

export function requestAllUsersSuccess(users) {
  return {
    type: REQUEST_ALL_USERS_SUCCESS,
    users,
  };
}

export function requestAllUsersFailure(error) {
  return {
    type: REQUEST_ALL_USERS_FAILURE,
    error,
  };
}

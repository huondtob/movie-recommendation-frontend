export const REQUEST_ALL_USERS = 'REQUEST_ALL_USERS';
export const REQUEST_ALL_USERS_SUCCESS = 'REQUEST_ALL_USERS_SUCCESS';
export const REQUEST_ALL_USERS_FAILURE = 'REQUEST_ALL_USERS_FAILURE';

export const requestAllUsers = { type: REQUEST_ALL_USERS };

export const requestAllUsersSuccess = users => ({
  type: REQUEST_ALL_USERS_SUCCESS,
  users,
});

export const requestAllUsersFailure = error => ({
  type: REQUEST_ALL_USERS_FAILURE,
  error,
});

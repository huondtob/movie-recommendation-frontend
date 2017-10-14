export const LOGIN_USER = 'LOGIN_USER';
export const LOGIN_USER_SUCCESS = 'LOGIN_USER_SUCCESS';
export const LOGIN_USER_FAILURE = 'LOGIN_USER_FAILURE';

export const LOGOUT_USER = 'LOGOUT_USER';
export const LOGOUT_USER_SUCCESS = 'LOGOUT_USER_SUCCESS';
export const LOGOUT_USER_FAILURE = 'LOGOUT_USER_FAILURE';

export const logoutUser = { type: LOGOUT_USER };

export const logoutUserSuccess = { type: LOGOUT_USER_SUCCESS };

export const logoutUserFailure = error => ({
  type: LOGOUT_USER_FAILURE,
  error,
});

export const loginUser = { type: LOGIN_USER };

export const loginUserSuccess = (isAdmin, username) =>
  ({ type: LOGIN_USER_SUCCESS, isAdmin, username });

export const loginUserFailure = error => ({
  type: LOGIN_USER_FAILURE,
  error,
});

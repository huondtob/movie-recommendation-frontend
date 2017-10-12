export const RESET_PASSWORD = 'RESET_PASSWORD';
export const RESET_PASSWORD_SUCCESS = 'RESET_PASSWORD_SUCCESS';
export const RESET_PASSWORD_FAILURE = 'RESET_PASSWORD_FAILURE';

export const SET_PASSWORD = 'SET_PASSWORD';
export const SET_PASSWORD_SUCCESS = 'SET_PASSWORD_SUCCESS';
export const SET_PASSWORD_FAILURE = 'SET_PASSWORD_FAILURE';

export const resetPassword = { type: RESET_PASSWORD };

export const resetPasswordSuccess = { type: RESET_PASSWORD_SUCCESS };

export const resetPasswordFailure = error => ({
  type: RESET_PASSWORD_FAILURE,
  error,
});

export const setPassword = { type: SET_PASSWORD };

export const setPasswordSuccess = { type: SET_PASSWORD_SUCCESS };

export const setPasswordFailure = error => ({
  type: SET_PASSWORD_FAILURE,
  error,
});

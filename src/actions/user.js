export const LOGIN_USER = 'LOGIN_USER';
export const LOGIN_USER_SUCCESS = 'LOGIN_USER_SUCCESS';
export const LOGIN_USER_FAILURE = 'LOGIN_USER_FAILURE';

export const REGISTER_USER = 'REGISTER_USER';
export const REGISTER_USER_SUCCESS = 'REGISTER_USER_SUCCESS';
export const REGISTER_USER_FAILURE = 'REGISTER_USER_FAILURE';

export const REQUEST_USER = 'REQUEST_USER';
export const REQUEST_USER_SUCCESS = 'REQUEST_USER_SUCCESS';
export const REQUEST_USER_FAILURE = 'REQUEST_USER_FAILURE';

export const LOGOUT_USER = 'LOGOUT_USER';
export const LOGOUT_USER_SUCCESS = 'LOGOUT_USER_SUCCESS';
export const LOGOUT_USER_FAILURE = 'LOGOUT_USER_FAILURE';

export const DELETE_USER = 'DELETE_USER';
export const DELETE_USER_SUCCESS = 'DELETE_USER_SUCCESS';
export const DELETE_USER_FAILURE = 'DELETE_USER_FAILURE';

export const ADD_WATCHED_MOVIE = 'ADD_WATCHED_MOVIE';
export const ADD_WATCHED_MOVIE_SUCCESS = 'ADD_WATCHED_MOVIE_SUCCESS';
export const ADD_WATCHED_MOVIE_FAILURE = 'ADD_WATCHED_MOVIE_FAILURE';

export const logoutUser = () => ({
  type: LOGOUT_USER,
});

export const logoutUserSuccess = () => ({
  type: LOGOUT_USER_SUCCESS,
});

export const logoutUserFailure = error => ({
  type: LOGOUT_USER_FAILURE,
  error,
});

export const loginUser = () => ({
  type: LOGIN_USER,
});

export const loginUserSuccess = () => ({
  type: LOGIN_USER_SUCCESS,
});

export const loginUserFailure = error => ({
  type: LOGIN_USER_FAILURE,
  error,
});

export const registerUser = () => ({
  type: REGISTER_USER,
});

export const registerUserSuccess = () => ({
  type: REGISTER_USER_SUCCESS,
});

export const registerUserFailure = error => ({
  type: REGISTER_USER_FAILURE,
  error,
});

export const deleteUser = () => ({
  type: DELETE_USER,
});

export const deleteUserSuccess = () => ({
  type: DELETE_USER_SUCCESS,
});

export const deleteUserFailure = error => ({
  type: DELETE_USER_FAILURE,
  error,
});

export const requestUser = () => ({
  type: REQUEST_USER,
});

export const requestUserSuccess = user => ({
  type: REQUEST_USER_SUCCESS,
  user,
});

export const requestUserFailure = error => ({
  type: REQUEST_USER_FAILURE,
  error,
});

export const addWatchedMovie = () => ({
  type: ADD_WATCHED_MOVIE,
});

export const addWatchedMovieSuccess = movie => ({
  type: ADD_WATCHED_MOVIE_SUCCESS,
  movie,
});

export const addWatchedMovieFailure = error => ({
  type: ADD_WATCHED_MOVIE_FAILURE,
  error,
});

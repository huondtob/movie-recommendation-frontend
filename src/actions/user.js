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

export function logoutUser() {
  return {
    type: LOGOUT_USER,
  };
}

export function logoutUserSuccess() {
  return {
    type: LOGOUT_USER_SUCCESS,
  };
}

export function logoutUserFailure(error) {
  return {
    type: LOGOUT_USER_FAILURE,
    error,
  };
}

export function loginUser() {
  return {
    type: LOGIN_USER,
  };
}

export function loginUserSuccess() {
  return {
    type: LOGIN_USER_SUCCESS,
  };
}

export function loginUserFailure(error) {
  return {
    type: LOGIN_USER_FAILURE,
    error,
  };
}

export function registerUser() {
  return {
    type: REGISTER_USER,
  };
}

export function registerUserSuccess() {
  return {
    type: REGISTER_USER_SUCCESS,
  };
}

export function registerUserFailure(error) {
  return {
    type: REGISTER_USER_FAILURE,
    error,
  };
}

export function deleteUser() {
  return {
    type: DELETE_USER,
  };
}

export function deleteUserSuccess() {
  return {
    type: DELETE_USER_SUCCESS,
  };
}

export function deleteUserFailure(error) {
  return {
    type: DELETE_USER_FAILURE,
    error,
  };
}

export function requestUser() {
  return {
    type: REQUEST_USER,
  };
}

export function requestUserSuccess(user) {
  return {
    type: REQUEST_USER_SUCCESS,
    user,
  };
}

export function requestUserFailure(error) {
  return {
    type: REQUEST_USER_FAILURE,
    error,
  };
}

export function addWatchedMovie() {
  return {
    type: ADD_WATCHED_MOVIE,
  };
}

export function addWatchedMovieSuccess(movie) {
  return {
    type: ADD_WATCHED_MOVIE_SUCCESS,
    movie,
  };
}

export function addWatchedMovieFailure(error) {
  return {
    type: ADD_WATCHED_MOVIE_FAILURE,
    error,
  };
}

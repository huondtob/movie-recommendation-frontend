export const REQUEST_MOVIES = 'REQUEST_MOVIES';
export const REQUEST_MOVIES_SUCCESS = 'REQUEST_MOVIES_SUCCESS';
export const REQUEST_MOVIES_FAILURE = 'REQUEST_MOVIES_FAILURE';

export const requestMovies = () => ({
  type: REQUEST_MOVIES,
});

export const requestMoviesSuccess = movies => ({
  type: REQUEST_MOVIES_SUCCESS,
  movies,
});

export const requestMoviesFailure = error => ({
  type: REQUEST_MOVIES_FAILURE,
  error,
});

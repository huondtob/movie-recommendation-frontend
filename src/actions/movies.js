export const REQUEST_MOVIES = 'REQUEST_MOVIES';
export const REQUEST_MOVIES_SUCCESS = 'REQUEST_MOVIES_SUCCESS';
export const REQUEST_MOVIES_FAILURE = 'REQUEST_MOVIES_FAILURE';

export function requestMovies() {
  return {
    type: REQUEST_MOVIES
  }
}

export function requestMoviesSuccess(movies) {
  return {
    type: REQUEST_MOVIES_SUCCESS,
    movies
  }
}

export function requestMoviesFailure(error) {
  return {
    type: REQUEST_MOVIES_FAILURE,
    error
  }
}

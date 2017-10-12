import { REQUEST_MOVIES, REQUEST_MOVIES_SUCCESS, REQUEST_MOVIES_FAILURE,
} from '../actions/movies';

const INITIAL_STATE = { movieList: [], error: null, loading: false };

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case REQUEST_MOVIES:
      return {
        ...state, movieList: [], error: null, loading: true,
      };

    case REQUEST_MOVIES_SUCCESS:
      return {
        ...state, movieList: action.movies, error: null, loading: false,
      };

    case REQUEST_MOVIES_FAILURE:
      return {
        ...state, movieList: [], error: action.error, loading: false,
      };

    default:
      return state;
  }
}

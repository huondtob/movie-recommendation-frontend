import { REQUEST_RECOMMENDATIONS, REQUEST_RECOMMENDATIONS_SUCCESS, REQUEST_RECOMMENDATIONS_FAILURE
} from '../actions/recommendations';

const INITIAL_STATE = { recommendedMovies: [], error: null, loading: false };

export default function(state = INITIAL_STATE, action) {
  switch(action.type) {
    case REQUEST_RECOMMENDATIONS:
      return { ...state, error: null, loading: true };

    case REQUEST_RECOMMENDATIONS_SUCCESS:
      return { ...state, recommendedMovies: action.recommendations, error: null, loading: false };

    case REQUEST_RECOMMENDATIONS_FAILURE:
      return { ...state, error: action.error, loading: false };

    default:
      return state;
  }
};

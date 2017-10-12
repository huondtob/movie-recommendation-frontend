export const REQUEST_RECOMMENDATIONS = 'REQUEST_RECOMMENDATIONS';
export const REQUEST_RECOMMENDATIONS_SUCCESS = 'REQUEST_RECOMMENDATIONS_SUCCESS';
export const REQUEST_RECOMMENDATIONS_FAILURE = 'REQUEST_RECOMMENDATIONS_FAILURE';

export function requestRecommendations() {
  return {
    type: REQUEST_RECOMMENDATIONS,
  };
}

export function requestRecommendationsSuccess(recommendations) {
  return {
    type: REQUEST_RECOMMENDATIONS_SUCCESS,
    recommendations,
  };
}

export function requestRecommendationsFailure(error) {
  return {
    type: REQUEST_RECOMMENDATIONS_FAILURE,
    error,
  };
}

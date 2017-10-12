export const REQUEST_RECOMMENDATIONS = 'REQUEST_RECOMMENDATIONS';
export const REQUEST_RECOMMENDATIONS_SUCCESS = 'REQUEST_RECOMMENDATIONS_SUCCESS';
export const REQUEST_RECOMMENDATIONS_FAILURE = 'REQUEST_RECOMMENDATIONS_FAILURE';

export const requestRecommendations = () => ({
  type: REQUEST_RECOMMENDATIONS,
});

export const requestRecommendationsSuccess = recommendations => ({
  type: REQUEST_RECOMMENDATIONS_SUCCESS,
  recommendations,
});

export const requestRecommendationsFailure = error => ({
  type: REQUEST_RECOMMENDATIONS_FAILURE,
  error,
});

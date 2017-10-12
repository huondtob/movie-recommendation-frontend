import { connect } from 'react-redux';
import { requestRecommendations,
  requestRecommendationsSuccess,
  requestRecommendationsFailure } from '../actions/recommendations';
import Recommendations from '../components/Recommendations';

const BASE_URL = 'http://localhost:3001/api';

const mapStateToProps = state => ({
  recommendationsError: state.recommendations.error,
  movies: state.recommendations.recommendedMovies,
});

const mapDispatchToProps = dispatch => ({
  getRecommendedMovies: () => {
    dispatch(requestRecommendations);

    const authToken = localStorage.getItem('token');

    const headers = new Headers({
      Authorization: `Bearer ${authToken}`,
    });

    return fetch(`${BASE_URL}/movie`, { headers })
      .then((response) => {
        if (response.ok) {
          return response.json();
        }

        return response.json()
          .then((errBody) => {
            throw new Error(errBody.error);
          });
      })
      .then(json => dispatch(requestRecommendationsSuccess(json.movies)))
      .catch(err => dispatch(requestRecommendationsFailure(err)));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Recommendations);

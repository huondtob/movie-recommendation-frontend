import { connect } from 'react-redux';
import { requestMovies, requestMoviesSuccess, requestMoviesFailure } from '../actions/movies';
import SearchMovies from '../components/SearchMovies';

const BASE_URL = 'http://localhost:3001/api';

const mapStateToProps = (state, ownProps) => ({
  moviesError: state.movies.error,
  movies: state.movies.movieList
});

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    handleChange: (event) => {
      dispatch(requestMovies());

      const authToken = localStorage.getItem('token');

      const headers = new Headers({
        'Authorization': `Bearer ${authToken}`
      });

      return fetch(`${BASE_URL}/movie/?name=${event.target.value}`, { headers })
        .then(response => {
          if (response.ok) {
            return response.json();
          } else {
            return response.json()
              .then((errBody) => {
                throw new Error(errBody.error);
              });
          }
        })
        .then(json => {
          dispatch(requestMoviesSuccess(json.movies));
        })
        .catch(err => dispatch(requestMoviesFailure(err)));
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SearchMovies);

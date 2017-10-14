import { connect } from 'react-redux';
import SearchMovies from '../components/SearchMovies';

const mapStateToProps = state => ({
  username: state.user.username,
});

export default connect(
  mapStateToProps,
  null,
)(SearchMovies);

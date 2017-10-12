import { connect } from 'react-redux';
import LoginForm from '../components/LoginForm';

const mapStateToProps = (state, ownProps) => ({
  authenticated: state.user.authenticated
});

export default connect(
  mapStateToProps,
  null
)(LoginForm);

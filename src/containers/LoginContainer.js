/**
 * @summary   Login container for redux state connection
 * @author    Kevin Gasser, Simon Müller, Tobias Huonder
*/

import { connect } from 'react-redux';
import LoginForm from '../components/LoginForm';

const mapStateToProps = state => ({
  authenticated: state.user.authenticated,
});

export default connect(
  mapStateToProps,
  null,
)(LoginForm);

/**
 * @summary   Password reset container for redux data connection
 * @author    Kevin Gasser, Simon Müller, Tobias Huonder
*/

import { connect } from 'react-redux';
import PasswordResetForm from '../components/PasswordResetForm';

const mapStateToProps = state => ({
  authenticated: state.user.authenticated,
});

export default connect(
  mapStateToProps,
  null,
)(PasswordResetForm);

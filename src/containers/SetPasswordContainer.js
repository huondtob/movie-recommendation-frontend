/**
 * @summary   Set password container for redux state connection
 * @author    Kevin Gasser, Simon Müller, Tobias Huonder
*/

import { connect } from 'react-redux';
import SetPasswordForm from '../components/SetPasswordForm';

const mapStateToProps = (state, ownProps) => ({
  authenticated: state.user.authenticated,
  location: ownProps.location,
});

export default connect(
  mapStateToProps,
  null,
)(SetPasswordForm);

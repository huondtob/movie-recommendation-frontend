import { connect } from 'react-redux';
import SetPasswordForm from '../components/SetPasswordForm';

const mapStateToProps = state => ({
  authenticated: state.user.authenticated,
});

export default connect(
  mapStateToProps,
  null,
)(SetPasswordForm);

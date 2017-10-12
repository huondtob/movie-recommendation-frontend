import { connect } from 'react-redux';
import PasswordResetForm from '../components/PasswordResetForm';

const mapStateToProps = state => ({
  authenticated: state.user.authenticated,
});

export default connect(
  mapStateToProps,
  null,
)(PasswordResetForm);

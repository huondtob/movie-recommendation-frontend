import { connect } from 'react-redux';
import { registerUser, registerUserSuccess, registerUserFailure } from '../actions/user';
import RegisterForm from '../components/RegisterForm';
import { push } from 'react-router-redux';

const BASE_URL = 'http://localhost:3001/api';

const mapStateToProps = (state, ownProps) => ({
  userError: state.user.error
});

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onSubmit: (formData) => {
      dispatch(registerUser());

      const headers = new Headers({
        "Content-Type": "application/json"
      });

      return fetch(`${BASE_URL}/auth/register`, {
          method: 'post',
          headers,
          body: JSON.stringify(formData)
        })
        .then(response => {
          if (response.ok) {
            return;
          } else {
            return response.json()
              .then(({ error }) => {
                throw new Error(error);
              });
          }
        })
        .then(() => {
          dispatch(registerUserSuccess());
          dispatch(push('/login'));
        })
        .catch(err => dispatch(registerUserFailure(err)));
      }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RegisterForm);

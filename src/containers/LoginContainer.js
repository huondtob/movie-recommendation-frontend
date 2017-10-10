import { connect } from 'react-redux';
import { loginUser, loginUserSuccess, loginUserFailure } from '../actions/user';
import LoginForm from '../components/LoginForm';

const BASE_URL = 'http://localhost:3001/api';

const mapStateToProps = (state, ownProps) => ({
  authenticated: state.user.authenticated,
  userError: state.user.error
});

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onSubmit: (formData) => {
      dispatch(loginUser());

      const headers = new Headers({
        "Content-Type": "application/json"
      });

      return fetch(`${BASE_URL}/auth/login`, {
          method: 'post',
          headers,
          body: JSON.stringify(formData)
        })
        .then(response => {
          if (response.ok) {
            return response.json();
          } else {
            return response.json()
              .then(({ error }) => {
                throw new Error(error);
              });
          }
        })
        .then(json => {
          localStorage.setItem('token', json.token);
          dispatch(loginUserSuccess());
        })
        .catch(err => dispatch(loginUserFailure(err)));
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginForm);

import React from 'react';
import { Field, reduxForm, SubmissionError } from 'redux-form';
import { decode } from 'jsonwebtoken';
import { Redirect, Link } from 'react-router-dom';
import { loginUser, loginUserSuccess, loginUserFailure } from '../actions/user';

const BASE_URL = 'http://localhost:3001/api';

const handleLoginUser = (values, dispatch) => {
  dispatch(loginUser);

  const headers = new Headers({
    'Content-Type': 'application/json',
  });

  return fetch(`${BASE_URL}/auth/login`, {
    method: 'post',
    headers,
    body: JSON.stringify(values),
  })
    .then((response) => {
      if (response.ok) {
        return response.json();
      }

      return response.json()
        .then(() => {
          throw new SubmissionError({
            _error: 'Login failed',
          });
        });
    });
};

const handleLoginUserSuccess = (result, dispatch) => {
  const { isAdmin, sub } = decode(result.token);
  localStorage.setItem('token', result.token);
  dispatch(loginUserSuccess(isAdmin, sub));
};

const handleLoginUserFailure = (errors, dispatch, submitError) => {
  dispatch(loginUserFailure(submitError));
};

const LoginForm = (props) => {
  const { handleSubmit, error, authenticated } = props;

  if (authenticated) {
    return (
      <Redirect to="/" />
    );
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Username:
        <Field name="username" component="input" type="text" required />
      </label>
      <br />
      <label>
        Password:
        <Field name="password" component="input" type="password" required />
      </label>
      <br />
      { error && <strong>{ error }</strong> }
      <input type="submit" value="Submit" />
      <Link to="/reset-password">Reset password</Link>
    </form>
  );
};

const LoginFormRedux = reduxForm({
  form: 'login',
  onSubmit: handleLoginUser,
  onSubmitSuccess: handleLoginUserSuccess,
  onSubmitFail: handleLoginUserFailure,
})(LoginForm);

export default LoginFormRedux;

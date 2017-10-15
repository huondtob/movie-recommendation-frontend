/**
 * @summary   Login form component which is responsible for the user login
 * @author    Kevin Gasser, Simon Müller, Tobias Huonder
*/

import React from 'react';
import { Field, reduxForm, SubmissionError } from 'redux-form';
import { decode } from 'jsonwebtoken';
import { Redirect, Link } from 'react-router-dom';
import { loginUser, loginUserSuccess, loginUserFailure } from '../actions/user';
import FormField from './FormField';

const BASE_URL = 'https://peaceful-dawn-58845.herokuapp.com/api';

/** Function for handling the user login */
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
        .then(({ error }) => {
          if (error.errors) {
            throw new SubmissionError({
              ...error.errors,
              _error: error.message,
            });
          }

          throw new SubmissionError({
            _error: error.message,
          });
        });
    });
};

/** Function for handling successfull user login */
const handleLoginUserSuccess = (result, dispatch) => {
  const { isAdmin, sub } = decode(result.token);
  localStorage.setItem('token', result.token);
  dispatch(loginUserSuccess(isAdmin, sub));
};

/** Function for handling unsuccessfull user login */
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
        <Field name="username" component={FormField} type="text" />
      </label>
      <br />
      <label>
        Password:
        <Field name="password" component={FormField} type="password" />
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

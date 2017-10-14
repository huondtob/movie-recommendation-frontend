import React from 'react';
import { Field, reduxForm, SubmissionError } from 'redux-form';
import { push } from 'react-router-redux';

const BASE_URL = 'http://localhost:3001/api';

const handleRegisterUser = (values, dispatch) => {
  const headers = new Headers({
    'Content-Type': 'application/json',
  });

  return fetch(`${BASE_URL}/auth/register`, {
    method: 'post',
    headers,
    body: JSON.stringify(values),
  })
    .then((response) => {
      if (response.ok) {
        return null;
      }

      return response.json()
        .then(() => {
          throw new SubmissionError({
            _error: 'Registration failed',
          });
        });
    });
};

const handleRegisterUserSuccess = (result, dispatch) => {
  dispatch(push('/login'));
};

const handleRegisterUserFailure = (errors, dispatch, submitError) => {
};

const RegisterForm = (props) => {
  const { handleSubmit, error } = props;

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Username:
        <Field name="username" component="input" type="text" required />
      </label>
      <br />
      <label>
        Email:
        <Field name="email" component="input" type="email" required />
      </label>
      <br />
      <label>
        Password:
        <Field name="password" component="input" type="password" required />
      </label>
      <br />
      <label>
        Password confirmation:
        <Field name="passwordConfirmation" component="input" type="password" required />
      </label>
      <br />
      { error && <strong>{ error }</strong> }
      <input type="submit" value="Submit" />
    </form>
  );
};

const RegisterFormRedux = reduxForm({
  form: 'register',
  onSubmit: handleRegisterUser,
  onSubmitSuccess: handleRegisterUserSuccess,
  onSubmitFail: handleRegisterUserFailure,
})(RegisterForm);

export default RegisterFormRedux;

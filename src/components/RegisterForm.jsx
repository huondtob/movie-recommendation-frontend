import React from 'react';
import { Field, reduxForm, SubmissionError } from 'redux-form';
import { push } from 'react-router-redux';
import FormField from './FormField';

const BASE_URL = 'http://localhost:3001/api';

const handleRegisterUser = (values) => {
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

const handleRegisterUserSuccess = (result, dispatch) => {
  dispatch(push('/login'));
};

const RegisterForm = (props) => {
  const { handleSubmit, error } = props;

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Username:
        <Field name="username" component={FormField} type="text" />
      </label>
      <br />
      <label>
        Email:
        <Field name="email" component={FormField} type="email" />
      </label>
      <br />
      <label>
        Password:
        <Field name="password" component={FormField} type="password" />
      </label>
      <br />
      <label>
        Password confirmation:
        <Field name="passwordConfirmation" component={FormField} type="password" />
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

})(RegisterForm);

export default RegisterFormRedux;

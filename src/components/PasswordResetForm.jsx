import React from 'react';
import { Field, reduxForm, SubmissionError } from 'redux-form';
import { Redirect } from 'react-router-dom';
import FormField from './FormField';

const BASE_URL = 'http://localhost:3001/api';

const handlePasswordReset = (values, dispatch) => {
  const headers = new Headers({
    'Content-Type': 'application/json',
  });

  return fetch(`${BASE_URL}/auth/reset-password`, {
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

const handlePasswordResetSuccess = (result, dispatch) => {
};

const PasswordResetForm = (props) => {
  const { handleSubmit, error, authenticated } = props;

  if (authenticated) {
    return (
      <Redirect to="/" />
    );
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Email:
        <Field name="email" component={FormField} type="email" />
      </label>
      <br />
      { error && <strong>{ error }</strong> }
      <input type="submit" value="Submit" />
    </form>
  );
};

const PasswordResetFormRedux = reduxForm({
  form: 'resetPassword',
  onSubmit: handlePasswordReset,
  onSubmitSuccess: handlePasswordResetSuccess,
})(PasswordResetForm);

export default PasswordResetFormRedux;

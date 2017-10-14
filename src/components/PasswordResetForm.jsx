import React from 'react';
import { Field, reduxForm, SubmissionError } from 'redux-form';
import { Redirect } from 'react-router-dom';

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
        return response.json();
      }

      return response.json()
        .then(() => {
          throw new SubmissionError({
            _error: 'Password reset failed',
          });
        });
    });
};

const handlePasswordResetSuccess = (result, dispatch) => {
};

const handlePasswordResetFailure = (errors, dispatch, submitError) => {
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
        <Field name="email" component="input" type="email" required />
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
  onSubmitFail: handlePasswordResetFailure,
})(PasswordResetForm);

export default PasswordResetFormRedux;

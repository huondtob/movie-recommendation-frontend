import React from 'react';
import { Field, reduxForm, SubmissionError } from 'redux-form';
import queryString from 'query-string';
import { Redirect } from 'react-router-dom';

const BASE_URL = 'http://localhost:3001/api';

const handleSetPassword = (values, dispatch, { location }) => {
  const headers = new Headers({
    'Content-Type': 'application/json',
  });

  const parsedQueryString = queryString.parse(location.search);
  const { resetToken } = parsedQueryString;

  return fetch(`${BASE_URL}/auth/set-password?resetToken=${resetToken}`, {
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
            _error: 'Password reset failed',
          });
        });
    });
};

const handleSetPasswordSuccess = (result, dispatch) => {
};

const handleSetPasswordFailure = (errors, dispatch, submitError) => {
};

const SetPasswordForm = (props) => {
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

const SetPasswordFormRedux = reduxForm({
  form: 'setPassword',
  onSubmit: handleSetPassword,
  onSubmitSuccess: handleSetPasswordSuccess,
  onSubmitFail: handleSetPasswordFailure,
})(SetPasswordForm);

export default SetPasswordFormRedux;

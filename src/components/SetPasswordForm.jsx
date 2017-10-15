/**
 * @summary   Set password component which is responsible for setting the password
 * @author    Kevin Gasser, Simon Müller, Tobias Huonder
*/

import React from 'react';
import { Field, reduxForm, SubmissionError } from 'redux-form';
import queryString from 'query-string';
import { Redirect } from 'react-router-dom';
import { push } from 'react-router-redux';
import FormField from './FormField';

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

const handleSetPasswordSuccess = (result, dispatch) => {
  dispatch(push('/login'));
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
        <Field name="username" component={FormField} type="text" />
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

const SetPasswordFormRedux = reduxForm({
  form: 'setPassword',
  onSubmit: handleSetPassword,
  onSubmitSuccess: handleSetPasswordSuccess,
})(SetPasswordForm);

export default SetPasswordFormRedux;

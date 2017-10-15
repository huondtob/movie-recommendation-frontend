/**
 * @summary   Set password component which is responsible for setting the password
 * @author    Kevin Gasser, Simon Müller, Tobias Huonder
*/

import React from 'react';
import { Field, reduxForm, SubmissionError } from 'redux-form';
import { Button, Form, Message } from 'semantic-ui-react';
import queryString from 'query-string';
import { Redirect } from 'react-router-dom';
import { push } from 'react-router-redux';
import FormField from './FormField';

const BASE_URL = 'https://peaceful-dawn-58845.herokuapp.com/api';

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

/** Function for handling successfull setting password */
const handleSetPasswordSuccess = (result, dispatch) => {
  dispatch(push('/login'));
};

/** Function for setting the password form */
const SetPasswordForm = (props) => {
  const { handleSubmit, error, authenticated } = props;

  if (authenticated) {
    return (
      <Redirect to="/" />
    );
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Field>
        <label>
          Username:
          <Field name="username" component={FormField} type="text" />
        </label>
      </Form.Field>
      <Form.Field>
        <label>
          Password:
          <Field name="password" component={FormField} type="password" />
        </label>
      </Form.Field>
      <Form.Field>
        <label>
          Password confirmation:
          <Field name="passwordConfirmation" component={FormField} type="password" />
        </label>
      </Form.Field>
      <Button type="submit">Submit</Button>

      { error &&
        <Message negative>
          <Message.Header>{ error }</Message.Header>
        </Message>
      }
    </Form>
  );
};

const SetPasswordFormRedux = reduxForm({
  form: 'setPassword',
  onSubmit: handleSetPassword,
  onSubmitSuccess: handleSetPasswordSuccess,
})(SetPasswordForm);

export default SetPasswordFormRedux;

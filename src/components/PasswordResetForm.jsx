/**
 * @summary   Passwort reset component
 * @author    Kevin Gasser, Simon Müller, Tobias Huonder
*/

import React from 'react';
import { Field, reduxForm, SubmissionError } from 'redux-form';
import { Redirect } from 'react-router-dom';
import { Button, Form, Message } from 'semantic-ui-react';
import FormField from './FormField';

const BASE_URL = 'http://localhost:3001/api';

/** Function for handling the password reset */
const handlePasswordReset = (values) => {
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

const PasswordResetForm = (props) => {
  const { handleSubmit, error, authenticated, submitSucceeded } = props;

  if (authenticated) {
    return (
      <Redirect to="/" />
    );
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Field>
        <label>
          Email:
          <Field name="email" component={FormField} type="email" />
        </label>
      </Form.Field>
      <Button type="submit">Submit</Button>

      { submitSucceeded &&
        <Message positive>
          <Message.Header>An Email has been sent</Message.Header>
        </Message>
      }

      { error &&
        <Message negative>
          <Message.Header>{ error }</Message.Header>
        </Message>
      }
    </Form>
  );
};

const PasswordResetFormRedux = reduxForm({
  form: 'resetPassword',
  onSubmit: handlePasswordReset,
})(PasswordResetForm);

export default PasswordResetFormRedux;

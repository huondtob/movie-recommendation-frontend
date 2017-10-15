/**
 * @summary   Register form component which is responsible for the user registration
 * @author    Kevin Gasser, Simon Müller, Tobias Huonder
*/

import React from 'react';
import { Field, reduxForm, SubmissionError } from 'redux-form';
import { Button, Form, Message } from 'semantic-ui-react';
import { push } from 'react-router-redux';
import FormField from './FormField';

const BASE_URL = 'http://localhost:3001/api';

/** Function for handling user registration */
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

/** Function for handling successfull registration */
const handleRegisterUserSuccess = (result, dispatch) => {
  dispatch(push('/login'));
};

const RegisterForm = (props) => {
  const { handleSubmit, error } = props;

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
          Email:
          <Field name="email" component={FormField} type="email" />
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

const RegisterFormRedux = reduxForm({
  form: 'register',
  onSubmit: handleRegisterUser,
  onSubmitSuccess: handleRegisterUserSuccess,

})(RegisterForm);

export default RegisterFormRedux;

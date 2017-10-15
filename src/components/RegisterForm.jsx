/**
 * @summary   Register form component which is responsible for the user registration
 * @author    Kevin Gasser, Simon Müller, Tobias Huonder
*/

import React from 'react';
import { Field, reduxForm, SubmissionError } from 'redux-form';
import { Button, Form, Message } from 'semantic-ui-react';
import { push } from 'react-router-redux';
import FormField from './FormField';

const BASE_URL = 'https://movie-recommendation-backend.herokuapp.com/api';

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
      <Form.Field required>
        <label>
          Username:
        </label>
        <Field name="username" component={FormField} type="text" />
      </Form.Field>
      <Form.Field required>
        <label>
          Email:
        </label>
        <Field name="email" component={FormField} type="email" />
      </Form.Field>
      <Form.Field required>
        <label>
          Password:
        </label>
        <Field name="password" component={FormField} type="password" />
      </Form.Field>
      <Form.Field required>
        <label>
          Password confirmation:
        </label>
        <Field name="passwordConfirmation" component={FormField} type="password" />
      </Form.Field>
      <Button type="submit" primary>Submit</Button>

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

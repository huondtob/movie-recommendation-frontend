import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Redirect } from 'react-router-dom';

let LoginForm = (props) => {
  const { handleSubmit, userError, authenticated } = props;

  if (authenticated) {
    return (
      <Redirect to='/'/>
    );
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Username:
        <Field name="username" component="input" type="text" required/>
      </label>
      <br />
      <label>
        Password:
        <Field name="password" component="input" type="password" required/>
      </label>
      <br />
      { userError && <strong>{ userError.message }</strong> }
      <input type="submit" value="Submit" />
    </form>
  );
}

LoginForm = reduxForm({
  form: 'login'
})(LoginForm)

export default LoginForm;

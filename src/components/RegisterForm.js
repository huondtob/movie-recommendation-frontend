import React from 'react';
import { Field, reduxForm } from 'redux-form';

let RegisterForm = (props) => {
  const { handleSubmit, userError } = props;

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Username:
        <Field name="username" component="input" type="text" required/>
      </label>
      <br />
      <label>
        Email:
        <Field name="email" component="input" type="email" required/>
      </label>
      <br />
      <label>
        Password:
        <Field name="password" component="input" type="password" required/>
      </label>
      <br />
      <label>
        Password confirmation:
        <Field name="passwordConfirmation" component="input" type="password" required/>
      </label>
      <br />
      { userError && <strong>{ userError.message }</strong>}
      <input type="submit" value="Submit" />
    </form>
  );
}

RegisterForm = reduxForm({
  form: 'register'
})(RegisterForm)

export default RegisterForm;

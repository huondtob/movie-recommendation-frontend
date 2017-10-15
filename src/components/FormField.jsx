/**
 * @summary   Form field component
 * @author    Kevin Gasser, Simon Müller, Tobias Huonder
*/

import React from 'react';

export default ({ input, label, type, meta: { touched, error } }) => (
  <div>
    <label>{label}</label>
    <input {...input} placeholder={label} type={type} />
    {touched && error && <span>{error}</span>}
  </div>
);

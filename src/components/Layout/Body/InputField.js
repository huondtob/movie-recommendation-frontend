import React from 'react';

export default function InputField(props) {
  return (
    <div id="inputField">
      <h2>InputField</h2>
      <input onChange={props.onChange}/>
    </div>
  );
}

import React from 'react';

export default function Recommendations(props) {
  const { moviesError } = props;

  return (
    <div>
      <h1>Recommendations</h1>
      { moviesError && <strong>{ moviesError.message }</strong> }
    </div>
  );
}

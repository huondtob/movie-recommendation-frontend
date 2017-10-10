import React from 'react';

export default function Movies(props) {
  const { moviesError, movies, handleChange } = props;
  console.log(movies);
  return (
    <div>
      <h1>Movies</h1>
      <input type="text" onChange={handleChange} />
      <p>{ JSON.stringify(movies) }</p>
      { moviesError && <strong>{ moviesError.message }</strong> }
    </div>
  );
}

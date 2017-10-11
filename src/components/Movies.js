import React from 'react';

export default function Movies(props) {
  const { moviesError, movies, handleChange } = props;

  const movieContainers = movies.map(movie => (<div key={movie}>{movie}</div>));

  return (
    <div>
      <h1>Movies</h1>
      <input type="text" onChange={handleChange} />

      { movieContainers }
      { moviesError && <strong>{ moviesError.message }</strong> }
    </div>
  );
}

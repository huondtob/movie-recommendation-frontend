import React from 'react';

export default function SearchMovies(props) {
  const { moviesError, movies, handleChange } = props;

  const movieContainers = movies.map(movie => (<div key={movie}>{movie}</div>));

  return (
    <div>
      <h1>Search movies</h1>
      <input type="text" onChange={handleChange} />

      { movieContainers }
      { moviesError && <strong>{'There was an error processing while fetching movies'}</strong> }
    </div>
  );
}

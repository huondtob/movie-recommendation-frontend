import React from 'react';
import Movie from './MovieGrid/Movie';

export default class MovieGrid extends React.Component {
  render() {
     const movieItems = [];
    this.props.movies.forEach(function(movieTitle){
      movieItems.push(<Movie movieTitle={movieTitle} />);
    });
    return (
      <div id="movieGrid">
        <h2> MovieGrid </h2>
        {movieItems}
      </div>
    );
  }
}

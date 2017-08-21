import React from 'react';
import Movie from './MovieGrid/Movie';

//Displays the list of recommended movies
export default class MovieGrid extends React.Component {
  render() {
    const movieItems = [];
    this.props.movies.forEach((movieTitle, index) =>
      movieItems.push(<Movie key={index} movieTitle={movieTitle}/>));
    return (
      <div id="movieGrid">
        <h2>MovieGrid</h2>
        {movieItems}
      </div>
    );
  }
}

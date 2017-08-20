import React from 'react';

import Movie from './MovieGrid/Movie';

export default class MovieGrid extends React.Component {
  render() {
    return (
      <div id="movieGrid">
        <h2> MovieGrid </h2>
        <Movie />
      </div>
    );
  }
}

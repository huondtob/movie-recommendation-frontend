import React from 'react';

export default class Movie extends React.Component {
  render() {
    return (
      <div id="movie">
        <h3> {this.props.movieTitle} </h3>
      </div>
    );
  }
}

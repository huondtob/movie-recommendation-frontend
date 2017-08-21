import React from 'react';

export default class Movie extends React.Component {
  constructor(){
    super();

    this.handleMovieChecked = this.handleMovieChecked.bind(this);
  }

  handleMovieChecked() {
    const that = this;
    const url = 'http://localhost:3001';

    const headers = new Headers({
      "Content-Type": "application/json"
    });

    fetch(url, {
      method: 'post',
      headers: headers,
      body: JSON.stringify({title: that.props.movieTitle})
    });
  }

  render() {
    return (
      <div id="movie">
        <h3> {this.props.movieTitle} </h3>
        <button onClick={this.handleMovieChecked}>Mark seen</button>
      </div>
    );
  }
}

import React from 'react';

export default class Recommendations extends React.Component {
  componentWillMount() {
    this.props.getRecommendedMovies();
  }

  render(){
    const movieContainers = this.props.movies.map(movie => (<div key={movie}>{movie}</div>));

    return (
      <div>
        <h1>Recommendations</h1>
        { movieContainers }
        { this.props.recommendationsError && <strong>{'There was an error fetching recommendations'}</strong> }
      </div>
    );
  }
}

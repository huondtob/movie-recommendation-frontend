import React from 'react';

const BASE_URL = 'http://localhost:3001/api';

export default class Recommendations extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      recommendations: [],
      error: null,
    };

    this.getRecommendedMovies = this.getRecommendedMovies.bind(this);
  }

  componentWillMount() {
    this.getRecommendedMovies();
  }

  getRecommendedMovies() {
    const authToken = localStorage.getItem('token');

    const headers = new Headers({
      Authorization: `Bearer ${authToken}`,
    });

    return fetch(`${BASE_URL}/movie`, { headers })
      .then((response) => {
        if (response.ok) {
          return response.json();
        }

        return response.json()
          .then((errBody) => {
            throw new Error(errBody.error);
          });
      })
      .then(json => this.setState({ recommendations: json.movies }))
      .catch(error => this.setState({ error }));
  }

  render() {
    const recommendationContainers = this.state.recommendations.map(movie =>
      (<div key={movie}>{movie}</div>));

    return (
      <div>
        <h1>Recommendations</h1>
        { recommendationContainers }
        { this.state.error &&
          <strong>There was an error fetching recommendations</strong> }
      </div>
    );
  }
}

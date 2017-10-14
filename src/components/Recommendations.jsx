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
      .then(recommendations => this.setState({ recommendations }))
      .catch(error => this.setState({ error }));
  }

  render() {
    const recommendationRows = this.state.recommendations.map(movie =>
      (
        <tr key={movie}>
          <td>{movie}</td>
        </tr>
      ));

    return (
      <div>
        <h1>Recommendations</h1>
        <table>
          <tr>
            <th>Name</th>
          </tr>
          { recommendationRows }
        </table>

        { this.state.error &&
          <strong>There was an error fetching recommendations</strong> }
      </div>
    );
  }
}

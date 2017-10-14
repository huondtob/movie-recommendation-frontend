import React from 'react';

const BASE_URL = 'http://localhost:3001/api';

export default class SearchMovies extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      movies: [],
      error: null,
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const authToken = localStorage.getItem('token');

    const headers = new Headers({
      Authorization: `Bearer ${authToken}`,
    });

    return fetch(`${BASE_URL}/movie/?name=${event.target.value}`, { headers })
      .then((response) => {
        if (response.ok) {
          return response.json();
        }

        return response.json()
          .then((errBody) => {
            throw new Error(errBody.error);
          });
      })
      .then(movies => this.setState({ movies }))
      .catch(error => this.setState({ error }));
  }

  render() {
    const movieContainers = this.state.movies.map(movie =>
      (<div key={movie}>{movie}</div>));

    return (
      <div>
        <h1>Search movies</h1>
        <input type="text" onChange={this.handleChange} />

        { movieContainers }
        { this.state.error &&
          <strong>There was an error while fetching movies</strong> }
      </div>
    );
  }
}

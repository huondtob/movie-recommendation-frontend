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
    const movieRows = this.state.movies.map(movie =>
      (
        <tr key={movie.id}>
          <td>{movie.title}</td>
          <td><button>Watched</button></td>
        </tr>
      ));

    return (
      <div>
        <h1>Search movies</h1>
        <input type="text" onChange={this.handleChange} />

        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            { movieRows }
          </tbody>
        </table>

        { this.state.error &&
          <strong>There was an error while fetching movies</strong> }
      </div>
    );
  }
}

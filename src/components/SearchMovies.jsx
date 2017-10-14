import React from 'react';

const BASE_URL = 'http://localhost:3001/api';

export default class SearchMovies extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      movies: [],
      name: '',
      error: null,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleClickSearch = this.handleClickSearch.bind(this);
  }

  handleChange(event) {
    this.setState({ name: event.target.value });
  }

  handleClickSearch() {
    const authToken = localStorage.getItem('token');

    const headers = new Headers({
      Authorization: `Bearer ${authToken}`,
    });

    return fetch(`${BASE_URL}/movie/?name=${this.state.name}`, { headers })
      .then((response) => {
        if (response.ok) {
          return response.json();
        }

        return response.json()
          .then((errBody) => {
            throw new Error(errBody.error);
          });
      })
      .then(movies => this.setState({ movies, error: null }))
      .catch(error => this.setState({ error }));
  }

  handleClickWatched(movieId) {
    const authToken = localStorage.getItem('token');

    const headers = new Headers({
      Authorization: `Bearer ${authToken}`,
      'Content-Type': 'application/json',
    });

    return fetch(
      `${BASE_URL}/user/${this.props.username}/watched`,
      {
        method: 'put',
        headers,
        body: JSON.stringify([movieId]),
      },
    )
      .then((response) => {
        if (response.ok) {
          return null;
        }

        return response.json()
          .then((errBody) => {
            throw new Error(errBody.error);
          });
      })
      .then(() => this.setState({ error: null }))
      .catch(error => this.setState({ error }));
  }

  render() {
    const movieRows = this.state.movies.map(movie =>
      (
        <tr key={movie.id}>
          <td>{movie.title}</td>
          <td><button onClick={() => this.handleClickWatched(movie.id)}>Watched</button></td>
        </tr>
      ));

    return (
      <div>
        <h1>Search movies</h1>
        <input type="text" onChange={this.handleChange} />
        <button onClick={this.handleClickSearch}>Search</button>
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

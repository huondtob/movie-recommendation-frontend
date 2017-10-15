/**
 * @summary   Component which is responsble for handling the search requests for movies
 * @author    Kevin Gasser, Simon Müller, Tobias Huonder
*/

import React from 'react';
import { Table, Message, Input, Button } from 'semantic-ui-react';

const BASE_URL = 'https://movie-recommendation-backend.herokuapp.com/api';

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
      .then(() => {
        const movies = this.state.movies.filter(({ id }) => id !== movieId);
        this.setState({ error: null, movies });
      })
      .catch(error => this.setState({ error }));
  }

  render() {
    const movieRows = this.state.movies.map(movie =>
      (
        <Table.Row key={movie.id}>
          <Table.Cell>{movie.title}</Table.Cell>
          <Table.Cell>
            <Button onClick={() => this.handleClickWatched(movie.id)}>Watched</Button>
          </Table.Cell>
        </Table.Row>
      ));

    return (
      <div>
        <h1>Search movies</h1>
        <Input type="text" onChange={this.handleChange} />
        <Button onClick={this.handleClickSearch} primary>Search</Button>
        <Table celled>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Name</Table.HeaderCell>
              <Table.HeaderCell>Action</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            { movieRows }
          </Table.Body>
        </Table>

        { this.state.error &&
          <Message negative>
            <Message.Header>{ this.state.error }</Message.Header>
          </Message>
        }
      </div>
    );
  }
}

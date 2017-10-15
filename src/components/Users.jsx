/**
 * @summary   Users Component fetches and displays all users with the ability to delete them
 * @author    Kevin Gasser, Simon Müller, Tobias Huonder
*/

import React from 'react';
import { Table, Message } from 'semantic-ui-react';

const BASE_URL = 'http://localhost:3001/api';

export default class Users extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      users: [],
      error: null,
    };

    this.getUsers = this.getUsers.bind(this);
  }

  componentWillMount() {
    this.getUsers();
  }

  getUsers() {
    const authToken = localStorage.getItem('token');

    const headers = new Headers({
      Authorization: `Bearer ${authToken}`,
    });

    return fetch(`${BASE_URL}/user/`, { headers })
      .then((response) => {
        if (response.ok) {
          return response.json();
        }

        return response.json()
          .then((errBody) => {
            throw new Error(errBody.error);
          });
      })
      .then(users => this.setState({ users }))
      .catch(error => this.setState({ error }));
  }

  handleClickDelete(username) {
    const authToken = localStorage.getItem('token');

    const headers = new Headers({
      Authorization: `Bearer ${authToken}`,
    });

    return fetch(
      `${BASE_URL}/user/${username}`,
      {
        headers,
        method: 'delete',
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
      .then(() => this.getUsers())
      .catch(error => this.setState({ error }));
  }

  render() {
    const userRows = this.state.users.map(user =>
      (
        <Table.Row key={user.username}>
          <Table.Cell>{user.username}</Table.Cell>
          <Table.Cell>
            <button onClick={() => this.handleClickDelete(user.username)}>Delete</button>
          </Table.Cell>
        </Table.Row>
      ));

    return (
      <div>
        <h1>Users</h1>
        <Table celled>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Username</Table.HeaderCell>
              <Table.HeaderCell>Action</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          { userRows }
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

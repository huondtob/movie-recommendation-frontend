/**
 * @summary   Users Component fetches and displays all users with the ability to delete them
 * @author    Kevin Gasser, Simon Müller, Tobias Huonder
*/

import React from 'react';

const BASE_URL = 'https://peaceful-dawn-58845.herokuapp.com/api';

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
        <tr key={user.username}>
          <td>{user.username}</td>
          <td><button onClick={() => this.handleClickDelete(user.username)}>Delete</button></td>
        </tr>
      ));

    return (
      <div>
        <h1>Users</h1>
        <table>
          <tr>
            <th>Username</th>
            <th>Action</th>
          </tr>
          { userRows }
        </table>

        { this.state.error &&
          <strong>There was an error fetching all users</strong> }
      </div>
    );
  }
}

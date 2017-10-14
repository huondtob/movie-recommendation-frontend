import React from 'react';

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

  render() {
    const userContainers = this.state.users.map(user =>
      (<div key={user.usernamer}>{user.username}</div>));

    return (
      <div>
        <h1>Users</h1>
        { userContainers }
        { this.state.error &&
          <strong>There was an error fetching all users</strong> }
      </div>
    );
  }
}

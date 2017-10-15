/**
 * @summary   Header component
 * @author    Kevin Gasser, Simon Müller, Tobias Huonder
*/

import React from 'react';
import { Link } from 'react-router-dom';
import { Menu } from 'semantic-ui-react'

export default class Header extends React.Component {
  constructor(props) {
    super(props);

    this.state = { activeItem: 'home' };
    this.handleItemClick = this.handleItemClick.bind(this);
  }

  handleItemClick(e, { name }) {
    this.setState({ activeItem: name });
  }

  render() {
    const { authenticated, isAdmin, handleLogout } = this.props;
    const { activeItem } = this.state;

    return (
      <header>
        <nav>
          <Menu pointing secondary>
            <Menu.Item
              as={Link}
              to="/"
              name="home"
              active={activeItem === 'home'}
              onClick={this.handleItemClick}
            >
              Home
            </Menu.Item>
            <Menu.Item
              as={Link}
              to="/register"
              name="register"
              active={activeItem === 'register'}
              onClick={this.handleItemClick}
            >
              Register
            </Menu.Item>
            { authenticated &&
              <Menu.Item
                as={Link}
                to="/movies"
                name="movies"
                active={activeItem === 'movies'}
                onClick={this.handleItemClick}
              >
                Search movies
              </Menu.Item>
            }
            { authenticated && isAdmin &&
              <Menu.Item
                as={Link}
                to="/users"
                name="users"
                active={activeItem === 'users'}
                onClick={this.handleItemClick}
              >
                Users
              </Menu.Item>
            }
            <Menu.Menu position="right">
              { !authenticated &&
                <Menu.Item
                  as={Link}
                  to="/login"
                  name="login"
                  active={activeItem === 'login'}
                  onClick={this.handleItemClick}
                >
                  Login
                </Menu.Item>
              }
              { authenticated &&
                <Menu.Item
                  name="logout"
                  active={activeItem === 'logout'}
                  onClick={handleLogout}
                >
                  Logout
                </Menu.Item>
              }
            </Menu.Menu>
          </Menu>
        </nav>
      </header>
    );
  }
}

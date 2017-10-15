import React from 'react';
import { Link } from 'react-router-dom';

export default function Header(props) {
  const { authenticated, isAdmin, handleLogout } = props;

  return (
    <header>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/register">Register</Link></li>
          { !authenticated && <li><Link to="/login">Login</Link></li> }
          { authenticated && <li><Link to="/movies">Search movies</Link></li> }
          { authenticated && isAdmin && <li><Link to="/users">Users</Link></li> }
          { authenticated && <li><button onClick={handleLogout}>Logout</button></li> }
        </ul>
      </nav>
    </header>
  );
}

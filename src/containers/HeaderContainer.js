import { connect } from 'react-redux';
import { logoutUser, logoutUserSuccess, logoutUserFailure } from '../actions/user';
import Header from '../components/Header';

const BASE_URL = 'http://localhost:3001/api';

const mapStateToProps = state => ({
  authenticated: state.user.authenticated,
  isAdmin: state.user.isAdmin,
});

const mapDispatchToProps = dispatch => ({
  handleLogout: () => {
    dispatch(logoutUser);

    const authToken = localStorage.getItem('token');

    const headers = new Headers({
      Authorization: `Bearer ${authToken}`,
    });

    return fetch(`${BASE_URL}/auth/logout`, { method: 'post', headers })
      .then((response) => {
        if (response.ok) {
          return undefined;
        }

        return response.json()
          .then(({ error }) => {
            throw new Error(error);
          });
      })
      .then(() => {
        localStorage.clear();
        dispatch(logoutUserSuccess);
      })
      .catch(err => dispatch(logoutUserFailure(err)));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);

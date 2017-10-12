import React from 'react';
import { Redirect, Route, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

export const AuthenticatedRouteContainer = ({ component: Component, ...rest }) => {
  const { authenticated } = rest;

  return (<Route
    {...rest}
    render={
      props => (
        authenticated ? (<Component {...props} />) : (<Redirect to="/login" />)
      )
    }
  />);
};

const mapStateToProps = state => ({
  authenticated: state.user.authenticated,
});

export default withRouter(connect(mapStateToProps)(AuthenticatedRouteContainer));

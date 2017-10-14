import React from 'react';
import { Redirect, Switch, Route, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

const AuthenticatedRouteContainer = (props) => {
  const { authenticated } = props;

  return (<Route
    render={
      () => (
        authenticated ? (<Switch>{props.children}</Switch>) : (<Redirect to="/login" />)
      )
    }
  />);
};

const mapStateToProps = state => ({
  authenticated: state.user.authenticated,
});

export default withRouter(connect(mapStateToProps)(AuthenticatedRouteContainer));

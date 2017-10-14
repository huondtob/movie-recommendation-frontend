import React from 'react';
import { Redirect, Switch, Route, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

const AdminRouteContainer = (props) => {
  const { isAdmin } = props;

  return (<Route
    render={
      () => (
        isAdmin ? (<Switch>{props.children}</Switch>) : (<Redirect to="/" />)
      )
    }
  />);
};

const mapStateToProps = state => ({
  isAdmin: state.user.isAdmin,
});

export default withRouter(connect(mapStateToProps)(AdminRouteContainer));

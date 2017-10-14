import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Home';
import LoginContainer from '../containers/LoginContainer';
import RegisterContainer from '../containers/RegisterContainer';
import SearchMovies from '../components/SearchMovies';
import Recommendations from '../components/Recommendations';
import AuthenticatedRouteContainer from '../containers/AuthenticatedRouteContainer';
import AdminRouteContainer from '../containers/AdminRouteContainer';
import PasswordResetContainer from '../containers/PasswordResetContainer';
import SetPasswordContainer from '../containers/SetPasswordContainer';
import Users from './Users';

export default function Main() {
  return (
    <main>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/login" component={LoginContainer} />
        <Route path="/register" component={RegisterContainer} />
        <Route path="/reset-password" component={PasswordResetContainer} />
        <Route path="/set-password" component={SetPasswordContainer} />
        <AuthenticatedRouteContainer>
          <Route path="/movies" component={SearchMovies} />
          <Route path="/recommendations" component={Recommendations} />
          <AdminRouteContainer>
            <Route path="/users" component={Users} />
          </AdminRouteContainer>
        </AuthenticatedRouteContainer>
      </Switch>
    </main>
  );
}

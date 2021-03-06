/**
 * @summary   Defines authenticated, admin and public routes
 * @author    Kevin Gasser, Simon Müller, Tobias Huonder
*/

import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Segment, Container } from 'semantic-ui-react';
import Home from './Home';
import LoginContainer from '../containers/LoginContainer';
import RegisterContainer from '../containers/RegisterContainer';
import SearchMoviesContainer from '../containers/SearchMoviesContainer';
import AuthenticatedRouteContainer from '../containers/AuthenticatedRouteContainer';
import AdminRouteContainer from '../containers/AdminRouteContainer';
import PasswordResetContainer from '../containers/PasswordResetContainer';
import SetPasswordContainer from '../containers/SetPasswordContainer';
import Users from './Users';

export default function Main() {
  return (
    <main>
      <Segment>
        <Container text>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/login" component={LoginContainer} />
            <Route path="/register" component={RegisterContainer} />
            <Route path="/reset-password" component={PasswordResetContainer} />
            <Route path="/set-password" component={SetPasswordContainer} />
            <AuthenticatedRouteContainer>
              <Route path="/movies" component={SearchMoviesContainer} />
              <AdminRouteContainer>
                <Route path="/users" component={Users} />
              </AdminRouteContainer>
            </AuthenticatedRouteContainer>
          </Switch>
        </Container>
      </Segment>
    </main>
  );
}

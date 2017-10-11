import React from 'react';
import { Switch, Route } from 'react-router-dom'
import Home from './Home';
import LoginContainer from '../containers/LoginContainer';
import RegisterContainer from '../containers/RegisterContainer';
import SearchMoviesContainer from '../containers/SearchMoviesContainer';
import RecommendationsContainer from '../containers/RecommendationsContainer';
import AuthenticatedRouteContainer from '../containers/AuthenticatedRouteContainer';
import Users from './Users';

export default function Main(props) {
  return (
    <main>
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route path='/login' component={LoginContainer}/>
        <Route path='/register' component={RegisterContainer}/>
        <AuthenticatedRouteContainer path='/movies' component={SearchMoviesContainer}/>
        <AuthenticatedRouteContainer path='/recommendations' component={RecommendationsContainer}/>
        <AuthenticatedRouteContainer path='/users' component={Users}/>
      </Switch>
    </main>
  );
}

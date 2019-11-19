import React from 'react';
import { Switch, Route } from 'react-router-dom';
import {WrappedNormalLoginForm} from '../components/Login'
import {WrappedRegistrationForm} from '../components/Register'
const routes = [];

export default () => (
  <Switch>
    <Route path="/login" exact={true} component={WrappedNormalLoginForm} />
    <Route path="/register" exact={true} component={WrappedRegistrationForm} />
    <Route path="/" component={() => <div>hello</div>} />
  </Switch>
);

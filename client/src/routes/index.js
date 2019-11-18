import React from 'react';
import { Switch, Route } from 'react-router-dom';

const routes = [];

export default () => (
  <Switch>
    <Route path="/" component={() => <div>hello</div>} />
  </Switch>
);

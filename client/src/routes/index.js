import React from 'react';
import { Switch, Route } from 'react-router-dom';
import PrivateRoute from './private-route';
import Loadable from 'react-loadable';

import Loading from '../components/Loading';

const Home = Loadable({
  loader: () => import('../pages/Home'),
  loading: Loading,
});

const Grammar = Loadable({
  loader: () => import('../pages/Grammar'),
  loading: Loading,
});

const Exam = Loadable({
  loader: () => import('../pages/Exam'),
  loading: Loading,
});
const Intro = Loadable({
  loader: () => import('../pages/Exam/Intro'),
  loading: Loading,
});
const Topics = Loadable({
  loader: () => import('../pages/Topics'),
  loading: Loading,
});
const Flashcard = Loadable({
  loader: () => import('../pages/Flashcard'),
  loading: Loading,
});

const routes = [
  {
    path: '/',
    component: Home,
  },
  {
    path: '/grammar',
    component: Grammar,
  },
  {
    path: '/exam',
    component: Exam,
  },
  {
    path: '/exam/intro',
    component: Intro,
  },
  {
    path: '/new-word',
    component: Topics,
  },
  {
    path: '/new-word/:topic',
    component: Flashcard,
  },
  {
    path: '*',
    component: () => <div>404!</div>,
  },
];

export default () => (
  <Switch>
    {routes.map(({ path, component, exact = true, isPrivate }, index) => {
      if (!isPrivate) {
        return (
          <Route key={index} path={path} component={component} exact={exact} />
        );
      } else {
        return (
          <PrivateRoute
            key={index}
            path={path}
            component={component}
            exact={exact}
          />
        );
      }
    })}
  </Switch>
);

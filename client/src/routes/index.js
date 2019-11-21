import React from 'react';
import { Switch, Route } from 'react-router-dom';
import PrivateRoute from './private-route';
import Loadable from 'react-loadable';

import Loading from '../components/Loading';

// const NormalLoginForm = Loadable({
//   loader: () => import('../pages/Login'),
//   loading: Loading,
// });
// const RegistrationForm = Loadable({
//   loader: () => import('../pages/Register/index.js'),
//   loading: Loading,
// });
const Home = Loadable({
  loader: () => import('../pages/Home'),
  loading: Loading,
});

const Grammar = Loadable({
  loader : () => import ('../pages/Grammar'),
  loading : Loading
})

const Exam = Loadable({
  loader : () => import ('../pages/Exam'),
  loading : Loading
})

const Intro = Loadable({
  loader : () => import ('../pages/Exam/Intro'),
  loading : Loading
})

const routes = [
  {
    path: '/',
    component: Home,
  },
  // {
  //   path: '/login',
  //   component: NormalLoginForm,
  // },
  // {
  //   path: '/register',
  //   component: RegistrationForm,
  // },
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

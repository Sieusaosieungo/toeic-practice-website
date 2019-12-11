import React from 'react';
import { Switch, Route } from 'react-router-dom';
import PrivateRoute from './private-route';
import Loadable from 'react-loadable';

import Loading from '../components/Loading';

const Home = Loadable({
  loader: () => import('../pages/Home'),
  loading: Loading,
});
const Admin = Loadable({
  loader: () => import('../pages/Admin'),
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
const Part1 = Loadable({
  loader: () => import('../pages/Exam/Part1'),
  loading: Loading,
});
const Part2Intro = Loadable({
  loader: () => import('../pages/Exam/Part2Intro'),
  loading: Loading,
});
const Part2 = Loadable({
  loader: () => import('../pages/Exam/Part2'),
  loading: Loading,
});
const Part3 = Loadable({
  loader: () => import('../pages/Exam/Part3'),
  loading: Loading,
});
const Part3Intro = Loadable({
  loader: () => import('../pages/Exam/Part3Intro'),
  loading: Loading,
});
const Part4 = Loadable({
  loader: () => import('../pages/Exam/Part4'),
  loading: Loading,
});
const Part4Intro = Loadable({
  loader: () => import('../pages/Exam/Part4Intro'),
  loading: Loading,
});
const Part5 = Loadable({
  loader: () => import('../pages/Exam/Part5'),
  loading: Loading,
});
const Part5Intro = Loadable({
  loader: () => import('../pages/Exam/Part5Intro'),
  loading: Loading,
});
const Part6 = Loadable({
  loader: () => import('../pages/Exam/Part6'),
  loading: Loading,
});
const Part6Intro = Loadable({
  loader: () => import('../pages/Exam/Part6Intro'),
  loading: Loading,
});
const Part7 = Loadable({
  loader: () => import('../pages/Exam/Part7'),
  loading: Loading,
});
const Part7Intro = Loadable({
  loader: () => import('../pages/Exam/Part7Intro'),
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
const PostGrammar = Loadable({
  loader: () => import('../pages/PostGrammar'),
  loading: Loading,
});

const routes = [
  {
    path: '/',
    component: Home,
  },
  {
    path: '/part/:idPart',
    component: PostGrammar,
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
    path: '/exam/part1',
    component: Part1,
  },
  {
    path: '/exam/part2intro',
    component: Part2Intro,
  },
  {
    path: '/exam/part2',
    component: Part2,
  },
  {
    path: '/exam/part3intro',
    component: Part3Intro,
  },
  {
    path: '/exam/part3',
    component: Part3,
  },
  {
    path: '/exam/part4intro',
    component: Part4Intro,
  },
  {
    path: '/exam/part4',
    component: Part4,
  },
  {
    path: '/exam/part5intro',
    component: Part5Intro,
  },
  {
    path: '/exam/part5',
    component: Part5,
  },
  {
    path: '/exam/part6intro',
    component: Part6Intro,
  },
  {
    path: '/exam/part6',
    component: Part6,
  },
  {
    path: '/exam/part7intro',
    component: Part7Intro,
  },
  {
    path: '/exam/part7',
    component: Part7,
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
